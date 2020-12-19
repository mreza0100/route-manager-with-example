import { ConfigT, RedirectT, RouteT } from "../@types/Routes";
import NotFound from "../components/pages/NotFound";
import MainLayout from "../components/layout/Main";
import withPrivateRoute from "../HOC/PrivateRoute";
import withVeryPrivateRoute from "../HOC/withVeryPrivateRoute";
import IndexPage from "../components/pages/Index";
import { Redirect } from "react-router-dom";
import PrivatePage from "../components/pages/PrivatePage";
import EditProfile from "../components/pages/EditProfile";
import PublicRoute from "../components/pages/publicRoute";

const exact = true;
export default class RouteDriver {
	["/__editProfile:dynamic"]: RouteT = {
		exact,
		path: "/:dynamic",
		Layout: MainLayout,
		component: EditProfile,
		HOC: withVeryPrivateRoute,
	};

	["/__editProfile"]: RouteT = {
		exact,
		path: "__editProfile",
		Layout: MainLayout,
		component: EditProfile,
		HOC: withVeryPrivateRoute,
		nest: this["/__editProfile:dynamic"],
	};

	["/privateRoute"]: RouteT = {
		exact,
		path: "privateRoute",
		Layout: MainLayout,
		component: PrivatePage,
		HOC: withPrivateRoute,
		nest: this["/__editProfile"],
	};

	["/publicRoute"]: RouteT = {
		exact,
		path: "publicRoute",
		Layout: MainLayout,
		component: PublicRoute,
	};

	["/404"]: RouteT = {
		exact,
		path: "404",
		component: NotFound,
	};

	["*"]: RedirectT = {
		Handler: Redirect,
		from: "*",
		to: "/404",
	};

	["/"]: RouteT = {
		exact,
		path: "/",
		component: IndexPage,
		Layout: MainLayout,
		nest: [
			this["/__editProfile"],
			this["/publicRoute"],
			this["/privateRoute"],
			this["/404"],
			this["*"],
		],
	};
}
export const configs: ConfigT = {
	DEBUG: false,
	hellGate: "/",
};
