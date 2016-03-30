//Settings Panel
var React = require('react');
var ReactPropTypes = React.PropTypes;

var TextInput = require('./TextInput.react');



var SettingsBox = React.createClass({
  propTypes: {
    section: ReactPropTypes.string
  },

  render: function() {
    return (
      <div >
        <div className="container">
          <ul className='settingsList'>
            <li className='sectionHeader'>
              <h2>{this.props.section}</h2>
            </li>

            <li className='settingsItem'>
              <label className='settingsLabel' HTMLfor='email'>Email</label>
              <TextInput className='textbox' type ="text" name='email' id='email' placeholder='email'/>    
            </li>

            <li className='settingsItem'>
              <label className='settingsLabel' HTMLfor='password'>Password</label>
              <TextInput className= 'textbox' type ="text" name='password' id='password' placeholder='password'/>
            </li>

            <li className='settingsItem'>
              <label className='settingsLabel' HTMLfor='facebook'>Facebook Link</label>
              <TextInput className= 'textbox' type ="text" id='facebook'/>
            </li>  

            <li className='settingsItem'>
              <label className='settingsLabel' HTMLfor='twitter'>Twitter Link</label>
              <TextInput className= 'textbox' type ="text" id='twitter'/>
            </li>  

            <li className='settingsItem'>
              <label className='settingsLabel' HTMLfor='deactivate'>Account </label>
              <button type ="text" id='deactivate' className="btn-rounded">Deactivate Account </button>
            </li>             
          </ul>    
          <div className='settingsFooter'>
            <div className = 'cancel-save'>
             <button type ="text" id='cancel' className="btn-rounded btn-cancel">Cancel</button>  
              <button type ="text" id='save' className="btn-rounded btn-save">Save Settings</button>    
            </div>
          </div> 
        </div>
      </div>

    );
  },

});

module.exports = SettingsBox;
