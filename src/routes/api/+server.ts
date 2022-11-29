import { PrismaClient } from "@prisma/client";

let prisma;
if(typeof window === "undefined") {
	prisma = new PrismaClient()
}

export async function GET() {
	const users = await prisma?.user?.findMany()
	return new Response(JSON.stringify(users))
}