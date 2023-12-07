"use server";

import { prisma } from "../../../lib/prisma";
import { hash } from "bcrypt";

export const signUp = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hash(password, 10);

  await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });

  return "User created";
};
