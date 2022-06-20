import type { NextPage } from "next";
import { useState } from "react";
import useSWR from "swr";
import { Task } from "../../../models/Task";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Props {
  isDone: boolean;
  list: Task[];
}

const TaskList: NextPage<Props> = ({ isDone, list }) => {
  return (
    <div className="mb-4">
      <details className="" open>
        <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
          {isDone ? "Done" : "Todo"}
        </summary>
        <div className="bg-white px-5 py-3 text-sm font-light">
          <ul>
            {list?.map((task: Task) => (
              <li className="border-b rounded px-2 py-4" key={task.task_id}>
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600 focus:outline-none mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  checked={isDone}
                />
                <span className={isDone ? "line-through" : ""}>
                  {task.title} {task.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
};

export default TaskList;
