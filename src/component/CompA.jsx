import React from "react";
import PropTypes from 'prop-types';


const CompA=({name,age})=>{
    return(
        <>
        <h1>name:{name}</h1>
        <h1>age:{age}</h1>
        </>
    )
};
CompA.propTypes ={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
};

export default CompA;