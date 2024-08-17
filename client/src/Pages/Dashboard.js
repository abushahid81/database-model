import { useState } from 'react';
import "./Dashboard.css";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Example() {
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(0);





    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClickPlus = () => {
        setCount(count + 1);
    }
    const handleClickMinus = () => {
        setCount(count - 1);
    }



    return (
        <>
            <Button variant="primary" className='btn-1' onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Product Name">
                        <Form.Control type="text" placeholder="Password" />
                    </FloatingLabel>
                </Modal.Body>
                <div className='btn-o'>
                    <h4 className='me-3'>Item</h4>
                    <Button variant="primary" onClick={handleClickMinus}>-</Button>{' '}
                    <h3 className='btn-2'>
                        {count}
                    </h3>
                    <Button variant="primary" onClick={handleClickPlus}>+</Button>{' '}
                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit' onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default Example;