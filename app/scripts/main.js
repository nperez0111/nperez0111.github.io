Ractive.components.Card = Ractive.extend({
  template: '#cardTemplate'
});
var Browser = Ractive.extend({
  goto: function(index) {
    var pages = this.get('page')
    var num = (index + pages.length) % pages.length
    this.set('past', this.get('current'))
    this.set('current', num)
  },
  alert: alert,
  data: function() {
    return { current: 0, past: 0 }
  }

})
window.browser = new Browser({
  template: '#browserTemplate',
  target: '#websites',
  data: function() {
    return { page: window.pages }
  }
})
window.webapp = new Browser({
  template: '#browserTemplate',
  target: '#webapps',
  data: function() {
    return { page: window.apps }
  }
})

window.NPM = new Ractive({
  template: '#npmTemplate',
  target: '#npm',
  data: function() {
    return {
      items: window.npm
    }
  }
})
window.Scripts = new Ractive({
  template: '#npmTemplate',
  target: '#scripts',
  data: function() {
    return {
      items: window.script
    }
  }
})
