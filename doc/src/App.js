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

// constructor(props)
// {
//   super(props)
//   {
//     this.state = {date : new Date()}
//   }
// }

// constructor(props){
//   super(props)
//   this.state = {isToogleOn:true}
//   this.handleClick = this.handleClick.bind(this);
//   this.NumberList = this.NumberList.bind(this)
// }
constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.state = {temperatura: ''};
}



handleClick() {
  this.setState(state => ({
    isToogleOn: !state.isToogleOn
    
  }));
}

   NumberList(props) {
     console.log('oi')
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
boilingVerdict(props){
  if(props.celsius >= 100){
    return <p>Á agua esta fervida</p>
  }
  return <p>Á agua não está fervida</p>
}

handleChange(e){
  this.setState({temperatura: e.target.value})
}
  render(){

    const temperatura = this.state.temperatura

   // const props = {name:'teste'}
    // function teste(){
    //   console.log('clicado')
    // }

  //  const element = <welcome name ="Sara"/>
  //  const numbers = [1,2,3,4,5]
  //  const listItens = numbers.map((number) => number * 2)

    return(
     <fieldset>
        <legend>Informe a temperatura em Celsius:</legend>
        <input
          value={temperatura}
          onChange={this.handleChange} />

        <boilingVerdict
          celsius={parseFloat(temperatura)} />

      </fieldset>
    )

    //<h1>Hello,{props.name}</h1>
    //element
    // <div>
    //   <h1>Hello, world !</h1>
    // <h2>It is {this.state.date.toDateString()}</h2>
    // <button onClick={teste}>Clique Aqui</button>
    // </div>
    //<button onClick={this.handleClick}> {this.state.isToogleOn ? 'ON ' : 'Off'}</button>
    
  //<li>{listItens}</li>
  }
    

    
  
}
export default App;

// Parei aqui https://pt-br.reactjs.org/docs/accessibility.html