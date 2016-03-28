//Navigation Bar component
var React = require('react');
var ReactPropTypes = React.PropTypes;


var Balance = require('./Balance.react');
var BankInfo = require('./BankInfo.react');
var PaymentHistory = require('./PaymentHistory.react');

  var style = {
    backgroundColor: 'grey',
    width: '200px',
    height: '200px',

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
    <div className="row">
  

    <div className="span12">
      <div className="row">
        <div className="span4"><Balance/></div>
        <div className="span8"><PaymentHistory/></div>
      </div>
      <div className="row">
        <div className="span12">
          <BankInfo/>
        </div>
      </div>
    </div>
  </div>  


</div>


    );
  },

});

module.exports = Payments;