import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./action";

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case INCREASE:
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          // item = { ...item, amount: item.amount + 1 };
          item.amount += 1;
        }
        return item;
      });
      return {
        ...state,
        cart: tempCart,
      };

    case DECREASE:
      let tempCart2 = [];
      if (action.payload.amount === 1) {
        tempCart2 = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        tempCart2 = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            // item = { ...item, amount: item.amount + 1 };
            item.amount -= 1;
          }
          return item;
        });
      }
      return { ...state, cart: tempCart2 };
    default:
      return state;
  }
}

export default reducer;
