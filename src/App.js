import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
state = {
  person : [
    {id:'ad23', name:"Madhura", age:99},
    {id:'fd23', name:"Modi", age:65},
    {id:'sd23', name:"Atal", age: 90}
  ],
  otherState : 'some state just for example',
  showPerson : false
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

deletePersonHandler = (personIndex) =>{
  //const persons = this.state.person.slice();
  const persons = [...this.state.person];
  persons.splice(personIndex,1);
  this.setState({person:persons})
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
          {this.state.person.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}/>
            })
          }
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
