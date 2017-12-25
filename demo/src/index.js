import React, { Component } from 'react'
import { render } from 'react-dom'
import Tangent from '../../src'
import './styles.css';

class Demo extends Component {
  render() {
    return (
    <div>
      <h1>react-tangent Demo</h1>

      <div className="keyboard-container">
        <p>This demo page has the following css which applies to all examples:</p>
        <pre>
{`svg {
  max-width: 100%;
}

svg rect {
  cursor: pointer;
  transition: all 0.4s;
}

svg text {
  pointer-events: none;
  user-select: none;
}

svg rect:hover {
  fill: #888;
}
`}
        </pre>
        <div className="example">
          <h2>Simple keyboard</h2>
          <pre>
{`<Tangent
  maxCols={ 40 }
  fontName={ 'Open Sans' }
  fontSize={ '20' }
  keys={ 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('') }
  onKeyPress={ console.log } />
`}
          </pre>
          <Tangent
            maxCols={ 40 }
            fontName={ 'Open Sans' }
            fontSize={ 20 }
            keys={ 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('') }
            onKeyPress={ console.log }
          />
        </div>
        
        <div className="example">

          <h2>Custom shapes and sizes</h2>
          <pre>
{`<Tangent
  innerPadding={ 0 }
  borderRadius={ 20 }
  defaultKeyWidth={ 2 } // number of cells, not pixels
  fontSize={ 40 }
  keys={ '1234567890'.split('') }
  onKeyClick={ console.log } />
`}
          </pre>
          <Tangent
            innerPadding={ 0 }
            borderRadius={ 20 }
            defaultKeyWidth={ 2 }
            fontSize={ 40 }
            keys={ '1234567890'.split('') }
            onKeyClick={ console.log }
          />
        </div>
        <div className="example">
          <h2>Set position, size and style of individual keys</h2>
          <p>Sizes are defined in grid cells, not pixels.</p>
          <pre>
{`<Tangent
  keyColor={ '#aaee8a' }
  textColor={ '#333' }
  fontSize={ 14 }
  fontName={ 'serif' }
  onKeyRelease={ console.log }
  keys={[
    {
      label: 'Tall!',
      x: 0, y: 0, width: 4, height: 6
    },
    {
      label: 'Tiny!',
      x: 4, y: 3, width: 2, height: 1
    },
    {
      label: 'Square!',
      x: 8, y: 0, width: 4, height: 4
    },
    {
      id: 'wide', // Will make class name look nicer
      label: 'Wide!',
      x: 4, y: 4, width: 12, height: 4
    },
    {
      label: 'Small!',
      x: 0, y: 6, width: 4, height: 2
    }
  ]}
/>`}
          </pre>

          <pre>
{`
/* In CSS */


.tangent-key--wide {
  fill: #5a3333;
}

.tangent-key--wide ~ text{
  fill: #fff;
}
`}
          </pre>
          <Tangent
            keyColor={ '#aaee8a' }
            textColor={ '#333' }
            fontSize={ 14 }
            fontName={ 'serif' }
            onKeyRelease={ console.log }
            keys={[
              {
                label: 'Tall!',
                x: 0, y: 0, width: 4, height: 6
              },
              {
                label: 'Tiny!',
                x: 4, y: 3, width: 2, height: 1
              },
              {
                label: 'Square!',
                x: 8, y: 0, width: 4, height: 4
              },
              {
                id: 'wide',
                label: 'Wide!',
                x: 4, y: 4, width: 12, height: 4
              },
              {
                label: 'Small!',
                x: 0, y: 6, width: 4, height: 2
              }
            ]}
          />
        </div>

        <div className="example">
          <h2>Change grid cell size.</h2>
          <p>
            Grid cell size can be set with cellWidth and cellHeight.
          </p> 
          <pre>
{`<Tangent
  cellWidth={ 24 }
  cellHeight={ 12 }
  keys={ 'ABCDEF'.split('') }/>
`}
          </pre>
          <Tangent
            cellWidth={ 23 }
            cellHeight={ 12 }
            keys={ 'ABCDEF'.split('') }/>
        </div>
      </div>
    </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
