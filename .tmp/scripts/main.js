'use strict';

Ractive.components.Card = Ractive.extend({
  template: '#cardTemplate'
});
Ractive.components.LiveDemo = Ractive.extend({
  template: '#liveTemplate'
});
var Browser = Ractive.extend({
  goto: function goto(index) {
    var pages = this.get('page');
    var num = (index + pages.length) % pages.length;
    this.set('past', this.get('current'));
    this.set('current', num);
  },
  alert: alert,
  data: function data() {
    return { current: 0, past: 0 };
  }

});
window.browser = new Browser({
  template: '#browserTemplate',
  target: '#websites',
  data: function data() {
    return { page: window.pages, nextLabel: 'Website' };
  }
});
window.webapp = new Browser({
  template: '#browserTemplate',
  target: '#webapps',
  data: function data() {
    return { page: window.apps, nextLabel: 'Web App' };
  }
});

window.NPM = new Ractive({
  template: '#npmTemplate',
  target: '#npm',
  data: function data() {
    return {
      items: window.npm
    };
  }
});
window.Scripts = new Ractive({
  template: '#npmTemplate',
  target: '#scripts',
  data: function data() {
    return {
      items: window.script
    };
  }
});
//# sourceMappingURL=main.js.map
