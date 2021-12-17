const defaultState = {
  newRoute: 'new',
  currentRoute: '',
};

const NEW_ROUTE = 'NEW_ROUTE';
const CURRENT_ROUTE = 'CURRENT_ROUTE';

export const route = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_ROUTE:
      return { ...state, newRoute: action.payload };
    case CURRENT_ROUTE:
      return { ...state, currentRoute: action.payload };
    default:
      return state;
  }
};

export const newRouteAction = (payload) => ({ type: NEW_ROUTE, payload });
export const currentRouteAction = (payload) => ({ type: CURRENT_ROUTE, payload });
