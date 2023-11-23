import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Créer un nouvel utilisateur
        try {
            const { lastName, firstName, age, email, password, phoneNumber, address, badgeList } = req.body;

            const newUser = await prisma.user.create({
                data: {
                    LastName: lastName,
                    FirstName: firstName,
                    Age: age,
                    Email: email,
                    Password: password,
                    PhoneNumber: phoneNumber,
                    Address: address,
                    BadgeList: badgeList,
                },
            });

            res.status(200).json(newUser);
        } catch (error) {
            res.status(400).json({ error: `Quelque chose s'est mal passé: ${error.message}` });
        }
    } else {
        // Gérer les autres méthodes HTTP ou retourner une erreur
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
