//Bank info component
var React = require('react');
var ReactPropTypes = React.PropTypes;


  var style = {
    backgroundColor: 'blue',
    width: '400px',
    height: '300px'
  }

var BankInfo = React.createClass({
  propTypes: {

  },



  render: function() {
    return (
      <div style={style}>
       Bank Info
      <button type="button" className="btn btn-success">Add Bank</button>
      </div>

    );
  },

});

module.exports = BankInfo;