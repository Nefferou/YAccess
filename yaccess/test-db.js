// test-db.js
// En haut de votre fichier de script
require('dotenv').config({ path: './.env.local' });

// Le reste de votre script...

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    try {
        // Tentez une opération simple, comme récupérer le premier utilisateur
        const user = await prisma.user.findFirst();
        console.log(user);
    } catch (error) {
        console.error("Impossible de se connecter à la base de données:", error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
