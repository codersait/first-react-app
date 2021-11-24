// import React from "react";
// import ReactDOM from 'react-dom';

class SaitDOM {
  static render(template, injectPlace) {
    injectPlace.innerHTML = template;
  }
}
class Test {
  constructor(type, content, template) {
    this.type = type;
    this.content = content;
    if (template === undefined) {

      this.template = `<${this.type}>${this.content}</${this.type}>`
    } else {
      this.template = template

    }
  }
  updateTemplate(text, template) {
    if (template) {
      this.template = template
    }
    else {

      this.template = `<${this.type}>${text}</${this.type}>`
    }
  }
  setContent(text) {
    this.content = text;
    this.updateTemplate(text)
  }

}
const template = `<h1><a style="cursor:pointer">tikla</a></h1>`
const testInstance = new Test('h1', 'hello', template);
testInstance.updateTemplate('sait', undefined)
testInstance.updateTemplate('sait', template)



SaitDOM.render(testInstance.template, document.getElementById('root'))










// ReactDOM.render(element, document.getElementById('root'))