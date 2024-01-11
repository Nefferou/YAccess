"use server";

import { prisma } from "../../../lib/prisma";
import { hash } from "bcrypt";
import { User } from "@prisma/client";

export const signUp = async ({ user }: { user: User }) => {
  const userExists = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (userExists) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hash(user.password, 10);

  await prisma.user.create({
    data: {
      ...user,
      password: hashedPassword,
    },
  });

  return "User created";
};
