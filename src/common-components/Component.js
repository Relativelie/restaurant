class Component {
  constructor(templateSelector) {
    this.templateEl = templateSelector ? document.querySelector(templateSelector) : document.body;
  }

  getTemplateBody() {
    return document.importNode(this.templateEl.content, true);
  }
}

export default Component;
