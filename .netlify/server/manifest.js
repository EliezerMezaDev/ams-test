export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ams-dark.svg","ams-light.svg","favicon.png","logo.svg","novanet-logo-dark.svg","novanet-logo.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BGgk3mKT.js",app:"_app/immutable/entry/app.YoGLRD2L.js",imports:["_app/immutable/entry/start.BGgk3mKT.js","_app/immutable/chunks/B5L5u5of.js","_app/immutable/chunks/l6lWngjb.js","_app/immutable/chunks/DJzGVn1U.js","_app/immutable/entry/app.YoGLRD2L.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/l6lWngjb.js","_app/immutable/chunks/lPY5-UDQ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/info",
				pattern: /^\/api\/info\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/info/_server.ts.js'))
			},
			{
				id: "/coaches",
				pattern: /^\/coaches\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/nosotros",
				pattern: /^\/nosotros\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/productos/[category]",
				pattern: /^\/productos\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/productos/[category]/[product]",
				pattern: /^\/productos\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false},{"name":"product","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/contacto","/contacto/__data.json","/productos","/productos/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
