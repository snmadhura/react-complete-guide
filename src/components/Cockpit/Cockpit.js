import React from 'react';
import classes from './Cockpit.css'


const Cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = classes.Button;

    if(props.showPerson){
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    if(props.persons.length <3)
    assignedClasses.push(classes.red);

    if(props.persons.length <2)
    assignedClasses.push(classes.bold);

    return(
        <div>
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