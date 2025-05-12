import React from 'react';

const Boton = ({ text, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
};

export default Boton;