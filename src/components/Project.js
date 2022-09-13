import React from 'react';

const Project = (props) => {
    const {name, objective, why, learn} = props

    return (
        <>
            <h3>{name}</h3>
                <br/>
                <p>Objective: {objective}</p>
                <br/>
                <p>Why: {why}</p>
                <br/>
                <p>What to learn: {learn}</p>
                <br/>
        </>
    );
};

export default Project;