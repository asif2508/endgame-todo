import React, { useEffect } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Task from '../../commons/Task/Task';
import { addTask, fetchedTasks, getAllTasks } from '../../features/tasks/taskSlice';
import './Todo.css';
const Todo = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(getAllTasks);
    useEffect(()=>{
        dispatch(fetchedTasks());
    },[dispatch, tasks]);
    console.log(tasks);
    const handleAddTask = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const desc = event.target.desc.value;
        const data = {
            name: name,
            desc: desc,
            completed: false,
        }
        dispatch(addTask(data));
        event.target.reset();
        toast.info('Task added successfully!');
    }
    return (
        <div>
            <Container>
                <Row className='gy-5'>
                    <Col xs={12} md={7} lg={7}>
                        {
                            tasks?.map(task => <Task 
                            key={task._id}
                            task={task}
                            ></Task>)
                        }
                    </Col>
                    <Col xs={12} md={5} lg={5}>
                        <div className='adding-task'>
                            <h3>Add a New Task</h3>
                            <form onSubmit={handleAddTask}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <p className='label-text'>Task Name</p>
                                    <Form.Control name='name' type="text" placeholder="Task Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <p className='label-text'>Task Description</p>
                                    <Form.Control name='desc' placeholder='Task Description' as="textarea" rows={5} />
                                </Form.Group>
                                <input type="submit" value="ADD" className='btn main-btn w-25' />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Todo;