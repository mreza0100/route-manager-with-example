import { RouteChildrenProps } from "react-router-dom";
import { defer, getRandomNumber } from "../helpers";
import { useEffect, useState } from "react";

function getRandomBoolean() {
	const n = getRandomNumber(0, 5);
	return Boolean(n);
}

function okayToPass(): Promise<boolean> {
	const isOkayToPass = getRandomBoolean();
	return new Promise((resole, reject) => {
		setTimeout(() => {
			resole(isOkayToPass);
		}, 1000);
	});
}

export default function withPrivateRoute(Component: JSXElementT) {
	return <T extends RouteChildrenProps>(props: T) => {
		const [ok, setOk] = useState<boolean | null>(null);

		useEffect(() => {
			(async () => {
				setOk(await okayToPass());
			})();
		}, [setOk]);

		if (ok === null) return <h1>Loading...</h1>;

		if (!ok) {
			alert("you are redirecting to '/'");
			defer(() => props.history.replace("/"));
			return null;
		}

		return <Component {...props} />;
	};
}
