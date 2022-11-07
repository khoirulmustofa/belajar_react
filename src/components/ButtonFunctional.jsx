import React from 'react';
import './button.css';

const ButtonFunctional = (props) => {
     return (
        <div>
            <button className='bg-slate-200 py-2 px-4 rounded'>Button Fuction</button>
            <br />
            <button className='bg-slate-200 py-2 px-4 rounded'>{props.text}</button>
        </div>
     );
};

export default ButtonFunctional;