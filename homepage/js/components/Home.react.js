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


/*
  <div className="row">

  <div className="span12">
    <div className="row">
      <div className="span3" id='profilepic' style={profilePicStyle}></div>
      <div className="span9">Comedian Name</div>
    </div>
     <div className="row">
      <div className="span12"><MediaBroswer/></div>
     </div>
    <div className="row">
      <div className="span6"><AnalyticSnapshot/></div>
      <div className="span6"><PaymentSnapshot/></div>
    </div>
  </div>
</div>
*/

  render: function() {
    return (
      <div>
        Home
      </div>

    );
  },

});

module.exports = Home