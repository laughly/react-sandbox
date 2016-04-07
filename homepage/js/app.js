
var React = require('react');


var NavBar = require('./components/NavBar.react');
var Home = require('./components/Home.react');
var Biography = require('./components/Biography.react');
var Catalog = require('./components/Catalog.react');
var Analytics = require('./components/Analytics.react');
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
			<Route path="/home" component={Home}/>
			<Route path="/biography" components={Biography}/>
			<Route path="/catalog" component={Catalog}/>
			<Route path="/analytics" components={Analytics}/>
			<Route path="/payments" component={Payments}/>
			<Route path="/settings" components={Settings}/>
		</Route>
	</Router>
);



React.render(routes,
  document.getElementById('app')
);
