
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
      <ul className="nav navbar-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">Biography</a></li>
        <li><a href="#">Catalog</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Payments</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </div>
  </nav>
    );
  },

});

module.exports = NavBar;
