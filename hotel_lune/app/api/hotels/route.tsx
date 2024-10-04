import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const hotels = await prisma.hotel.findMany();
    return NextResponse.json(hotels);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Une erreur est survenue lors de la récupération des hôtels.",
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
