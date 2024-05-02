import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient(); // .$extends(withAccelerate());

// @ts-ignore
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;