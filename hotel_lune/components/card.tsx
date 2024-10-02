import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  id: number;
  name: string;
  description: string;
  adresse: string;
}

const Card: React.FC<CardProps> = ({ id, name, description, adresse }) => {
  const defaultImage = "/img/hotel_stockphoto.jpg";
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <Image
          src={defaultImage}
          alt="Imagen de hotel"
          width={384} // Establece el ancho de la imagen
          height={192} // Establece la altura de la imagen
          className="object-cover" // Asegúrate de que tenga el tamaño correcto
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name || "Nom inconnu"}</h2>
        <p>{description || "Pas de description disponible"}</p>
        <p>Location : {adresse || "Adresse inconnue"}</p>
        <div className="card-actions justify-end">
          <Link href={`/hotels/${id}`}>
            <button className="btn btn-primary">Book a room now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
