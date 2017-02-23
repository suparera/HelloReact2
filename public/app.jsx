var Greeter = React.createClass({
  // require function for class
  render:function(){
    return (
      /* can return 1 root div */
      <div>
        <h1>Hi2 World app</h1>
        <p>This is from the quant</p>
      </div>
    );
  }
});


ReactDOM.render(
  <Greeter/>
  , document.getElementById('app')
);
cd