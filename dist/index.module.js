class e{constructor(e){this.element="string"==typeof e?document.querySelector(e):e;var r=this.element.tagName.toLowerCase();this.target="input"==r||"textarea"==r?new t(this.element):new s(this.element)}run(e,t){this.element.focus(),this.target.insert(e,t),this.element.focus()}static run(t,s,r){void 0===r&&(r="caret"),new e(t).run(s,r)}}class t{constructor(e){this.element=e}insert(e,t){switch(t){case"caret":this.insertAtCaret(e);break;case"first":this.insertAt(e,0);break;case"last":this.insertAt(e,this.element.value.length);break;default:this.insertAt(e,t)}}insertAtCaret(e){this.insertAt(e,this.element.selectionStart,this.element.selectionEnd)}insertAt(e,t,s){void 0===s&&(s=null),s=s||t;var r=this.element.value;this.element.value=""+r.substring(0,t)+e+r.substring(s);var n=t+e.length;this.element.setSelectionRange(n,n)}}class s{constructor(e){this.element=e}insert(e,t){switch(t){case"caret":this.insertAtCaret(e);break;case"first":this.insertAtFirst(e);break;case"last":this.insertAtLast(e);break;default:this.insertAt(e,t.selector,t.position)}}insertAtCaret(e){var t,s=this.createNode(e),r=window.getSelection();r.rangeCount>0?t=r.getRangeAt(0):(t=document.createRange()).setStart(this.element,0),t.deleteContents(),t.insertNode(s),t.setStartAfter(s),r.removeAllRanges(),r.addRange(t)}insertAtFirst(e){var t=this.createNode(e);this.element.prepend(t),this.adjustSelection(t)}insertAtLast(e){var t=this.createNode(e);this.element.append(t),this.adjustSelection(t,!1)}insertAt(e,t,s){this.element.querySelectorAll(t).forEach(t=>{var r=Array.from(t.childNodes).find(e=>3==e.nodeType),n=this.createNode(e),i=document.createRange();i.setStart(r,s),i.insertNode(n)})}createNode(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild}adjustSelection(e,t){void 0===t&&(t=!0);var s=window.getSelection(),r=document.createRange();t?r.setStartAfter(e):r.setStartBefore(e),r.collapse(!0),s.removeAllRanges(),s.addRange(r)}}export{e as default};
//# sourceMappingURL=index.module.js.map
