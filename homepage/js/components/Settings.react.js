//Settings Page
var React = require('react');
var ReactPropTypes = React.PropTypes;

var PageTitle = require('./PageTitle.react');
var SettingsBox = require('./SettingsBox.react');




var Settings = React.createClass({
  propTypes: {

  },

  render: function() {
  return (
    <div className = "container">
      <PageTitle title="Settings" subtitle="Here is where you can control your settings"/>
      <SettingsBox section="Account Settings"/>
    </div>
    );
  },

});

module.exports = Settings;
