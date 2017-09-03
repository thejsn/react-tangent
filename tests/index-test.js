import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Tangent from 'src/';

describe('Tangent', () => {
  let node;
  let XMLS;

  beforeEach(() => {
    node = document.createElement('div');
    XMLS = new XMLSerializer(); 
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('Creates a valid SVG element.', () => {
    render(<Tangent keys={ [ 'A', 'B', 'C' ] } />, node, () => {

      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(node.innerHTML, "image/svg+xml");
      const serialized = XMLS.serializeToString(svgDoc);
      
      expect(serialized).toContain('<svg');
      expect(serialized).toNotContain('<parsererror');
    })
  })

  it('Clamps dimensions to a positive value.', () => {
    render(<Tangent
      cellWidth={ 0 }
      cellHeight={ -10 }
      keys={ [{
        width: -1,
        height: 0
      }] } />, node, () => {
      
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(node.innerHTML, "image/svg+xml");
      const serialized = XMLS.serializeToString(svgDoc);
      
      const parts = serialized.match(/<rect.+?width="(.+?)".+?height="(.+?)".+?\/>/);
      const width = +parts[1];
      const height = +parts[2];

      expect(serialized).toContain('<svg');
      expect(serialized).toNotContain('<parsererror');
      expect(width).toBeGreaterThan(0);
      expect(height).toBeGreaterThan(0);
    })
  })

  it('Can take a key position of value 0 without treating the key as a string.', () => {
    render(<Tangent keys={ [{
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 0
    }] } />, node, () => {

      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(node.innerHTML, "image/svg+xml");
      const serialized = XMLS.serializeToString(svgDoc);

      const parts = serialized.match(/<g.+?translate\(.+?\)/g);
      const parsed = parts
        .map(part => (part.match(/translate\((.+?), (.+?)/)))
        .map(part => ({x: part[1], y: part[2]}));
      
      expect(serialized).toContain('<svg');
      expect(serialized).toNotContain('<parsererror');
      expect(parsed[0].x).toEqual(parsed[1].x);
      expect(parsed[0].y).toEqual(parsed[1].y);
    })
  })
})
