import InsertText from 'index';

describe('element', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <textarea></textarea>
    `;
  });

  it('inserts', () => {
    let textarea = document.querySelector('textarea');
    InsertText.run(textarea, 'INSERTED');
    expect(textarea.value).toEqual('INSERTED');
  });
});
