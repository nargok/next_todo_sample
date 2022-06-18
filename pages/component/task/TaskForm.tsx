import type { NextPage } from "next";
import { useState } from "react";

interface Props {
  postTask: Function;
}

const TaskForm: NextPage<Props> = ({ postTask }) => {
  const [title, setTitle] = useState("");

  // https://zenn.dev/kenta0313/articles/a39fb1d8edc3a4#%E4%BE%BF%E5%88%A9%E3%81%AA%E5%9E%8B%E6%8E%A8%E8%AB%96
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    postTask(title);
    event.preventDefault();
  };

  return (
    <div className="w-full max-w-lg">
      <form
        className="bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Task"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
