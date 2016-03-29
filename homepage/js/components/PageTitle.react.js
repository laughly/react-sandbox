//Page title
var React = require('react');
var ReactPropTypes = React.PropTypes;



var PageTitle = React.createClass({
  propTypes: {
      title: ReactPropTypes.string.isRequired,
      subtitle: ReactPropTypes.string.isRequired,
  },



  render: function() {
    return (
      <div className = 'sectionTitle'>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  },

});

module.exports = PageTitle;