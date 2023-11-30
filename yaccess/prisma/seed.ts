import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient()

async function main() {
  const password = await hash("password", 10);
  const user = await prisma.user.create({
    data: {
      Id: 2,
      Email: "test@test.com",
      FirstName: "Test",
      LastName: "Test",
      Password: password,
    },
  });
  console.log(user);
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
