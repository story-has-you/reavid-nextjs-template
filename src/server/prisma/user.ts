import { prisma } from "@/server/prisma";
import type { User } from "@prisma/client";

class UserPrisma {
  public selectByUserId = async (userId: string): Promise<User | null> => {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  };

  public decreaseBalance = async (userId: string) => {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        balance: {
          decrement: 1,
        },
      },
    });
  };
}

export const userPrisma = new UserPrisma();
