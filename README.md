# insert-text

Insert text to input or contenteditable element.

## Installation

Install from npm:

    $ npm install @kanety/insert-text --save

## Usage

Insert text to `textarea`:

```html
<textarea>sample text</textarea>
```

```javascript
import InsertText from '@kanety/insert-text';
InsertText.run('textarea', 'YOUR TEXT');
```

Insert text to `contenteditable` element:

```html
<div contenteditable="true">sample text</div>
```

```javascript
import InsertText from '@kanety/insert-text';
InsertText.run('div[contenteditable]', 'YOUR TEXT');
```

Text is inserted at caret position by default.

### Options

Insert text at first position:

```javascript
InsertText.run('textarea', 'YOUR TEXT', 'first');
```

Insert text at last position:

```javascript
InsertText.run('textarea', 'YOUR TEXT', 'last');
```

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
