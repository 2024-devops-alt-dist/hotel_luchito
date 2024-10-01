import { PrismaClient } from "@prisma/client";
import Card from "../../components/card";

const prisma = new PrismaClient();

async function getHotels() {
  try {
    const hotels = await prisma.hotel.findMany();
    console.log(hotels);
    return hotels;
  } catch (error) {
    console.error("Erreur lors de la récupération des hôtels :", error);
    return [];
  }
}

export default async function HotelsPage() {
  const hotels = await getHotels();

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Available hotels</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <Card
              key={hotel.id_hotel}
              id={hotel.id_hotel}
              name={hotel.name || "Nom inconnu"} // Proporciona un valor por defecto
              description={hotel.description || "Pas de description disponible"} // Proporciona un valor por defecto
              adresse={hotel.adresse || "Adresse inconnue"} // Proporciona un valor por defecto
            />
          ))
        ) : (
          <p>No hotel found.</p>
        )}
      </div>
    </div>
  );
}
