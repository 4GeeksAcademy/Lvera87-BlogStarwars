export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    // Acción para eliminar de favoritos
    case 'remove_from_favorites':
      return {
        ...store,
        favorites: store.favorites.filter((fav) => {
          return fav.uid !== action.payload.uid || fav.name !== action.payload.name; // Filtra por uid y name
        })
      };

    // Acción para agregar a favoritos
    case 'add_to_favorites':
      const { uid, name } = action.payload;

      // Verificar si el favorito ya existe usando uid y name
      const exists = store.favorites.some((fav) => fav.uid === uid && fav.name === name);
      if (exists) {
        return store; // Si ya existe, no lo agregues
      }

      return {
        ...store,
        favorites: [...store.favorites, { uid, name }]
      };

    // Acción para establecer los datos de las personas
    case 'set_people_data':
      return {
        ...store,
        people: action.payload,
      };

    // Acción para establecer los datos de los planetas
    case 'set_planets_data':
      console.log("Datos en store.planets:", store.planets);
      return {
        ...store,
        planets: action.payload,
      };

    // Acción para establecer los datos de los vehículos
    case 'set_vehicles_data':
      console.log("Datos en store.vehicles:", store.vehicles);
      return {
        ...store,
        vehicles: action.payload,
      };

    // Caso por defecto
    default:
      return store;
  }
}

