/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url(env) {
			return env.WATCH_SCHEMA_URL;
		}
	},
	plugins: {
		'houdini-svelte': {}
	},
	scalars: {
		JSON: {
			type: 'Object',
			unmarshal: (value) => {
				// const res = value ? JSON.parse(value) : null;
				console.log(value);
				return value;
			},
			marshal: (value) => value && JSON.stringify(value)
		}
	}
};

export default config;
