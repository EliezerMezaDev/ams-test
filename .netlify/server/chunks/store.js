import { w as writable } from "./index2.js";
const isOpen = writable(false);
const isDesktop = writable(false);
const scrollY = writable(0);
const elementColors = writable({
  logo: "light",
  burger: "light",
  copyright: "light"
});
export {
  isDesktop as a,
  elementColors as e,
  isOpen as i,
  scrollY as s
};
