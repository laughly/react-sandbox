//Navigation Bar component
var React = require('react');
var ReactPropTypes = React.PropTypes;


  var style = {
    backgroundColor: 'grey',
    width: '600px',
    height: '300px'
  }

var Payments = React.createClass({
  propTypes: {

  },




  render: function() {
    return (
      <div>
        <div className = 'sectionTitle'>
         <h1>Payments</h1>
         <h2>View payment information and history</h2>
        </div>

        <div style={style}>BankInfo</div>
        <button>Link/Unlink Bank</button>

        <div style={style}>PaymentHistory</div>

      </div>

    );
  },

});

module.exports = Payments;