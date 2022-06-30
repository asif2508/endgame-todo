import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Task = ({task}) => {
    const {id, title, body} = task;
    const handleCompleted = (id) =>{

    }
    const handleDeleteItem = (id)=>{

    }
    return (
        <Card className='mb-3 mt-4'>
        <Card.Header as="h5">Your Todo-Item</Card.Header>

        <Card.Body>
            <div className='d-flex justify-content-between'>
                <Card.Title className='text-start'>{title}</Card.Title>
                <button onClick={() => handleDeleteItem(id)} className='main-btn'>
                    <FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>

            <Card.Text>
                {body}
            </Card.Text>
            <button onClick={() => handleCompleted(id)} className='main-btn'>Completed</button>
        </Card.Body>
    </Card>
    );
};

export default Task;