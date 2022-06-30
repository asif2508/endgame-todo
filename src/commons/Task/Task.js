import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../../features/tasks/taskSlice';
import { toast } from 'react-toastify';
const Task = ({ task }) => {
    const dispatch = useDispatch();
    const [checkValue, setCheckValue] = useState(false);
    const { _id, name, desc, completed } = task;
    const handleCompleted = (_id) => {
        setCheckValue(!checkValue);
        dispatch(completeTask(_id));
        toast.info('Hurrah! Task has been completed.');
    }
    const handleDeleteItem = (_id) => {
        dispatch(deleteTask(_id));
        toast.error('Task has been deleted.');
    }
    return (
        <Card className='mb-3 mt-4'>
            <Card.Header as="h5">Today's Routine</Card.Header>

            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <Card.Title className='text-start'>{name}</Card.Title>
                    <button onClick={() => handleDeleteItem(_id)} className='main-btn'>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>

                <Card.Text className='text-start'>
                    {desc}
                </Card.Text>
                {/* <button onClick={() => handleCompleted(_id)} className='main-btn'>Completed</button> */}
                {!completed && <Form.Group className="mt-3 mb-2" id="formGridCheckbox">
                    <Form.Check onClick={() => handleCompleted(_id)} className='text-black text-start' type="checkbox" label="Mark as completed" />
                </Form.Group>}
                {completed && <p className='text-start text-danger'>Hurrah! You have completed the task.</p>}
            </Card.Body>
        </Card>
    );
};

export default Task;