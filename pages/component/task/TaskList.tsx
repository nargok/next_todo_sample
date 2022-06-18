import type { NextPage } from "next";
import { useState } from "react";
import useSWR from "swr";
import { Task } from "../../../models/Task";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const TaskList: NextPage = () => {
  const { data, error } = useSWR(`api/task/list`, fetcher);

  if (error) return <div>Fiald to load task</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <ul>
        {data.data.task_list.map((task: Task) => (
          <li key={task.task_id}>
            {task.title} {task.status}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
