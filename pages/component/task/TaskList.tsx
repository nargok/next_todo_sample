import type { NextPage } from "next";
import { useState } from "react";
import useSWR from "swr";
import { Task } from "../../../models/Task";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Props {
  taskList: Task[];
}

const TaskList: NextPage<Props> = ({ taskList }) => {
  if (!taskList) return <div>Loading...</div>;

  return (
    <>
      <ul>
        {taskList.map((task: Task) => (
          <li key={task.task_id}>
            {task.title} {task.status}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
