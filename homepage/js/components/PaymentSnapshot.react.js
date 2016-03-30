//Payment snapshot on home page
var React = require('react');
var ReactPropTypes = React.PropTypes;


  var style = {
    backgroundColor: 'green',
    width: '400px',
    height: '300px'
  }

var PaymentSnapshot = React.createClass({
  propTypes: {

  },




  render: function() {
    return (
      <div style={style}>
        Payment
      </div>

    );
  },

});


module.exports = PaymentSnapshot;