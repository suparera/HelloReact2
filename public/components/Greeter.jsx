let React = require('react');
let GreeterMessage = require('GreeterMessage');
let GreeterForm = require('GreeterForm');

let Greeter = React.createClass({
  getDefaultProps:function(){
    return {
      name:'React'
      ,message:'Default Message from Component'
    };
  }

  ,getInitialState:function(){
    return {
      name: this.props.name
    }
  }

  ,handleNewName:function(updatedValues){
    this.setState(updatedValues);
  }

  // require function for class
  ,render:function(){
    let name = this.state.name;
    let message = this.state.message;
    return (
      /* can return 1 root div */
      <div>



        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName} />
      </div>
    );
  }
});

module.exports = Greeter;