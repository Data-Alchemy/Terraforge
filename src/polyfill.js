// src/polyfill.js
if (typeof globalThis === 'undefined') {
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Object.prototype, '__globalThis__', {
    get: function() {
      return this;
    },
    configurable: true
  });
  // @ts-ignore
  __globalThis__.globalThis = __globalThis__;
  delete Object.prototype.__globalThis__;
}
