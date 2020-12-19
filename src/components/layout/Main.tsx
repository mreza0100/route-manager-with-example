interface PropsT {
	children: React.ReactChild;
}

export default function MainLayout(props: PropsT) {
	return (
		<main>
			<h3>this is from Layout</h3>
			{props.children}
		</main>
	);
}
