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

  ,onSubmit:function(e){
    e.preventDefault();
    let nameRef = this.refs.name;
    let name = nameRef.value;
    nameRef.value = '';

    // Validate name, not allow blank
    if(typeof name === 'string' && name.length>0){
      this.setState({
        name:name
      })
    }
  }

  // require function for class
  ,render:function(){
    let name = this.state.name;
    let message = this.props.message;
    return (
      /* can return 1 root div */
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref="name" type="text"/>
          <button>Set Name</button>
        </form>
        <h1>Hi สวัสดี {name}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

let myMessage = "i will be great again!!!";
ReactDOM.render(
  <Greeter name="Suparerk" message={myMessage} />
  , document.getElementById('app')
);
