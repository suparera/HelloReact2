let React = require('react');

let GreeterForm = React.createClass({
  render:function(){
    return (
      <form onSubmit={this.formOnSubmit}>
        <input ref="name" type="text"/>
        <input ref="message" type="text"/>
        <button>Set Name</button>
      </form>
    );
  } ,

  formOnSubmit:function(e){
    e.preventDefault();
    let name = this.refs.name.value;
    let message = this.refs.message.value;
    if(name.length > 0){
      let updatedValues = {};
      updatedValues.name = name;
      updatedValues.message = message;
      this.refs.name.value = '';
      this.props.onNewName(updatedValues);
    }
  }
});

module.exports = GreeterForm;