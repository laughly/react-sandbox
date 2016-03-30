//Bank info component
var React = require('react');
var ReactPropTypes = React.PropTypes;


var style = {
    width: '300px',

  }

var Balance = React.createClass({
  propTypes: {

  },

  render: function() {
    return (
      <div className="container" style={style}>
          <div className="panel panel-primary">
            <div className="panel-heading text-center">Balance</div>
            <div className="panel-body text-center"><strong>$984</strong></div>
          </div>
      </div>
    );
  },
});

module.exports = Balance;