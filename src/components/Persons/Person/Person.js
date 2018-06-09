import React,{Component} from 'react';
import classes from './Person.css';


class Person extends Component {
    constructor(props){
        super(props);

        console.log('[peron.js] inside constructor');
      }
    
      componentWillMount(){
        console.log('[peron.js] inside comp. will mount');
      }
    
      componentDidMount(){
        console.log('[peron.js] inside comp. did mount');
      }


    render(){
        console.log('[person js] inside render' )
    return (
        <div className={classes.person}>
            <p onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </div>
    );
}
};

export default Person;
