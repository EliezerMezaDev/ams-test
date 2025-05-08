import { env } from '$env/dynamic/public';

export const isLocalAssets = env.PUBLIC_LOCAL_ASSETS || false;

export const getImage = (name: string) => name.replace('.png', '');

export const getImageUrl = (path: string | undefined) => {
	return path;

	return isLocalAssets ? `http://localhost:1337${path}` : path;
};

export const capitalizeFirstLetter = (string: string) =>
	string.charAt(0).toUpperCase() + string.slice(1);
