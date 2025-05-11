import { s as subscribe, n as noop } from "../../../chunks/utils.js";
import { c as create_ssr_component, b as each, a as add_attribute, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { e as elementColors } from "../../../chunks/store.js";
import { g as getImageUrl } from "../../../chunks/utils2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let Categories;
  let $$unsubscribe_elementColors;
  let $Categories, $$unsubscribe_Categories = noop, $$subscribe_Categories = () => ($$unsubscribe_Categories(), $$unsubscribe_Categories = subscribe(Categories, ($$value) => $Categories = $$value), Categories);
  $$unsubscribe_elementColors = subscribe(elementColors, (value) => value);
  let { data } = $$props;
  let active = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$subscribe_Categories({ Categories } = data);
  $$unsubscribe_elementColors();
  $$unsubscribe_Categories();
  return `<section id="productCategories" class="h-screen max-h-screen bg-#003B49 flex flex-col items-center pt-28 p-8 overflow-y-auto"><h3 class="text-2xl text-#E3D268 md:text-3xl" data-svelte-h="svelte-15n1tgv">Productos</h3> <ul class="px-6 mt-8 pb-20 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">${$Categories.data?.categories?.data.length ? `${each($Categories.data?.categories?.data, (category) => {
    return `<button><li${add_attribute("id", category?.attributes?.name?.toLowerCase(), 0)} class="relative max-w-full"><div id="top"${add_attribute(
      "class",
      `absolute top-0 left-0 w-full h-6 transition ease [clip-path:polygon(0%_0%,_100%_0%,_19.74%_81.25%)] ${active === category?.attributes?.name?.toLowerCase() ? " bg-#93B7BB" : "bg-#93B7BB/75 md:bg-#93B7BB/50"}`,
      0
    )}></div> <div id="middle"${add_attribute(
      "class",
      `absolute bottom-0 left-0 w-full h-8 md:h-12 flex justify-center items-center gap-2 [clip-path:polygon(60%_0,_94%_23%,_100%_100%,_0_100%,_8%_8%)] transition ease z-10 ${active === category?.attributes?.name?.toLowerCase() ? " bg-#93B7BB" : "bg-#93B7BB/75 md:bg-#93B7BB/50"}`,
      0
    )}><h4 id="name" class="text-#003B49 font-bold text-xl sm:text-2xl lg:text-3xl">${escape(category?.attributes?.name)}</h4> <div class="i-ph-arrow-right-bold text-xl md:text-2xl text-#003B49"></div></div> <img id="image"${add_attribute("src", getImageUrl(category?.attributes?.image?.data?.attributes?.url), 0)}${add_attribute("alt", category?.attributes?.name, 0)}></li> </button>`;
  })}` : ``}</ul></section>`;
});
export {
  Page as default
};
