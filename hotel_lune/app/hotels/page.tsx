// app/hotels/page.tsx
import { PrismaClient } from "@prisma/client";

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
    <div>
      <h1>Liste des Hôtels</h1>
      {hotels.length > 0 ? (
        <ul>
          {hotels.map((hotel) => (
            <li key={hotel.id_hotel}>
              <h2>{hotel.name}</h2>
              <p>{hotel.description}</p>
              <p>Lieu : {hotel.adresse}</p>
              {/* <p>Prix : {hotel.} €</p> */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun hôtel trouvé.</p>
      )}
    </div>
  );
}
