import React from 'react';
import './Footer.css';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer d-flex justify-content-between align-items-center p-1 flex-wrap">
                    <div class="name text-start p-3">
                        <h3 class="footer-heading">ENDGAME</h3>
                        <p class="ms-5 lh-1"><small>TODOS</small></p>
                    </div>
                    <div class="links p-3 text-start">
                        <h6 class="address">
                            <a href="#">About Us</a>
                        </h6>
                        <h6 class="address">
                            <a href="#">Contact</a>
                        </h6>
                        <h6 class="address">
                            <a href="#">Terms & Conditions</a>
                        </h6>
                    </div>
                    <div class="email p-3">
                        <h6 class="address">
                            <a href="#">Subscribe to our newsletter</a>
                        </h6>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="email"
                                aria-label="email"
                                className="input-box"
                            />
                            <Button className="sub-btn" id="button-addon2">
                                Send
                            </Button>
                        </InputGroup>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;