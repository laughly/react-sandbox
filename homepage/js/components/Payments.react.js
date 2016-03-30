//Navigation Bar component
var React = require('react');
var ReactPropTypes = React.PropTypes;


var Balance = require('./Balance.react');
var BankInfo = require('./BankInfo.react');
var PaymentHistory = require('./PaymentHistory.react');
var PageTitle = require('./PageTitle.react');


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
     <div className="container">
      <div>
        <PageTitle title="Payments" subtitle="View your payment information and history."/>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Balance/>
           <BankInfo/>
        </div>
        <div className="col-md-6">
          <PaymentHistory/>
        </div>
      </div>
     

       
    </div>


    );
  },

});

module.exports = Payments;