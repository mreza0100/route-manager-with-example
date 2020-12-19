import useRouterParser from "../hooks/routeParser";
import { Switch } from "react-router-dom";
import routeDriver, { configs } from "../routes";

export default function App() {
	const parsedRoutes = useRouterParser(routeDriver, configs);

	return <Switch>{parsedRoutes}</Switch>;
}
