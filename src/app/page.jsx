import React from "react";
import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

const loadTasks = async () => {
  return await prisma.task.findMany();
};
const HomePage = async () => {
  const tasks = await loadTasks();
  return (
    <section className='container mx-auto'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-10 grid-cols-1'>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
