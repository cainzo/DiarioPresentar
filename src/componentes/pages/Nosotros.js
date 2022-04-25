import React from 'react';
import {
    Container
  } from "react-bootstrap";

  import avatar1 from "../../img/avataaars (1).png"
//            <img src={avatar} alt="" />

const Nosotros = () => {
    return (
        <Container className='my-5 py-5'>
            <Container className='d-flex w-100 mx-auto justify-content-center text-center flex-column'>

            <p className='mt-3 mb-0 pb-0'>
                Trabajo final para RollingSchool programa de FullStack Dev.
            </p>
            <img src={avatar1} alt="" className='w-25 mx-auto'/>
            <p className='pt-2 mb-5'>Gonzalo Cainzo</p>
            </Container>
        </Container>
    );
};

export default Nosotros;