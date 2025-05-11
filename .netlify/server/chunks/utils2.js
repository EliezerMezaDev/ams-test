import { p as public_env } from "./shared-server.js";
public_env.PUBLIC_LOCAL_ASSETS || false;
const getImageUrl = (path) => {
  console.log(`path: ${path}`);
  return path;
};
const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
export {
  capitalizeFirstLetter as c,
  getImageUrl as g
};
