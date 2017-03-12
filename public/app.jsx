let React = require('react');
let ReactDOM = require('react-dom');
let Greeter = require('./components/Greeter');



let myMessage = "i will be great again!!!";
ReactDOM.render(
  <Greeter name="Suparerk" message={myMessage} />
  , document.getElementById('app')
);
