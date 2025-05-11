import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.BRQAd5_s.js","_app/immutable/chunks/l6lWngjb.js","_app/immutable/chunks/lPY5-UDQ.js","_app/immutable/chunks/CdE-JUFT.js","_app/immutable/chunks/B5L5u5of.js","_app/immutable/chunks/DJzGVn1U.js","_app/immutable/chunks/CxOeuqmF.js","_app/immutable/chunks/b2iHgnku.js","_app/immutable/chunks/BxQn5fwm.js","_app/immutable/chunks/Cvb3LdvX.js","_app/immutable/chunks/CPO8nXxS.js"];
export const stylesheets = ["_app/immutable/assets/0.CFAstlxm.css"];
export const fonts = [];
