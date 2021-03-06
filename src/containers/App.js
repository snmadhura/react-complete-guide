import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      person : [
        {id:'ad23', name:"Madhura", age:99},
        {id:'fd23', name:"Modi", age:65},
        {id:'sd23', name:"Atal", age: 90}
      ],
      otherState : 'some state just for example',
      showPerson : false
    }
    console.log('[Appjs] inside constructor');
  }

  componentWillMount(){
    console.log('[Appjs] inside comp. will mount');
  }

  componentDidMount(){
    console.log('[Appjs] inside comp. did mount');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE Appjs] inside comp should update props', nextProps, nextState);
  //   return true;
//  }

componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE Appjs] inside comp will update props', nextProps, nextState);
}

componentDidUpdate(){
    console.log('[UPDATE Appjs] inside comp DID update props');
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

    console.log('[App.js] inside renders')

    let persons = null;
   
    if(this.state.showPerson){      
      persons = <Persons
          persons ={this.state.person}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
     }



    return (
      <div className={classes.App}>
      <button onClick={() =>{this.setState({showPerson: true})}}>Show Person</button>
        <Cockpit showPerson={this.state.showPerson}
        persons={this.state.person}
        clicked={this.togglePersonHandler}
        
        />
 
      {persons}
      </div>
    );
   //return React.createElement('div', {className: 'App'},  React.createElement('h1', null, 'working'));
  }
}

export default App;
