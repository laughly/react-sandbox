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
/*
     <div>
      <PageTitle/>
      <div className="row">
        <div className="span12">
          <div className="row">
            <div className="span4"><Balance/></div>
            <div className="span8"><PaymentHistory/></div>
          </div>
          <div className="row">
            <div className="span12"><BankInfo/></div>
          </div>
        </div>
      </div>  
    </div>*/
  render: function() {
    return (
     <div>
      <div>
      <PageTitle/>
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