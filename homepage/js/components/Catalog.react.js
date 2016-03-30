//Catalog Page
var React = require('react');
var ReactPropTypes = React.PropTypes;

var PageTitle = require('./PageTitle.react');


var Catalog = React.createClass({
  propTypes: {

  },

  render: function() {
  	return (
  		<div className="container">
			<PageTitle title="View Catalog" subtitle="View current catalog or publish new album"/>
  		</div>
    );
  },

});

module.exports = Catalog;
