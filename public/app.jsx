let GreeterMessage = React.createClass({
  render:function(){
    let name = this.props.name;
    let message = this.props.message;
    return (
      <div>
        <h1>สวัสดี {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});


let GreeterForm = React.createClass({
  render:function(){
    return (
      <form onSubmit={this.formOnSubmit}>
        <input ref="name" type="text"/>
        <button>Set Name</button>
      </form>
    );
  }
  , formOnSubmit:function(e){
    e.preventDefault();
    let name = this.refs.name.value;
    if(name.length > 0){
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  }
});

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

  ,handleNewName:function(name){
    this.setState({
      name:name
    });
  }

  // require function for class
  ,render:function(){
    let name = this.state.name;
    let message = this.props.message;
    return (
      /* can return 1 root div */
      <div>



        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName} />
      </div>
    );
  }
});

let myMessage = "i will be great again!!!";
ReactDOM.render(
  <Greeter name="Suparerk" message={myMessage} />
  , document.getElementById('app')
);
