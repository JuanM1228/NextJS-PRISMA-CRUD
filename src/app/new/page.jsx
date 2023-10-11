"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const TaskForm = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (!params.id) return;
    const res = await fetch(`/api/tasks/${params.id}`);
    const data = await res.json();
    setTitle(data.title);
    setDescription(data.description);
  };

  const deleteData = async () => {
    const res = await fetch(`/api/tasks/${params.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
    router.push("/");
  };

  const onSubmit = async e => {
    e.preventDefault();
    const method = params.id ? "PUT" : "POST";
    const uri = params.id ? `/api/tasks/${params.id}` : `/api/tasks`;
    const res = await fetch(uri, {
      method: method,
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    router.refresh();
    router.push("/");
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <form className='bg-slate-800 p-10 sm:w-1/2 w-full' onSubmit={onSubmit}>
        <label htmlFor='title' className='font-bold text-sm'>
          Titulo de la tarea
        </label>
        <input
          id='title'
          type='text'
          className='border border-gray-400 p-2 mb-4 w-full text-black'
          placeholder='Titulo'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor='description' className='font-bold text-sm'>
          Descripción de la tarea
        </label>
        <textarea
          id='description'
          rows='3'
          className='border border-gray-400 p-2 mb-4 w-full text-black'
          placeholder='Describe tu tarea...'
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
        <div className='flex justify-between'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Crear
          </button>
          {params.id && (
            <button
              type='button'
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
              onClick={deleteData}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
