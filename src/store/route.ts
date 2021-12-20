import { RouteAction, RouteState, RouteActionTypes } from "../types/routeType";

const defaultState: RouteState = {
  newRoute: 'new',
  currentRoute: '',
};

export const route = (state = defaultState, action: RouteAction): RouteState => {
  switch (action.type) {
    case RouteActionTypes.NEW_ROUTE:
      return { ...state, newRoute: action.payload };
    case RouteActionTypes.CURRENT_ROUTE:
      return { ...state, currentRoute: action.payload };
    default:
      return state;
  }
};

export const newRouteAction = (payload: string): RouteAction => ({ type: RouteActionTypes.NEW_ROUTE, payload });
export const currentRouteAction = (payload: string): RouteAction => ({ type: RouteActionTypes.CURRENT_ROUTE, payload });
