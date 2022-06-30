import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { completeTask } from '../../features/tasks/taskSlice';
const Task = ({task}) => {
    const dispatch = useDispatch();
    const {_id, name, desc} = task;
    const handleCompleted = (_id) =>{
        dispatch(completeTask(_id));
    }
    const handleDeleteItem = (_id)=>{

    }
    return (
        <Card className='mb-3 mt-4'>
        <Card.Header as="h5">Your Todo-Item</Card.Header>

        <Card.Body>
            <div className='d-flex justify-content-between'>
                <Card.Title className='text-start'>{name}</Card.Title>
                <button onClick={() => handleDeleteItem(_id)} className='main-btn'>
                    <FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>

            <Card.Text>
                {desc}
            </Card.Text>
            <button onClick={() => handleCompleted(_id)} className='main-btn'>Completed</button>
        </Card.Body>
    </Card>
    );
};

export default Task;