import { s as subscribe, n as noop } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as add_attribute, b as each } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { e as elementColors } from "../../../../../chunks/store.js";
import { g as getImageUrl } from "../../../../../chunks/utils2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let SubcategoryProducts;
  let productName;
  let category;
  let products;
  let $$unsubscribe_elementColors;
  let $SubcategoryProducts, $$unsubscribe_SubcategoryProducts = noop, $$subscribe_SubcategoryProducts = () => ($$unsubscribe_SubcategoryProducts(), $$unsubscribe_SubcategoryProducts = subscribe(SubcategoryProducts, ($$value) => $SubcategoryProducts = $$value), SubcategoryProducts);
  let $page, $$unsubscribe_page;
  $$unsubscribe_elementColors = subscribe(elementColors, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$subscribe_SubcategoryProducts({ SubcategoryProducts } = data);
  productName = $page.params.product;
  category = $SubcategoryProducts?.data?.subcategories?.data[0]?.attributes?.categoria?.data;
  products = $SubcategoryProducts?.data?.subcategories?.data[0].attributes?.productos?.data;
  $$unsubscribe_elementColors();
  $$unsubscribe_SubcategoryProducts();
  $$unsubscribe_page();
  return `<section id="products" class="bg-#003B49 flex flex-col items-center pt-14 lg:pt-18"><div class="w-full"><div id="top" class="w-full h-10 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] bg-#93B7BB lg:h-80px"></div> <div class="w-full h-36 relative overflow-hidden lg:h-300px"><div id="middle" class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-#93B7BB/50 gap-2 z-2"><h4 id="name" class="text-#003B49 font-bold text-lg md:text-3xl lg:text-4xl">${escape(category?.attributes?.name)}</h4></div> <img id="image" class="md:min-w-full object-cover object-center"${add_attribute("src", getImageUrl(category?.attributes?.image?.data?.attributes?.url), 0)}${add_attribute("alt", category?.attributes?.name, 0)}></div> <div id="bottom" class="bottom-0 left-0 w-full h-10 [clip-path:polygon(32%_60%,_0_0,_100%_0)] bg-#93B7BB lg:h-80px"></div></div> <div class="-mt-12 bg-#fff w-full min-h-full lg:-mt-20"><h3 class="mt-24 text-center text-2xl text-#003B49 first-letter:uppercase md:text-3xl lg:mt-20">${escape(productName)}</h3> <ul class="px-12 pt-10 mb-18 pb-12 flex flex-col gap-8 min-h-screen lg:flex-row lg:min-h-full lg:items-start lg:justify-center lg:mb-0 lg:pt-10 lg:max-w-70% lg:mx-auto lg:mb-24"><div class="max-w-screen-xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">${$SubcategoryProducts.fetching ? `<p data-svelte-h="svelte-dtqfh9">Cargando...</p>` : `${each(products, (product) => {
    return `<li class="relative max-w-360px border-b pb-3 border-b-#DDDDDD md:mx-auto lg:last:mx-0"><img class="lg:max-w-350px"${add_attribute("src", getImageUrl(product?.attributes?.image?.data?.attributes?.url), 0)}${add_attribute("alt", product?.attributes?.name, 0)}> <h4 class="text-#003B49 text-lg font-bold mt-4">${escape(product?.attributes?.name)}</h4> <button data-svelte-h="svelte-f2ddru">Ver especificaciones</button> </li>`;
  })}`}</div></ul></div></section>`;
});
export {
  Page as default
};
