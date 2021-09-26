import InsertText from 'index';

describe('selector', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <textarea></textarea>
    `;
  });

  it('inserts', () => {
    InsertText.run('textarea', 'INSERTED');
    expect(document.querySelector('textarea').value).toEqual('INSERTED');
  });
});
