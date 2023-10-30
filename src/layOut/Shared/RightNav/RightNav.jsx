import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Q-zone/Qzone';
const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <div className=''>
                <Button variant="secondary"><FaGoogle />Login with Google</Button>
                <Button variant="secondary"><FaGithub />Login with Github</Button>
            </div>
            <div className=''>
                <h4>Find us</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/></ListGroup.Item>
                    <ListGroup.Item><FaTwitter/></ListGroup.Item>
                    <ListGroup.Item><FaInstagram/></ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
        </div>
    );
};

export default RightNav;