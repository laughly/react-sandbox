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
var Settings = require('./components/Settings.react');
const ReactRouter = require('react-router');

const Router = ReactRouter.Router,
	Route = ReactRouter.Route,
	hashHistory = ReactRouter.hashHistory,
	Redirect = ReactRouter.Redirect;

var App = React.createClass({
	render: function() {
		return (
			<div>
				<NavBar/>
				{this.props.children}
			</div>
		)
	}
});


const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/payments" component={Payments}/>
			<Route path="/settings" components={Settings}/>
		</Route>
	</Router>
);



React.render(routes,
  document.getElementById('app')
);
