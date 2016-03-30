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
        <h1 className="pageTitle">{this.props.title}</h1>
        <h2 className="pageSubtitle">{this.props.subtitle}</h2>
      </div>
    );
  },

});

module.exports = PageTitle;