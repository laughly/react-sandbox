//Settings Page
var React = require('react');
var ReactPropTypes = React.PropTypes;
var TextInput = require('./TextInput.react');
//var TextInput = require('./Settings.react');

var labelStyle = {
  display: 'inline-block'
}
var panelStyle = {
  width: '500px'
}

//var listStyle ={

   // list-style-type: 'none'
//}

var Settings = React.createClass({
  propTypes: {

  },

  render: function() {
  return (
  <div >
           <div className="container">
        <div className="panel panel-primary" style={panelStyle}>
          <div className="panel-heading text-center">Account Settings</div>
          <div className="panel-body text-center">
            <ul >
              <li>
                  <div>
                    <label style = {labelStyle} className='settingsLabel' HTMLfor='email'>Email</label>
                    <TextInput type ="text" name='email' id='email' placeholder='email'/>
                  </div>
              </li>
              <li>
                <h3>
                  <label className='settingsLabel' HTMLfor='password'>password</label>
                </h3>
                <div><TextInput type ="text" name='password' id='password' placeholder='password'/></div>
              </li>              
            </ul>
          </div>
        </div>
      </div>

    </div>
    );
  },

});

module.exports = Settings;
