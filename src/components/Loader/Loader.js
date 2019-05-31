import React from 'react';
import './Loader.scss';

function Loader() {
    return (
        <div className="main columns is-vcentered">
            <div className="column">
                <ReturnLoader />

                <br />
                
                <Text />
            </div>
        </div>
    );
}

function Text() {
    return (
        <div className="columns is-centered is-size-5">
            Please give permission for webcam
        </div>
    );
}

function ReturnLoader() {
    return (
        <div className="columns is-centered">
        <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
        </div>
        </div>
    );
}

export default Loader;  