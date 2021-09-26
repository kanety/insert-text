import InsertText from 'index';

describe('contenteditable', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div contenteditable="true"><b class="bold">sample</b> text</div>
    `;
  });

  let editable;
  beforeEach(() => {
    editable = document.querySelector('div');
  });

  it('inserts at caret', () => {
    InsertText.run(editable, '<i>INSERTED</i>');
    expect(editable.innerHTML).toEqual('<i>INSERTED</i><b class="bold">sample</b> text');
  });

  it('inserts at caret with selection', () => {
    let node = Array.from(editable.childNodes).find(elem => elem.nodeType == 3);
    let selection = document.getSelection();
    let range = document.createRange();
    range.setStart(node, 1);
    range.setEnd(node, 5);
    selection.removeAllRanges();
    selection.addRange(range);

    InsertText.run(editable, '<i>INSERTED</i>');
    expect(editable.innerHTML).toEqual('<b class="bold">sample</b> <i>INSERTED</i>');
  });

  it('inserts at first', () => {
    InsertText.run(editable, '<i>INSERTED</i>', 'first');
    expect(editable.innerHTML).toEqual('<i>INSERTED</i><b class="bold">sample</b> text');
  });

  it('inserts at last', () => {
    InsertText.run(editable, '<i>INSERTED</i>', 'last');
    expect(editable.innerHTML).toEqual('<b class="bold">sample</b> text<i>INSERTED</i>');
  });

  it('inserts at specified position', () => {
    InsertText.run(editable, '<i>INSERTED</i>', { selector: '.bold', position: 6 });
    expect(editable.innerHTML).toEqual('<b class="bold">sample<i>INSERTED</i></b> text');
  });
});
