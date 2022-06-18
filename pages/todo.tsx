import type { NextPage } from "next";
import axios from "axios";
import useSWR from "swr";
import TaskForm from "./component/task/TaskForm";
import TaskList from "./component/task/TaskList";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Todo: NextPage = () => {
  const { data, error, mutate } = useSWR(`api/task/list`, fetcher);

  const postTask = async (taskTitle: string) => {
    const response = await axios.post("api/task/register", {
      title: taskTitle,
    });
    mutate("api/task/list");
  };

  return (
    <>
      <TaskForm postTask={postTask}></TaskForm>
      <TaskList taskList={data?.data?.task_list}></TaskList>
    </>
  );
};

export default Todo;
