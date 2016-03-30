//Stat box
var React = require('react');
var ReactPropTypes = React.PropTypes;




var StatBox = React.createClass({
  propTypes: {
  	title: ReactPropTypes.string.isRequired,
  	stat: ReactPropTypes.string,
  	statType: ReactPropTypes.string
  },

  render: function() {
	  return (
	    <div className="statBox" >
	    	<div className = "statText">
	    		<h2>
	      		{this.props.title} 
	      		</h2>
	      		<h1>
	       		{this.props.stat}{this.props.statType}
	       		</h1>
	       	</div>
	    </div>
	    );
	 },

});

module.exports = StatBox;
