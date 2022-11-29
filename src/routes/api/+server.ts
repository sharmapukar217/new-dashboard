import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | undefined

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    let globalWithPrisma = global as typeof globalThis & {
      prisma: PrismaClient;
    };
    if (!globalWithPrisma.prisma) {
      globalWithPrisma.prisma = new PrismaClient();
    }
    prisma = globalWithPrisma.prisma;
  }
}


export async function GET() {
	let users;
	if(typeof window === 'undefined') {
		users = await prisma?.user?.findMany()
	}
	return new Response(JSON.stringify(users))
}