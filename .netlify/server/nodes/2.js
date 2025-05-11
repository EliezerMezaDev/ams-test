import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CBGbjEfG.js","_app/immutable/chunks/l6lWngjb.js","_app/immutable/chunks/lPY5-UDQ.js","_app/immutable/chunks/Cvb3LdvX.js","_app/immutable/chunks/BHwbKQFa.js","_app/immutable/chunks/b2iHgnku.js","_app/immutable/chunks/DJzGVn1U.js","_app/immutable/chunks/CPO8nXxS.js","_app/immutable/chunks/BxQn5fwm.js"];
export const stylesheets = ["_app/immutable/assets/2.BmYN6oVP.css"];
export const fonts = [];
