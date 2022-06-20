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

  const completeTask = async (taskId: string) => {
    const response = await axios.post("api/task/complete", {
      task_id: taskId,
    });
    mutate("api/task/list");
  };

  return (
    <div className="px-4 py-4">
      <TaskForm postTask={postTask}></TaskForm>
      <TaskList
        isDone={false}
        list={data?.data?.todo_list}
        handleCheck={completeTask}
      ></TaskList>
      <TaskList isDone={true} list={data?.data?.done_list}></TaskList>
    </div>
  );
};

export default Todo;
