import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

async function getHotelRooms(id: string) {
  try {
    const hotel = await prisma.hotel.findUnique({
      where: {
        id_hotel: parseInt(id),
      },
      include: {
        rooms: true,
      },
    });
    return hotel;
  } catch (error) {
    console.error("Error fetching hotel rooms:", error);
    return null;
  }
}

export default async function HotelDetailsPage({
  params,
}: {
  params: { idhotel: string };
}) {
  const hotel = await getHotelRooms(params.idhotel);

  // Si no se encuentra el hotel, mostramos una página de error 404.
  if (!hotel) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
      <p className="text-xl mb-4">{hotel.description}</p>
      <p className="text-lg mb-4">{hotel.adresse}</p>

      <h2 className="text-2xl font-bold mb-4">Rooms available</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {hotel.rooms.length > 0 ? (
          hotel.rooms.map((room) => (
            <div key={room.id_room} className="border p-4">
              <h3 className="text-xl font-bold">{room.name}</h3>
              <p>{room.description}</p>
              <p>Price: ${room.price ? room.price.toNumber() : "N/A"}</p>
              <button className="btn btn-primary mt-2">Reserve</button>
            </div>
          ))
        ) : (
          <p>No rooms available.</p>
        )}
      </div>
    </div>
  );
}
