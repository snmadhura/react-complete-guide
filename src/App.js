import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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


nameChangedHandler = (event,id) => {
const personIndex = this.state.person.findIndex(p =>{
  return p.id === id;
})
  
const persons = {...this.state.person[personIndex]};

persons.name = event.target.value;

const person = [...this.state.person]
person[personIndex] = persons;

this.setState({
  person: person
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
      backgroundColor: "green",
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
            key={person.id}
            changed={(event) =>this.nameChangedHandler(event, person.id)}/>
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
    }

    let assignedClasses = [];
    if(this.state.person.length <3)
    assignedClasses.push(classes.red);

    if(this.state.person.length <2)
    assignedClasses.push(classes.bold);

    return (
      <div className={classes.App}>
        <h1>this is react app</h1>
        <p className={assignedClasses.join(' ')}>i'll be working forever</p>
        <button 
        style={style}
        //onClick={() => this.switchNamesHandler('MADHU!!!')}>
        onClick={this.togglePersonHandler}>
        Switch Names</button> 
 
      {persons}
      </div>
    );
   //return React.createElement('div', {className: 'App'},  React.createElement('h1', null, 'working'));
  }
}

export default App;
