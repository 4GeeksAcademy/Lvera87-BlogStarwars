import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PeopleDetail = () => {
  const { uid } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${uid}`)
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          setPerson(data.result.properties);
        } else {
          setError("No se encontraron datos para este personaje.");
        }
        setLoading(false);
      })
      .catch(err => {
        setError("Error al cargar los detalles.");
        setLoading(false);
      });
  }, [uid]);

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <p>Cargando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4 text-center">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  if (!person) {
    return (
      <div className="container mt-4 text-center">
        <p>No hay información disponible para este personaje.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>{person.name}</h2>
      <p><strong>Género:</strong> {person.gender}</p>
      <p><strong>Color de cabello:</strong> {person.hair_color}</p>
      <p><strong>Color de ojos:</strong> {person.eye_color}</p>
      <p><strong>Año de nacimiento:</strong> {person.birth_year}</p>
      <p><strong>Altura:</strong> {person.height}</p>
      <p><strong>Masa:</strong> {person.mass}</p>
      <p><strong>Color de piel:</strong> {person.skin_color}</p>
    </div>
  );
};

export default PeopleDetail;
