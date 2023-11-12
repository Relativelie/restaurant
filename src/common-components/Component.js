class Component {
  constructor(templateSelector) {
    if (templateSelector) {
      this.templateEl = document.querySelector(templateSelector);
    } else {
      this.templateEl = document.body;
    }
  }

  getTemplateBody() {
    return document.importNode(this.templateEl.content, true);
  }
}

export default Component;
