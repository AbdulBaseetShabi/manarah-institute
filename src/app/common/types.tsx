export interface Route {
    id: string;
    label: string;
    sub_routes?:  Omit<Route, 'sub_routes'>[];
}