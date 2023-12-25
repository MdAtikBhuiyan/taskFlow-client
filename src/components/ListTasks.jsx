import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import toast from "react-hot-toast";

function ListTasks({ tasks, setTasks, refetch }) {
  const [todos, setTodos] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    const fTodos = tasks?.filter((task) => task.status === "todo");
    const fDoing = tasks?.filter((task) => task.status === "doing");
    const fDone = tasks?.filter((task) => task.status === "done");

    setTodos(fTodos);
    setDoing(fDoing);
    setDone(fDone);
  }, [tasks]);

  const statuses = ["todo", "doing", "done"];

  return (
    <div className="flex gap-16">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          doing={doing}
          done={done}
          refetch={refetch}
        />
      ))}
    </div>
  );
}

export default ListTasks;

function Section({ status, tasks, setTasks, todos, doing, done, refetch }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Todo";
  let bg = "bg-slate-500";

  let tasksToMap = todos;

  if (status === "doing") {
    (text = "Doing"), (bg = "bg-purple-500"), (tasksToMap = doing);
  }

  if (status === "done") {
    (text = "Done"), (bg = "bg-green-500"), (tasksToMap = done);
  }

  // const { data: taskss = [], refetch } = useQuery({
  //   queryKey: ["tasks"],
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       `https://task-forge-server-main.vercel.app/todoAll`
  //     );
  //     return res.data;
  //   },
  // });

  const addItemToSection = (id) => {
    setTasks((prev) => {
      console.log("aaaa", prev);
      const mTasks = prev.map((t) => {
        if (t.id === id) {
          axios.patch(`https://task-forge-server-main.vercel.app/task/${id}?status=${status}`)
            .then((res) => {

              toast.success("Task status changed.");

            });
          return { ...t, status: status };
        }

        return t;
      });


      // localStorage.setItem("tasks", JSON.stringify(mTasks));
      // console.log('m', mTasks);


      // toast.success("Task status changed.");

      return mTasks;
    });
  };

  return (
    <div
      ref={drop}
      className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : ""}`}
    >
      <Header text={text} bg={bg} count={tasksToMap?.length} />
      {tasksToMap?.length > 0 &&
        tasksToMap?.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} refetch={refetch} />
        ))}
    </div>
  );
}

function Header({ text, bg, count }) {
  return (
    <div
      className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}
    >
      {text}

      <div className="ml-2 bg-white h-5 w-5 text-black rounded-full flex justify-center">
        {count}
      </div>
    </div>
  );
}

function Task({ task, tasks, setTasks, refetch }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleRemove = (id) => {


    axios.delete(`https://task-forge-server-main.vercel.app/task/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast.error("Task Removed");
        refetch();
      } else {
        toast.error("Something Wrong");
      }
    });


    // const fTasks = tasks.filter((t) => t.id !== id);

    // localStorage.setItem("tasks", JSON.stringify(fTasks));

    // setTasks(fTasks);

    // toast.error("Task Removed");
  };

  return (
    <div
      ref={drag}
      className={`relative p-4 mt-8 shadow-md cursor-grab ${isDragging ? "opacity-25" : "opacity-100"
        }`}
    >
      <p>{task.title && <>
        <span className="font-bold">Title: </span>{task.title}
      </>}</p>
      <p>{task.priority && <>
        <span className="font-bold">Priority: </span>{task.priority}
      </>}</p>
      <p>{task.description && <>
        <span className="font-bold">Description: </span>{task.description}
      </>}</p>

      <button
        className="absolute bottom-1 right-1 text-slate-400"
        onClick={() => handleRemove(task._id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
}
