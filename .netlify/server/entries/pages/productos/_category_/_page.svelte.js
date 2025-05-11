import { s as subscribe, n as noop } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as add_attribute, b as each } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { p as page } from "../../../../chunks/stores.js";
import { e as elementColors } from "../../../../chunks/store.js";
import { g as getImageUrl } from "../../../../chunks/utils2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let Subcategories;
  let categoryName;
  let category;
  let $$unsubscribe_elementColors;
  let $Subcategories, $$unsubscribe_Subcategories = noop, $$subscribe_Subcategories = () => ($$unsubscribe_Subcategories(), $$unsubscribe_Subcategories = subscribe(Subcategories, ($$value) => $Subcategories = $$value), Subcategories);
  let $page, $$unsubscribe_page;
  $$unsubscribe_elementColors = subscribe(elementColors, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let active = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$subscribe_Subcategories({ Subcategories } = data);
  categoryName = $page.url.pathname.split("/")[2];
  category = $Subcategories?.data?.subcategories?.data[0]?.attributes?.categoria?.data || {};
  $$unsubscribe_elementColors();
  $$unsubscribe_Subcategories();
  $$unsubscribe_page();
  return `<section id="categories" class="bg-#003B49 flex flex-col items-center pt-14 lg:pt-18"><div class="w-full"><div id="top" class="w-full h-10 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] bg-#93B7BB lg:h-80px"></div> <div class="w-full h-36 relative overflow-hidden lg:h-300px"><div id="middle" class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-#93B7BB/50 gap-2 z-2"><h4 id="name" class="text-#003B49 font-bold text-lg md:text-3xl lg:text-4xl">${escape(category?.attributes?.name ?? categoryName)}</h4></div> <img id="image" class="md:min-w-full object-cover object-center"${add_attribute("src", getImageUrl(category?.attributes?.image?.data?.attributes?.url), 0)}${add_attribute("alt", category?.attributes?.name, 0)}></div> <div id="bottom" class="bottom-0 left-0 w-full h-10 [clip-path:polygon(32%_60%,_0_0,_100%_0)] bg-#93B7BB lg:h-80px"></div></div> <ul class="px-12 pt-18 pb-20 md:pb-30 gap-8 -mt-10 min-h-full bg-#fff w-full"><div class="max-w-screen-xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">${$Subcategories.fetching ? `<p data-svelte-h="svelte-dtqfh9">Cargando...</p>` : `${each($Subcategories?.data?.subcategories?.data, (subcategory) => {
    return `<button class="flex justify-center"><li class="relative max-w-360px"><img class="w-full"${add_attribute("src", getImageUrl(subcategory?.attributes?.image?.data?.attributes?.url), 0)}${add_attribute("alt", subcategory?.attributes.name, 0)}> <div${add_attribute(
      "class",
      `absolute bottom-0 left-0 w-full flex justify-center items-center backdrop-blur-2px [clip-path:polygon(3%_7%,_93%_0,_100%_50%,_100%_100%,_5%_98%,_0%_50%)] transition ease ${active === subcategory?.attributes?.name?.toLowerCase() ? "bg-#003B49" : "bg-#003B49/70"}`,
      0
    )}><h5 class="font-bold text-xl text-white first-letter:uppercase">${escape(subcategory?.attributes?.name)}</h5> <div class="i-ph-arrow-right text-white text-xl"></div> </div></li> </button>`;
  })}`}</div></ul></section>`;
});
export {
  Page as default
};
