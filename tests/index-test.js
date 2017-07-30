import expect from 'expect'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Tangent from 'src/'

describe('Tangent', () => {
  let node;
  let XMLS;

  beforeEach(() => {
    node = document.createElement('div')
    XMLS = new XMLSerializer(); 
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('Creates a valid SVG element.', () => {
    render(<Tangent keys={ ['A', 'B', 'C' ] } />, node, () => {

      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(node.innerHTML, "image/svg+xml");
      const serialized = XMLS.serializeToString(svgDoc);
      
      expect(serialized).toContain('<svg')
      expect(serialized).toNotContain('<parsererror')
    })
  })
})
