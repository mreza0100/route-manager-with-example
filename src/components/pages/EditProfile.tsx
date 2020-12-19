import { RouteChildrenProps } from "react-router-dom";
import { isEmptyObjOrArr } from "../../helpers";

interface PropsT extends RouteChildrenProps {}

export default function EditProfile(props: PropsT) {
	const params = props.match!.params;
	return (
		<main>
			<h1>The only person who can reach here is you</h1>
			<h2>{isEmptyObjOrArr(params) ? "no params" : "with params"}</h2>
			<h3>
				<pre>{JSON.stringify(params, undefined, "\t").replaceAll('"', "")}</pre>
			</h3>
		</main>
	);
}
