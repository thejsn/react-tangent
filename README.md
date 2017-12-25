# react-tangent

Create a simple, virtual SVG keyboard.

## Install

```
npm i -S react-tangent
```

## Example

```
import Tangent from 'react-tangent';

<Tangent keys={ ['A', 'B', 'C' ] } />
```

[More examples here](https://thejsn.github.io/react-tangent/)

## Properties

| prop | default | description |
| --- | --- | --- |
| cellWidth 		| 20			| Width in pixels of grid cells that make up the keyboard layout. |
| cellHeight 		| 20			| Height in pixels of grid cells that make up the keyboard layout. |
| innerPadding 		| 1				| Padding in pixels. Space between adjacent keys is twice this value. |
| borderRadius 		| 10			| Radius in pixels of rounded corners of keys. |
| defaultKeyWidth 	| 4				| Number of grid cells a key occupies, if not set. |
| defaultKeyHeight 	| 4				| Number of grid cells a key occupies, if not set. |
| maxCols 			| -1			| The maximum number of grid cells per row, if the keys' positions are not set manually |
| keyColor 			| '#333'		| Color of the keys. Can be overridden with css. |
| textColor 		| '#eee'		| Color of the text in keys. Can be overridden with css. |
| fontName 			| 'Open Sans'	| Font name of text in keys. |
| fontSize 			| '30'			| Font size of text in keys |
| fontEmbed 		| null			| A base64 encoded woff font to be embedded inside the svg. Might be useful to avoid cross-domain issues in some browsers. |
| keys 				| []			| An array of keys that make up the keyboard. See more info below. |
| onKeyClick 		| null		| Callback for key click. See more below. |
| onKeyPress 		| null		| Callback for key pressed. See more below. |
| onKeyRelease | null		| Callback for key released. See more below. |
| onDimensionsChange 		| null		| Callback when the svg size changes. An object is passed to the callback containing the width and height. |


### `keys`

The keys array can either consist of strings or objects.
Use the `maxCols` prop to control number of keys per row when using strings.

#### Key strings

```
// A key is 4 cells be default, 
// this will result in 2 keys per row:

<Tangent maxCols={ 8 } keys={ 'qwerty'.split('') } />
```

#### Key objects

Key object has the following fields

| field | default | description |
| --- | --- | --- |
| label | ''			| The text displayed in the key. |
| id 	| ''			| An identifier for the key. Is returned with onKeyPress callback. Can also be used to match key in css with `.tangent-key--[id]`. |
| x			| 0 | The keys' leftmost grid cell. |
| y			| 0 | The keys top grid cell. |
| width		| 4 | The number of grid cells a key occupies horizontally. |
| height	| 4 | The number of grid cells a key occupies vertically. |


```
// The beginning of a keyboard...

<Tangent keys={[
  {
    label: '§',
    id: 'paragraph'
  }, {
    label: '1',
    id: '1',
    x: 4
  }, {
    label: '2',
    id: '2',
    x: 8
  }, {
    label: 'Tab',
    id: 'tab',
    y: 4,
    width: 6
  }, {
    label: 'Q',
    id: 'q',
    x: 6,
    y: 4
  }
]} />
```

### Key listeners

```
<Tangent 
  onKeyClick={ keyListener }
  onKeyPress={ keyListener }
  onKeyRelease={ keyListener }
  keys={ '12345'.split('') } />
```

```
keyListener(data) {
  // Will return id and label
  
  const { id, label } = data;
}
```

## React alternatives

`react-tangent` works well with [Preact](https://github.com/developit/preact).


## License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.