import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
state = {
  person : [
    {name:"Madhura", age:99},
    {name:"Modi", age:65},
    {name:"Atal", age: 90}
  ],
  otherState : 'some state just for example',
  showPerson : false
}

switchNamesHandler = (newName) => {
  //NEVER DO THIS   this.state.person[0].name = "Madhu";
  //Correct way

  this.setState({
    person:[
      {name: newName, age: 99},
      {name:'Modi', age:54},
      {name:"Atal", age: 90}
    ]
  })

  }

nameChangedHandler = (event) => {
this.setState({
  person:[
    {name: 'Madhura' , age:99},
    {name: event.target.value, age: 54},
    {name: 'Atal', age: 90}
  ]
})
}

togglePersonHandler = () =>{
  const doesShowPeron = this.state.showPerson;
  this.setState({showPerson : !doesShowPeron});

}

  render() {
    const style = {
      backgroundColor: "#f5f5f5",
      padding: '5px 10px',
      margin: '5px',
      border: '3px solid #ccc',
      cursor: 'pointer'
    }

    let persons = null;
    if(this.state.showPerson){
      persons = (
      <div>
      <Person 
      name={this.state.person[0].name} 
      age={this.state.person[0].age} />
      <Person 
      name={this.state.person[1].name} 
      age={this.state.person[1].age}
      click={this.switchNamesHandler.bind(this, "MADHURA!!!")}
      changed={this.nameChangedHandler}>
            It has many hobbies</Person>
      <Person 
      name={this.state.person[2].name} 
      age={this.state.person[2].age} />
      </div>
      );
    }
    return (
      <div className="App">
        <h1>this is react app</h1>
        <button 
        style={style}
        //onClick={() => this.switchNamesHandler('MADHU!!!')}>
        onClick={this.togglePersonHandler}>
        Switch Names</button> 
        {/* {
          this.state.showPerson === true ?
        <div>
        <Person 
        name={this.state.person[0].name} 
        age={this.state.person[0].age} />
        <Person 
        name={this.state.person[1].name} 
        age={this.state.person[1].age}
        click={this.switchNamesHandler.bind(this, "MADHURA!!!")}
        changed={this.nameChangedHandler}>
              It has many hobbies</Person>
        <Person 
        name={this.state.person[2].name} 
        age={this.state.person[2].age} />
        </div> : null
      } */}

      {persons}
      </div>
    );
   //return React.createElement('div', {className: 'App'},  React.createElement('h1', null, 'working'));
  }
}

export default App;
