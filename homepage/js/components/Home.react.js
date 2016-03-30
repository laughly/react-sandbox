//Home Page



var React = require('react');
var ReactPropTypes = React.PropTypes;

var TextInput = require('./TextInput.react');
var MediaBroswer = require('./MediaBrowser.react');
var AnalyticSnapshot = require('./AnalyticSnapshot.react');
var PaymentSnapshot = require('./PaymentSnapshot.react');


var profilePicStyle = {
  backgroundImage: 'url(./samples/chris-rock.jpg)',
  width: '200px',
  height: '270px'
}



var Home = React.createClass({
  propTypes: {
  	profilePic: ReactPropTypes.string
  },

  render: function() {
    return (
      <div className="container">
        Home
      </div>

    );
  },

});

module.exports = Home