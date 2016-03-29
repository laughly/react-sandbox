//Bank info component
var React = require('react');
var ReactPropTypes = React.PropTypes;


  var style = {
   width: '300px',
  }

var BankInfo = React.createClass({
  propTypes: {
    
  },


//<button type="button" className="btn btn-success">Add Bank</button>
  render: function() {
    return (
      <div className="container" style={style}>
        <div className="panel panel-primary">
        <div className="panel-heading text-center">Bank Information</div>
        <div className="panel-body text-center"><strong>Account # 93345345</strong></div>
      </div>
</div>
    );
  },

});

module.exports = BankInfo;