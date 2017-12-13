import { Component, Prop, PropDidChange, PropWillChange, State } from '@stencil/core';

@Component({
  tag: 'app-marked',
  styleUrl: 'app-marked.scss'
})
export class AppMarked {

  @Prop() doc: string;
  @Prop({ context: 'isServer' }) private isServer: boolean;

  @State() content: string;

  componentWillLoad() {
    return this.fetchNewContent();
  }

  @PropWillChange("doc")
  docWillChange() {
    // FIXME: https://github.com/ionic-team/stencil/issues/312
  }

  @PropDidChange('doc')
  fetchNewContent() {
    return fetch(`/docs-content/${this.doc}`)
      .then(response => response.text())
      .then(data => {
        this.content = data;

        const el = document.createElement('div');
        el.innerHTML = data;

        const headerEl = el.querySelector('h1');
        document.title = (headerEl && headerEl.textContent + ' - Stencil') || 'Stencil';
        
        // requestAnimationFrame is not available for preRendering
        // or SSR, so only run this in the browser
        if (!this.isServer) {
          window.requestAnimationFrame(() => {
            window.scrollTo(0, 0);
          })
        }

      });
  }

  render() {
    return (
      <div innerHTML={this.content}></div>
    )
  }
}
