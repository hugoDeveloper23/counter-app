//Functional Components
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) => {

    //const saludo = "Hola mundo"
    // const saludo = {
    //     nombre:"hugo",
    //     tel: 121234124,
    // };

    return (
        <Fragment>
            <h1> {saludo} </h1>
            {/*<pre> {JSON.stringify(saludo, null, 3)} </pre>*/}
            <p> {subtitulo} </p>
        </Fragment>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
}


export default PrimeraApp;