import React, { Children } from 'react'
import Particles from 'react-particles-js';
import ParticleConfig from './Config/particle-config';

export default  function ParticleBackground({children}){

    return(
        <Particles params ={ParticleConfig}>

{Children}
        </Particles>
    )
}