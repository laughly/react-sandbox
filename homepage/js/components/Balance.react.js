//Bank info component
var React = require('react');
var ReactPropTypes = React.PropTypes;


  var style = {
    backgroundColor: 'green',
    width: '250px',
    height: '250px'
  }

var Balance = React.createClass({
  propTypes: {

  },



  render: function() {
    return (
<div className="container">

    <div className="panel panel-primary">
      <div className="panel-heading">Panel with panel-primary class</div>
      <div className="panel-body">Panel Content</div>
    </div>

</div>
    );
  },

});

module.exports = Balance;