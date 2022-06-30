import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../../commons/Task/Task';
import { completeTaskFetch, getAllCompleteTasks } from '../../features/tasks/taskSlice';

const Completed = () => {
    const dispatch = useDispatch();
    const completeTasks = useSelector(getAllCompleteTasks);
    useEffect(() => {
        dispatch(completeTaskFetch());
    }, [dispatch, completeTasks]);
    console.log(completeTasks)
    return (
        <div>
            <Container>
                <h1>Completed Tasks are Aavailable here</h1>
                <div>
                    {
                        completeTasks?.map(task => <Task
                            key={task._id}
                            task={task}
                        ></Task>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Completed;