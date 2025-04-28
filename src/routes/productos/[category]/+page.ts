import { capitalizeFirstLetter } from '$lib/utils';
import type { SubcategoriesVariables } from './$houdini';

export const ssr = false;
export const prerender = false;

export const _SubcategoriesVariables: SubcategoriesVariables = ({ params }) => ({
	name: capitalizeFirstLetter(params.category)
});
