import React, { useContext, useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import CreateTask from '../components/CreateTask';
import ListTasks from '../components/ListTasks';
import { HTML5Backend } from 'react-dnd-html5-backend';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../providers/AuthProvider';

const Dashboard = () => {

    const { user, loading } = useContext(AuthContext)
    const [taskss, setTasks] = useState([]);

    // useEffect(() => {
    //   setTasks(JSON.parse(localStorage.getItem("tasks")));
    // }, []);
    console.log(user);
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const res = await axios.get(
                `https://task-forge-server-main.vercel.app/task`
            );
            // console.log(res);
            // setTasks(res.data)
            return res.data;
        },
    });

    useEffect(() => {

        if (!loading) {
            const data = tasks.filter(task => task.user == user.email)
            setTasks(data)
        }

        // setTasks(tasks)

    }, [tasks, loading, user?.email])


    console.log(taskss);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="bg-slate-100 h-screen flex flex-col items-center gap-16 pt-24">
                <CreateTask tasks={taskss} setTasks={setTasks} refetch={refetch} />
                <ListTasks tasks={taskss} setTasks={setTasks} refetch={refetch} />
            </div>


        </DndProvider>
    );
}

export default Dashboard;