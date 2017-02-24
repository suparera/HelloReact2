let Greeter = React.createClass({
  getDefaultProps:function(){
    return {
      name:'React'
      ,message:'Default Message from Component'
    };
  }

  // require function for class
  ,render:function(){
    let name = this.props.name;
    let message = this.props.message;
    return (
      /* can return 1 root div */
      <div>
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
