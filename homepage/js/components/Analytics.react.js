//Analytics Page 
var React = require('react');
var ReactPropTypes = React.PropTypes;

var PageTitle = require('./PageTitle.react');
var StatBox = require('./StatBox.react');

var Analytics = React.createClass({
  propTypes: {

  },

  render: function() {
  	return (
  		<div className="container">
			 <PageTitle title="Analytics Suite" subtitle="View analytics on your published content"/>
			 <div className = "row">
			 	<div className="col-md-3">
			 		<StatBox title="Listens" stat='948' statType=""/>
			 	</div>
			 	<div className="col-md-3">
			 		<StatBox title="Listen Completion" stat='87' statType="%"/>
			 	</div>
			 	<div className="col-md-3">
			 		<StatBox title="Listens" stat='948' statType=""/>
			 	</div>
			 	<div className="col-md-3">
			 		<StatBox title="Listen Completion" stat='87' statType="%"/>
			 	</div>
			 </div>
  		</div>
    );
  },

});

module.exports = Analytics;
