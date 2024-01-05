import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

const prisma = new PrismaClient();

export async function GET() {
  new Response
}
