export async function load({ fetch }) {
	// const versions = await fetch("version-list.json").then(res => res.json());
	const versions = (await import("$lib/version-list.json")).default;

	return { versions };
}