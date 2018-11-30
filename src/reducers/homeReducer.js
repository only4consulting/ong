import { ACTION } from "../actions/homeActions";

const initialState = {
  homeValue: ''
};

// Reducer 
export const homeReducer = (state = initialState, action) => {

  // Evaluar la acción despachada
  switch (action.type) {

    // Iniciar timer
    case ACTION:

      return {
        ...state,
        homeValue: action.payload
      };

    // Si no es ninguna de las acciones anteriores
    default:
      return state;
  }
}