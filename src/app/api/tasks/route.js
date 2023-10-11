import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async () => {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
};

export const POST = async request => {
  const data = await request.json();
  const { title, description } = data;
  const newTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(newTask);
};
