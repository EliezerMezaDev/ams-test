export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch('/api/info?key=about');

	if (res.ok) {
		const content = await res.json();

		return {
			content
		};
	}

	return {
		content: []
	};
}
