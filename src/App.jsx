import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { data } from "autoprefixer";

function App() {
  const [taskss, setTasks] = useState([]);

  // useEffect(() => {
  //   setTasks(JSON.parse(localStorage.getItem("tasks")));
  // }, []);

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get(
        `https://task-forge-server-main.vercel.app/todoAll`
      );
      // console.log(res);
      // setTasks(res.data)
      return res.data;
    },
  });
  
  useEffect(() => {

    setTasks(tasks)

  },[tasks])

  

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-slate-100 h-screen flex flex-col items-center gap-16 pt-24">
        <CreateTask tasks={taskss} setTasks={setTasks} refetch={refetch} />
        <ListTasks tasks={taskss} setTasks={setTasks} />
      </div>

      
    </DndProvider>
  );
}

export default App;
