import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE } from "./action";

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
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.amount += amount;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      total = total.toFixed(2);
      return { ...state, total, amount };

    default:
      return state;
  }
}

export default reducer;
