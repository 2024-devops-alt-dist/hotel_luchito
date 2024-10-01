import React from "react";
import Link from "next/link";

interface CardProps {
  id: number;
  name: string;
  description: string;
  adresse: string;
}

const Card: React.FC<CardProps> = ({ id, name, description, adresse }) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        {/* Puedes poner aquí una imagen estática o dejarla vacía */}
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" // Imagen predeterminada
          alt="Imagen de hotel"
          className="object-cover h-48 w-full" // Asegúrate de que tenga el tamaño correcto
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name || "Nom inconnu"}</h2>
        <p>{description || "Pas de description disponible"}</p>
        <p>Location : {adresse || "Adresse inconnue"}</p>
        <div className="card-actions justify-end">
          <Link href={`/reservations/${id}`}>
            <button className="btn btn-primary">Book a room now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
