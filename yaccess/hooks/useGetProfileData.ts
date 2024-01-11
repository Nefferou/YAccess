import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const useGetProfileData = async () => {
        const session = await getSession();
        console.log("session", session);

        const user = await prisma.user.findUnique({
            where: { id: session?.user?.id },
        });
        return user;
};

export default useGetProfileData;
