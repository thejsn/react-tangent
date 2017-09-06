import React, {Component} from 'react'
import TangentUtils from './TangentUtils';
import Group from './Group';
import Text from './Text';
import Rect from './Rect';

let FONT_BLOB = '';
let FONT_NAME = '';

export default class Tangent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      keys: [],
      width: 0,
      height: 0
    };
  }

  getBase64FontBlob(name, base64blob) {
    if(name && base64blob) {

      // Hack to get around styled-jsx dogma.
      FONT_NAME = name;
      FONT_BLOB = base64blob;
      
      return <style jsx>{`
        @font-face {
          font-family: '${ FONT_NAME }';
          src: url(data:application/font-woff;charset=utf-8;base64,${ FONT_BLOB }) format('woff');
        }
      `}</style>
    } else {
      return '';
    }
  }

  clickedKey(data) {
    this.props.onKeyPress(data);
  }

  updateState(props) {

    const util = new TangentUtils(props);
    const keys = util.parseKeys(props.keys);
    const { width, height } = util.getMapDimensions(keys);
  
    this.setState({
      keys,
      width,
      height
    });

    if(width !== this.state.width || height !== this.state.height) {
      this.props.onDimensionsChange({ width, height });
    }
  }

  componentDidMount() {
    this.updateState(this.props);
  }
  
  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }
  
  render() {
    const {
      keys,
      width,
      height
    } = this.state;
    
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${ width } ${ height }`}
        width={ width }
        height={ height }>

      { this.getBase64FontBlob() }

      { keys ? keys.map((key, i) => (
        <Group x={ key.x } y={ key.y } key={ i }>
          <Rect
            width={ key.width }
            height={ key.height }
            fill={ this.props.keyColor }
            id={ key.id }
            label={ key.label }
            altId={ key.altId }
            altLabel={ key.altLabel }
            borderradius={ this.props.borderRadius }
            onClick={ this.clickedKey.bind(this) }
          />
          
          <Text
            color={ this.props.textColor }
            size={ this.props.fontSize }
            fontName={ this.props.fontName }
            x={ Math.round(key.width / 2) }
            y={ Math.round(key.height / 2) }>
            { key.label }
          </Text>
        </Group>
      )) : null }
      </svg>
    )
  }
}

Tangent.defaultProps = {
  cellWidth: 20,
  cellHeight: 20,
  innerPadding: 1,
  borderRadius: 10,
  defaultKeyWidth: 4,
  defaultKeyHeight: 4,
  maxCols: -1,
  keyColor: '#333',
  textColor: '#eee',
  fontName: 'Open Sans',
  fontSize: '30',
  fontEmbed: null,
  keys: [],
  onKeyPress: () => {},
  onDimensionsChange: () => {}
}