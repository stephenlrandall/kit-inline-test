export async function load({ url, params }) {
	console.log(`running page \`load\` (version: ${params.version})`);

	const searchTerm = url.searchParams.get('q');

	return { searchTerm };
}