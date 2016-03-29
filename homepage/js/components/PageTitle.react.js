//Page title
var React = require('react');
var ReactPropTypes = React.PropTypes;



var PageTitle = React.createClass({
  propTypes: {
      title: ReactPropTypes.string,
      subtitle: ReactPropTypes.string,
  },



  render: function() {
    return (
      <div className = 'sectionTitle'>
        <h1>Payments</h1>
        <h2>View payment information and history</h2>
      </div>
    );
  },

});

module.exports = PageTitle;