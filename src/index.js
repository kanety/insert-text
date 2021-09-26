export default class InsertText {
  constructor(element) {
    if (typeof element == 'string') {
      this.element = document.querySelector(element);
    } else {
      this.element = element;
    }

    let tag = this.element.tagName.toLowerCase();
    if (tag == 'input' || tag == 'textarea') {
      this.target = new InputTag(this.element);
    } else {
      this.target = new EditableTag(this.element);
    }
  }

  run(text, pos) {
    this.element.focus();
    this.target.insert(text, pos);
    this.element.focus();
  }

  static run(element, text, pos = 'caret') {
    new InsertText(element).run(text, pos);
  }
}

class InputTag {
  constructor(element) {
    this.element = element;
  }

  insert(text, pos) {
    switch (pos) {
    case 'caret':
      this.insertAtCaret(text);
      break;
    case 'first':
      this.insertAt(text, 0);
      break;
    case 'last':
      this.insertAt(text, this.element.value.length);
      break;
    default:
      this.insertAt(text, pos);
      break;
    } 
  }

  insertAtCaret(text) {
    let start = this.element.selectionStart;
    let end = this.element.selectionEnd;
    this.insertAt(text, start, end);
  }

  insertAt(text, start, end = null) {
    end = end || start;

    let content = this.element.value;
    this.element.value = `${content.substring(0, start)}${text}${content.substring(end)}`;

    let pos = start + text.length
    this.element.setSelectionRange(pos, pos);
  }
}

class EditableTag {
  constructor(element) {
    this.element = element;
  }

  insert(text, pos) {
    switch (pos) {
    case 'caret':
      this.insertAtCaret(text);
      break;
    case 'first':
      this.insertAtFirst(text);
      break;
    case 'last':
      this.insertAtLast(text);
      break;
    default:
      this.insertAt(text, pos.selector, pos.position);
      break;
    } 
  }

  insertAtCaret(text) {
    let newNode = this.createNode(text);
    let selection = window.getSelection();
    
    let range;
    if (selection.rangeCount > 0) {
      range = selection.getRangeAt(0);
    } else {
      range = document.createRange();
      range.setStart(this.element, 0);
    }
    range.deleteContents(); 
    range.insertNode(newNode);
    range.setStartAfter(newNode);

    selection.removeAllRanges();
    selection.addRange(range);
  }

  insertAtFirst(text) {
    let newNode = this.createNode(text);
    this.element.prepend(newNode);
    this.adjustSelection(newNode);
  }

  insertAtLast(text) {
    let newNode = this.createNode(text);
    this.element.append(newNode);
    this.adjustSelection(newNode, false);
  }

  insertAt(text, selector, pos) {
    this.element.querySelectorAll(selector).forEach(elem => {
      let target = Array.from(elem.childNodes).find(elem => elem.nodeType == 3);
      let newNode = this.createNode(text);
      let range = document.createRange();
      range.setStart(target, pos);
      range.insertNode(newNode);
    });
  }

  createNode(text) {
    let div = document.createElement('div');
    div.innerHTML = text;
    return div.firstChild; 
  }

  adjustSelection(node, after = true) {
    let selection = window.getSelection();
    let range = document.createRange();
    if (after) {
      range.setStartAfter(node);
    } else {
      range.setStartBefore(node);
    }
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
