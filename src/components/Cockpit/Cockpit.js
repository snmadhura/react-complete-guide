import React from 'react';
import classes from './Cockpit.css'


const Cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = '';
    
    if(props.showPerson){
        btnClass = classes.Red;
    }
    if(props.persons.length <3)
    assignedClasses.push(classes.red);

    if(props.persons.length <2)
    assignedClasses.push(classes.bold);

    return(
        <div className={classes.Cockpit}>
        <h1>this is react app</h1>
        <p className={assignedClasses.join(' ')}>i'll be working forever</p>
        <button 
        //onClick={() => this.switchNamesHandler('MADHU!!!')}>
        className={btnClass}
        onClick={props.clicked}>
        Switch Names</button>
        </div>
    );
}

export default Cockpit;