
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var NavLink   = require('./NavLink.react');

var NavBar = React.createClass({
  propTypes: {

  },

  render: function() {
  return (
  <nav className="navbar navbar-default">
     <div className="container-fluid">
     <div className="navbar-header">
        <a className="navbar-brand" href="#">Laugh.ly</a>
      </div>
      <ul role="nav" className="nav navbar-nav">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Biography</NavLink></li>
        <li><NavLink to="/">Catalog</NavLink></li>
        <li><NavLink to="/">Analytics</NavLink></li>
        <li><NavLink to="/payments">Payments</NavLink></li>
        <li><NavLink to="/settings">Settings</NavLink></li>
      </ul>
    </div>
  </nav>
    );
  },

});

module.exports = NavBar;

// navbar-nav
