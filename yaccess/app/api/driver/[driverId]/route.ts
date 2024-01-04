import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, { params } : { params : { driverId : string} }) {
  const { driverId } = params;
  console.log("test");
  console.log(driverId);
  /*if (!req.query.driverId) {
    // Si 'driverId' n'existe pas, renvoyez une erreur 400 (Bad Request)
    return res.status(400).json({ message: "Driver ID is required" });
  }

  const driverId = req.query.driverId as string;

  console.log(driverId);
  const driverWithUser = await prisma.driver.findUnique({
    where: {
      Id: parseInt(driverId, 10), // Convertissez l'ID en nombre entier
    },
    include: {
      User: {
        select: {
          lastName: true,
          firstName: true,
          photo: true,
          badgeList: true,
          Bio: true,
        },
      },
    },
  });

  if (!driverWithUser) {
    // Si le conducteur n'est pas trouvé, renvoyez une réponse 404 (Non trouvé)
    return res.status(404).json({ message: "Driver not found" });
  }

  // Si le conducteur est trouvé, renvoyez ses informations, y compris les informations de l'utilisateur
  return res.status(200).json(driverWithUser);*/
}
