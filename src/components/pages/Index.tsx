import { Link } from "react-router-dom";

export default function IndexPage() {
	return (
		<main>
			<h1>this is IndexPage</h1>
			<h2>
				<Link to="/privateRoute">/privateRoute</Link>
			</h2>
			<h2>
				<Link to="/privateRoute/__editProfile">/privateRoute/__editProfile</Link>
			</h2>
			<h2>
				<Link to="/__editProfile">/__editProfile</Link>
			</h2>
		</main>
	);
}
