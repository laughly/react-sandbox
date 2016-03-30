//Media Browser component
var React = require('react');
var ReactPropTypes = React.PropTypes;



  var style = {
    backgroundColor: 'grey',
    width: '700px',
    height: '270px',
  }

var MediaBroswer = React.createClass({
  propTypes: {

  },

  render: function() {
    return (
      <div style={style}>
        MediaBroswer
      </div>
    );
  },
});

module.exports = MediaBroswer;
