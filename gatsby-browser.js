const React = require('react');

exports.onRouteUpdate = () => {
  if (typeof window !== `undefined`) {
    window.scrollTo(0, 0);
  }
};
