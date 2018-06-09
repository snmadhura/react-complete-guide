import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component{
    constructor(props){
        super(props);

        console.log('[perons.js] inside constructor');
      }
    
      componentWillMount(){
        console.log('[perons.js] inside comp. will mount');
      }
    
      componentDidMount(){
        console.log('[perons.js] inside comp. did mount');
      }
 
      componentWillReceiveProps(nextProps){
        console.log('[UPDATE persons js] inside comp.will.receive props', nextProps);
    }     

    shouldComponentUpdate(nextProps, nextState){
        console.log('[UPDATE persons js] inside comp should update props', nextProps, nextState);
        return nextProps.persons !== this.props.persons ||
        nextProps.changed !== this.props.changed ||
        nextProps.clicked !== this.props.clicked;
        //return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE persons js] inside comp will update props', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[UPDATE persons js] inside comp DID update props');
    }
    
    render(){
        console.log('[perons.js] inside render method')
        return this.props.persons.map((person, index) => {
            return <Person
            click={() => this.props.clicked(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) =>this.props.changed(event, person.id)}/>
            });
    }
} 

export default Persons;