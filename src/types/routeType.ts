export interface RouteState {
	newRoute: string,
  currentRoute: string,
}

export enum RouteActionTypes {
	NEW_ROUTE = 'NEW_ROUTE',
  CURRENT_ROUTE = 'CURRENT_ROUTE',
}

interface FetchNewRouteAction {
	type: RouteActionTypes.NEW_ROUTE;
	payload: string;
}
interface FetchCurrentRouteAction {
	type: RouteActionTypes.CURRENT_ROUTE;
	payload: string;
}

export type RouteAction = FetchNewRouteAction | FetchCurrentRouteAction