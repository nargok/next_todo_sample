import type { NextPage } from "next";
import axios from "axios";
import TaskForm from "./component/task/TaskForm";
import TaskList from "./component/task/TaskList";

// const postFetcher = (url: string) => post(url, params).then((res) => res.json());

// const res = await axios.post("/user", {
//   id: 123,
//   name: "Yamada Tarou",
// });

const Todo: NextPage = () => {
  const postTask = async (taskTitle: string) => {
    // console.log("taskTitle is", taskTitle);
    const response = await axios.post("api/task/register", {
      title: taskTitle,
    });
    // console.log("in todo page", response);
  };

  return (
    <>
      <TaskForm postTask={postTask}></TaskForm>
      <TaskList></TaskList>
    </>
  );
};

export default Todo;
