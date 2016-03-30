//Navbar component
var React = require('react');
var ReactPropTypes = React.PropTypes;
var NavLink   = require('./NavLink.react');

var NavBar = React.createClass({
  propTypes: {

  },

  render: function() {
    return (
      <nav className="navbar navbar-default laughNav">
         <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Laugh.ly</a>
          </div>
          <ul role="nav" className="nav navbar-nav">
            <li className="laughNavItem"><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/biography">Biography</NavLink></li>
            <li><NavLink to="/catalog">Catalog</NavLink></li>
            <li><NavLink to="/analytics">Analytics</NavLink></li>
            <li><NavLink to="/payments">Payments</NavLink></li>
            <li><NavLink to="/settings">Settings</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  },
});

module.exports = NavBar;
