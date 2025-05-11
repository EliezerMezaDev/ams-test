import { b as buildSessionObject } from "../../chunks/session.js";
async function load(event) {
  const __houdini__vite__plugin__return__value__ = {};
  return {
    ...buildSessionObject(event),
    ...__houdini__vite__plugin__return__value__
  };
}
export {
  load
};
