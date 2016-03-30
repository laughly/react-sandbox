/**
Textbox component
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;
var Actions = require('../actions/Actions');



var TextInput = React.createClass({

  propTypes: {
    className: ReactPropTypes.string,
    name : ReactPropTypes.string,
    id: ReactPropTypes.string,
    type: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    value: ReactPropTypes.string,
    onfocus: ReactPropTypes.string,
    onblur: ReactPropTypes.string

  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  /**
   * @return {object}
   */
  render: function() /*object*/ {

    return (
      <input
        type = {this.props.type}
        className={this.props.className}
        name={this.props.name}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
        onblur={this.props.onblur}
        onfocus={this.props.onfocus}
      />
    );
  },




  _onChange: function(/*object*/ event) {
   this.setState({ value: event.target.value}, function(){
         Actions.setParameter(this.props.id,this.state.value)
  }.bind(this));
  },

  /**
   * @param  {object} event
   */
  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      console.log(this.state)
    }
  }

});

module.exports = TextInput;
