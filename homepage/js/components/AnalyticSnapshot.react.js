//Analytics Snapshot container on home page
var React = require('react');
var ReactPropTypes = React.PropTypes;


  var style = {
    backgroundColor: 'blue',
    width: '400px',
    height: '300px'
  }

var AnalyticSnapshot = React.createClass({
  propTypes: {

  },




  render: function() {
    return (
      <div style={style}>
        Chart
      </div>

    );
  },

});

module.exports = AnalyticSnapshot;