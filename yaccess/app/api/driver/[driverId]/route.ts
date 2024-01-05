import { NextRequest } from "next/server";

type Params = {
  driverId: string;
};

export async function GET(params: Params) {
  console.log("GET driverId", params);
  const { driverId } = params;

  if (!driverId || isNaN(Number(driverId))) {
    return new Response("Invalid driverId", { status: 400 });
  }

  // Your database query using Prisma here if needed
  /*
  const driverWithUser = await prisma.driver.findUnique({
    where: {
      userId: parseInt(driverId, 10),
    },
  });

  if (!driverWithUser) {
    return res.status(404).json({ error: "Driver not found" });
  }
  */

  return new Response("OK", { status: 200 });
}
