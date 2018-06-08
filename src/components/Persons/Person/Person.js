import React from 'react';
import classes from './Person.css';


const person = (props) => {

    return (
        <div className={classes.person}>
            <p onClick={props.click}>I'm {props.name} and i'm {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
    
};

export default person;
