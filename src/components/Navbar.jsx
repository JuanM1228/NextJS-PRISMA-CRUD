import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className='bg-slate-900'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <h3 className='font-bold text-3xl py-3'>Next CRUD</h3>
        </Link>
        <ul className='flex gap-x-6 text-lg font-bold'>
          <li className='hover:bg-slate-400 p-2 rounded-lg cursor-pointer'>
            <Link href='/new'>New Task</Link>
          </li>
          <li className='hover:bg-slate-400 p-2 rounded-lg cursor-pointer'>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
