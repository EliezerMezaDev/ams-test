import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, b as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { a as isDesktop, e as elementColors } from "../../../chunks/store.js";
const image$2 = "/_app/immutable/assets/avila-multisports-nosotros-grupo-ciclistas.Bsbmncjz.webp";
const FirstImg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isDesktop;
  $$unsubscribe_isDesktop = subscribe(isDesktop, (value) => value);
  let section;
  $$unsubscribe_isDesktop();
  return `<section class="w-full h-screen snap-start relative"${add_attribute("this", section, 0)} data-svelte-h="svelte-8gr2bn"><div id="firstImg" class="bg-#003B49 h-84vh lg:h-81.4vh"><img class="h-full object-cover md:min-w-full"${add_attribute("src", image$2, 0)} alt="Ciclistas"></div> <div id="firstImgFill" class="absolute top-0 right-0 bottom-0 [clip-path:polygon(0%_0%,_100%_0%,_100%_88.75%,_0%_83.06%)] bg-[#E3D268] w-full -z-1 lg:h-97.2vh"></div></section>`;
});
const Goals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { info } = $$props;
  if ($$props.info === void 0 && $$bindings.info && info !== void 0) $$bindings.info(info);
  return `<section id="goals" class="w-full h-screen snap-start relative"><div class="p-8 pt-24 bg-#003B49 h-94vh [clip-path:polygon(0px_0px,_100%_0px,_100%_85.77%,_0%_91.23%)] md:pt-32 md:p-12 lg:px-16"><ul class="grid grid-cols-1"><div class="max-h-[50vh] overflow-y-scroll [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">${each(info.content, (item) => {
    return `<li class="${"mb-4 " + escape(item.title.toLowerCase() === "valores", true)}"><h4 class="mb-2 text-xl text-#E3D268 md:text-2xl lg:text-3xl">${escape(item.title)}</h4> <p class="text-0.73rem leading-normal text-#ddd md:text-1.15rem md:max-w-90%">${escape(item.description)}</p> </li>`;
  })}</div></ul></div></section>`;
});
const History = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isDesktop;
  $$unsubscribe_isDesktop = subscribe(isDesktop, (value) => value);
  let { topic } = $$props;
  if ($$props.topic === void 0 && $$bindings.topic && topic !== void 0) $$bindings.topic(topic);
  $$unsubscribe_isDesktop();
  return `<section id="history" class="w-full h-screen snap-start relative"><div class="p-8 pt-24 bg-#003B49 h-94vh md:pt-32 md:p-12 lg:pl-16"><h3 class="mb-4 text-2xl text-#E3D268 md:text-4xl">${escape(topic.title)}</h3> <div class="max-h-[50vh] overflow-y-scroll [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"><p class="text-0.9rem leading-normal text-#ddd md:text-0.75rem md:max-w-100% xl:text-0.9rem 2xl:text-1.25rem"><!-- HTML_TAG_START -->${topic.description}<!-- HTML_TAG_END --></p></div></div></section>`;
});
const Philosophy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { topic } = $$props;
  if ($$props.topic === void 0 && $$bindings.topic && topic !== void 0) $$bindings.topic(topic);
  return `<section id="philosophy" class="w-full h-screen snap-start relative"><div class="p-8 pt-24 bg-#55555A h-94vh [clip-path:polygon(0px_0px,_100%_0px,_100%_85.77%,_0%_91.23%)] md:pt-32 md:p-12"><h3 class="mb-4 text-2xl text-#ACC37E md:text-4xl">${escape(topic.title)}</h3> <div class="max-h-[50vh] overflow-y-scroll [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"><p class="text-0.9rem leading-normal text-#ddd md:text-0.75rem md:max-w-100% xl:text-0.9rem 2xl:text-1.25rem"><!-- HTML_TAG_START -->${topic.description}<!-- HTML_TAG_END --></p></div></div></section>`;
});
const image$1 = "/_app/immutable/assets/avila-multisports-nosotros-ciclista-parado-pedaleando.CZA-A2Tf.webp";
const SecondImg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="w-full h-screen snap-start relative" data-svelte-h="svelte-1egsyhe"><div id="secondImg" class="h-84vh lg:h-81.4vh"><img class="h-full object-cover md:min-w-full md:object-top"${add_attribute("src", image$1, 0)} alt="Ciclista"></div> <div id="secondImgFill" class="absolute top-0 right-0 bottom-0 [clip-path:polygon(0%_0.59%,_100%_0%,_100%_88.75%,_0.4%_83.06%)] bg-#ACC37E w-full -z-1 lg:h-97.2vh"></div></section>`;
});
const image = "/_app/immutable/assets/avila-multisports-nosotros-2-miembros-equipos-ciclismo.5q9nqvkG.webp";
const ThirdImg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="w-full h-screen snap-start relative" data-svelte-h="svelte-1rwiw3x"><div id="thirdImg" class="h-84vh lg:h-81.4vh"><img class="h-full object-cover md:min-w-full"${add_attribute("src", image, 0)} alt="Ciclista"></div> <div id="thirdImgFill" class="absolute top-0 right-0 bottom-0 [clip-path:polygon(0%_0.59%,_100%_0%,_100%_88.75%,_0.4%_83.06%)] bg-#93B7BB w-full -z-1 lg:h-97.2vh"></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_elementColors;
  $$unsubscribe_elementColors = subscribe(elementColors, (value) => value);
  let { data } = $$props;
  const info = {
    title: data.content.topics[2].title,
    content: data.content.topics[2].content
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_elementColors();
  return `${$$result.head += `<!-- HEAD_svelte-17cqqex_START -->${$$result.title = `<title>${escape(data.content.title)}</title>`, ""}<!-- HEAD_svelte-17cqqex_END -->`, ""} <div class="lg:flex lg:flex-row">${validate_component(History, "History").$$render($$result, { topic: data.content.topics[0] }, {}, {})} ${validate_component(FirstImg, "FirstImg").$$render($$result, {}, {}, {})}</div> <div class="lg:flex lg:flex-row">${validate_component(Philosophy, "Philosophy").$$render($$result, { topic: data.content.topics[1] }, {}, {})} ${validate_component(SecondImg, "SecondImg").$$render($$result, {}, {}, {})}</div> <div class="lg:flex lg:flex-row">${validate_component(Goals, "Goals").$$render($$result, { info }, {}, {})} ${validate_component(ThirdImg, "ThirdImg").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
