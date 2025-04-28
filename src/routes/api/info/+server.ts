import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const key = url.searchParams.get('key') ?? '';

	if (!key) {
		error(400, 'No key provided');
	}

	const module = await import(`../../../content/${key}.md`);

	return new Response(JSON.stringify(module.metadata));
}
