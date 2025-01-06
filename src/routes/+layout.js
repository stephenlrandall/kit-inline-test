export async function load({ fetch }) {
	const versions = await fetch("version-list.json").then(res => res.json());

	return { versions };
}