//Bank info component
var React = require('react');
var ReactPropTypes = React.PropTypes;


 var style = {
    width : "500px"
  }

var PaymentHistory = React.createClass({
  propTypes: {

  },



  render: function() {
    return (
<div className="container" >
  <h2>Payment History</h2>
           
  <table className="table table-bordered table-condensed table-hover" style={style}>
    <thead>
      <tr>
        <th>Account Number</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>123475</td>
        <td>$294</td>
        <td>6/7/2016</td>
      </tr>
      <tr>
        <td>123475</td>
        <td>$139</td>
        <td>5/7/2016</td>
      </tr>
      <tr>
        <td>123475</td>
        <td>$78</td>
        <td>4/7/2016</td>
      </tr>
       <tr>
        <td>12483829</td>
        <td>$748</td>
        <td>3/7/2016</td>
      </tr>
    </tbody>
  </table>
</div>
 

    );
  },

});

module.exports = PaymentHistory;





