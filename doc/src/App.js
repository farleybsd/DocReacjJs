import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
 
//   const name = 'Farley Rufino'
//   const element = <h1>Olá,{name}</h1>

//   function formatName(user){

//     return user.firstname + '' + user.lastname
//   }

//   const user = {
//     firstname: 'Farley',
//     lastname: 'Rufinão'
//   }

//   const elementDois = (
//     <h1>
//       Denovo,{formatName(user)}
//     </h1>
//   )

//   function getGreeting(userP){

//     if(userP){
//     return <h1> Olá ,{userP}</h1>
//     }
//     return <h1>Olá, Estrangeiro</h1>
//   }

//   const paieFilho = (
//     <div>
//       <h1>Pai</h1>
//       <h2>Filho</h2>
//     </div>
//   )

//   const elementoTres = {
//     type:'h1',
//     props: {
//       className: 'greeting',
//       children: 'Hello, world!'
//     }
//   }

//   function Welcome(props){
//   return <h1>Hello,{props.name}</h1>
//   }
  
//   const nome ={
//     name: 'FAFA'
//   }

//   return (
//     Welcome(nome)
//   );
// }

class App extends React.Component {

constructor(props)
{
  super(props)
  {
    this.state = {date : new Date()}
  }
}
  
  render(){
   // const props = {name:'teste'}

   const element = <welcome name ="Sara"/>
    return(
    //<h1>Hello,{props.name}</h1>
    //element
    <div>
      <h1>Hello, world !</h1>
    <h2>It is {this.state.date.toDateString()}</h2>
    </div>
    )
  }
}
export default App;

// Parei aqui https://pt-br.reactjs.org/docs/handling-events.html