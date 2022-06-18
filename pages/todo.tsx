import type { NextPage } from "next";
import axios from "axios";
import TaskForm from "./component/task/TaskForm";
import TaskList from "./component/task/TaskList";

const Todo: NextPage = () => {
  const postTask = async (taskTitle: string) => {
    const response = await axios.post("api/task/register", {
      title: taskTitle,
    });
  };

  return (
    <>
      <TaskForm postTask={postTask}></TaskForm>
      <TaskList></TaskList>
    </>
  );
};

export default Todo;
