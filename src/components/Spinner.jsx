import React from 'react';
import '../index.css';

const Spinner = () => {
return (
    <div className='flex flex-col items-center justify-center'>
    <div className="spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
    </div >
    <div className='relative top-[50px]'>
    Loading.....
    </div>
    </div>
);
};

export default Spinner;
