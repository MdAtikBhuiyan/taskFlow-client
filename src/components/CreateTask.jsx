import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import Select from 'react-select'
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";

function CreateTask({ tasks, setTasks, refetch }) {
  const [task, setTask] = useState({
    id: "",
    description: "",
    title: '',
    deadLine: '',
    priority: '',
    status: "todo", // also can be doing and done
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (task.name.length < 3) {
  //     setTask({
  //       id: "",
  //       name: "",
  //       status: "todo",
  //     });
  //     return toast.error("Task needs over 3 characters.");
  //   }

  //   if (task.name.length > 100) {
  //     setTask({
  //       id: "",
  //       name: "",
  //       status: "todo",
  //     });
  //     return toast.error("Task can't be over 100 characters.");
  //   }

  //   console.log("task", task);

  //   setTasks((prevTasks) => {
  //     // Initialize as an empty array if prevTasks is undefined
  //     const prev = Array.isArray(prevTasks) ? prevTasks : [];

  //     const updatedTasks = [...prev, task];
  //     localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  //     return updatedTasks;
  //   });

  //   // SetTasks[...tasks, task]

  //   toast.success("Task Created");

  //   setTask({
  //     id: "",
  //     name: "",
  //     status: "todo",
  //   });
  // };


  const options = [
    { value: "Low", label: "low" },
    { value: "Moderate", label: "moderate" },
    { value: "High", label: "high" },
  ];

  const { user } = useContext(AuthContext)
  const { register, handleSubmit, reset } = useForm();
  const [option, setOption] = useState();

  const handelChange = (e) => {
    setOption(e.value);
  };

  // function addTodo(data, toastId) {
  //   useAxiosPublic.post("/todo", data)
  //     .then((res) => {
  //       // console.log(res.data)
  //       if (res.data.insertedId) {
  //         toast.success('Added...', { id: toastId });
  //         // setReload(true)
  //       }
  //     });
  // }
  const onSubmit = (data) => {
    const toastId = toast.loading("Adding....");
    console.log("object", data);
    data.priority = option;
    data.status = "todo";
    data.id = uuidv4();
    data.user = user?.email;

    setTasks((prevTasks) => {
      // Initialize as an empty array if prevTasks is undefined
      const prev = Array.isArray(prevTasks) ? prevTasks : [];

      // const updatedTasks = [...prev, data];
      const updatedTasks = [data];
      console.log("create data", updatedTasks);
      // localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      // 

      axios.post("https://task-forge-server-main.vercel.app/task", updatedTasks)
        .then((res) => {
          console.log(res.data)
          if (res.data.insertedCount > 0) {
            toast.success('Added...', { id: toastId });
            // setReload(true)
            refetch()
          }
        });

      // 


      // toast.success('Added...', { id: toastId });
      return updatedTasks;
    });

    // toast.success("Task Created");

    reset()
    // data.taskCreator = user?.email;
    // console.log(data);
    // axiosPublic.post("/todo", data).then((res) => {
    //   // console.log(res.data)
    //   if (res.data.insertedId) {
    //     toast.success('Added...', {id: toastId});
    //     setReload(true)
    //   }
    // });
  };


  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-3 gap-6 mt-4 ">
        <div className="col-span-3 md:col-span-1">
          <label className="text-black text-base md:text-lg font-medium ">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="block w-full px-4 py-2 mt-2 text-black bg-transparent border border-white  rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div className=" col-span-2 md:col-span-1">
          <label className="text-black text-base md:text-lg font-medium ">Deadline</label>
          <input
            type="date"
            {...register("deadline", { required: true })}
            className="block w-full min-h-10 px-4 py-2 mt-2 text-black bg-transparent border border-white  rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label className="text-black  text-sm md:text-lg font-medium ">
            Priority
          </label>
          <Select
            onChange={handelChange}
            options={options}
            className="mt-3"
          />
        </div>
      </div>
      <div className=" flex justify-between items-end gap-5">
        <div className=" mt-6 flex-1">
          <label className="text-black text-base md:text-lg font-medium ">
            Post Description
          </label>
          <textarea
            type="text"
            {...register("description", { required: true })}
            className="block w-full h-16 px-4 py-2 mt-2 text-black bg-transparent border border-white  rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-green-600 text-xl transition-colors duration-300 transform h-16 bg-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateTask;
