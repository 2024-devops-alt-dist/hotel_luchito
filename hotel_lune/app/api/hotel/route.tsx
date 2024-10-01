export const dynamic = "force-static";

export async function GET() {
  const data = [
    { id: 1, message: "Coucou" },
    { id: 2, message: "Holaaa" },
  ];

  return Response.json({ data });
}
