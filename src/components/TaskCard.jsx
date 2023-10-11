"use client";
import React from "react";
import { useRouter } from "next/navigation";

const TaskCard = ({ task }) => {
  const router = useRouter();
  return (
    <div
      className='bg-slate-900 p-4 hover:bg-slate-700 cursor-pointer'
      onClick={() => router.push("/task/edit/" + task.id)}
    >
      <h3 className='font-bold text-2xl mb-2'>{task.title}</h3>
      <p className='break-words'>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;
