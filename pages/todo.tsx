import type { NextPage } from "next";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Task {
  task_id: string;
  title: string;
  status: string;
}

const Todo: NextPage = () => {
  const { data, error } = useSWR(`api/task/list`, fetcher);
  if (error) return <div>Fiald to load task</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <ul>
        {data.data
          ? data.data.task_list.map((task: Task) => (
              <li key={task.task_id}>
                {task.title} {task.status}
              </li>
            ))
          : "hoge"}
      </ul>
    </>
  );
};

export default Todo;
