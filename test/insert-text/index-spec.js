import InsertText from 'index';

describe('index', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <textarea>sample text</textarea>
    `;
  });

  let textarea;
  beforeEach(() => {
    textarea = document.querySelector('textarea');
  });

  it('inserts at caret', () => {
    InsertText.run(textarea, 'INSERTED');
    expect(textarea.value).toEqual('INSERTEDsample text');
  });

  it('inserts at caret with selection', () => {
    textarea.setSelectionRange(0, 6);
    InsertText.run(textarea, 'INSERTED');
    expect(textarea.value).toEqual('INSERTED text');
  });

  it('inserts at first', () => {
    InsertText.run(textarea, 'INSERTED', 'first');
    expect(textarea.value).toEqual('INSERTEDsample text');
  });

  it('inserts at last', () => {
    InsertText.run(textarea, 'INSERTED', 'last');
    expect(textarea.value).toEqual('sample textINSERTED');
  });

  it('inserts at specified position', () => {
    InsertText.run(textarea, 'INSERTED', 6);
    expect(textarea.value).toEqual('sampleINSERTED text');
  });
});
