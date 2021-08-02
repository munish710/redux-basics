import { CLEAR_CART } from "./action";

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
}

export default reducer;
