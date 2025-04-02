export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    // accion para eliminar de favoritos.
    case 'remove_from_favorites':
      return {
        ...store,
        favorites: store.favorites.filter((fav)=>{
          return fav.uid!==action.payload.uid && fav.name!==action.payload.name
        })
      }
    // accion para agregar favoritos.
    case 'add_to_favorites':
      return {
        ...store,
        favorites: [...store.favorites, action.payload], // 
      }
    // Acción para establecer los datos de las personas
    case 'set_people_data':
      return {
        ...store,
        people: action.payload,
      }
    // Acción para establecer los datos de los planetas
    case 'set_planets_data':
      console.log("Datos en store.planets:", store.planets);
      return {
        ...store,
        planets: action.payload,
      }
    // Acción para establecer los datos de los vehículos
    case 'set_vehicles_data':
      console.log("Datos en store.vehicles:", store.vehicles);
      return {
        ...store,
        vehicles: action.payload,
      }
    //
    case 'add_to_favorites':
      const { uid, name } = action.payload;
      return {
        ...store,
        favorites: [...store.favorites, { uid: uid, name: name }]
      }
    default:
      return store;
  }
}

