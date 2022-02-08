import React from 'react';
import './header.css'
import { Container } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Container className='text-center'> 
                <h1>RollingNews</h1>
                <h3>El diario mas popular de la comision</h3>

            </Container>
        </>              
    );
};

export default Header;