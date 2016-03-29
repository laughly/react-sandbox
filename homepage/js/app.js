/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var NavBar = require('./components/NavBar.react');
var Payments = require('./components/Payments.react');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<NavBar/>
				<Payments/>
			</div>
		)
	}
})

React.render(
  <App />,
  document.getElementById('app')
);
