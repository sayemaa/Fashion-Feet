import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css'

const Faq = () => {
    return (
        <div>
            <h1 className='my-5'>Frequently Asked Questions</h1>
            <Accordion defaultActiveKey="0" className='accordian mb-5 text-start'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>How react works?</h5></Accordion.Header>
                    <Accordion.Body>
                        While original DOM is displayed in the UI, React preserves a duplicate of the original DOM called Virtual DOM. Virtual DOM looks the same as original DOM, but it is more simpler and cleaner. When any changes are made, the original DOM is compared with the virtual DOM and those changes are then applied to the original DOM. This makes the performance go more smoothly.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>Differences between Props and State.</h5></Accordion.Header>
                    <Accordion.Body>
                        State is stored in the stateful component and can be modified inside the component. The state of a components cannot be transferred to another component. That is why, state is passed to stateless components using props. Props are read-only and cannot be modified from another component.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;