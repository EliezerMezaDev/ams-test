import { c as create_ssr_component, b as each, a as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { s as subscribe } from "../../chunks/utils.js";
import { e as elementColors, a as isDesktop } from "../../chunks/store.js";
const willierLogo = "/_app/immutable/assets/avila-multisports-marcas-willier.By5OOKzD.webp";
const inspireLogo = "/_app/immutable/assets/avila-multisports-marcas-inspire.DADblve_.webp";
const trueLogo = "data:image/webp;base64,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";
const NZManufacturingLogo = "/_app/immutable/assets/avila-multisports-marcas-nz-manufacturing.CBFNkgks.webp";
const SRMLogo = "/_app/immutable/assets/avila-multisports-marcas-srm.DEHOjIj0.webp";
const willierImage = "/_app/immutable/assets/avila-multisports-principal-tubo-direccion-bicicleta-WILLIER.BRRauaMP.webp";
const inspireImage = "/_app/immutable/assets/avila-multisports-principal-mujer-de-espalda-multifuncional-INSPIRE.BYACQjwd.webp";
const trueImage = "/_app/immutable/assets/avila-multisports-principal-personas-corriendo-treadmills-TRUE.CfgZLZLU.webp";
const NZManufacturingImage = "/_app/immutable/assets/avila-multisports-accesorios-nadador-sumergido-piscina.33xtOrFw.webp";
const SRMImage = "/_app/immutable/assets/avila-multisports-accesorios-plato-bicicleta-SRM.DMXgPRWx.webp";
const brands = [{
  name: "Willier logo",
  image: willierLogo
}, {
  name: "Inspire logo",
  image: inspireLogo
}, {
  name: "True logo",
  image: trueLogo
}, {
  name: "NZ Manufacturing",
  image: NZManufacturingLogo
}, {
  name: "SRM",
  image: SRMLogo
}];
const carousel = {
  hardware: [{
    name: "Willier logo",
    copy: {
      main: "Somos representantes exclusivos",
      secondary: "Una excelente aplicación para ciclistas que desean una bicicleta de carretera italiana de alta rendimiento"
    },
    logo: willierLogo,
    image: willierImage
  }, {
    name: "Inspire logo",
    copy: {
      main: "Inspirados para ofrecer los mejores productos",
      secondary: "Equipos de ejercicio de alta calidad"
    },
    logo: inspireLogo,
    image: inspireImage
  }, {
    name: "True logo",
    copy: {
      main: "Somos representantes exclusivos",
      secondary: "Tu mejor aliado para tus actividades fitness"
    },
    logo: trueLogo,
    image: trueImage
  }],
  accesories: [{
    name: "NZ Manufacturing",
    logo: NZManufacturingLogo,
    image: NZManufacturingImage
  }, {
    name: "SRM",
    logo: SRMLogo,
    image: SRMImage
  }]
};
const Brands = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_elementColors;
  $$unsubscribe_elementColors = subscribe(elementColors, (value) => value);
  $$unsubscribe_elementColors();
  return `<section id="brands" class="min-h-screen h-screen grid grid-cols-2 gap-18 place-items-center place-content-center snap-start snap-always px-12 md:px-0 lg:w-1/3">${each(brands, (brand) => {
    return `<div class="flex items-center justify-center">${brand.name === "Saffeti" || brand.name === "SRM" ? `<img${add_attribute("src", brand.image, 0)}${add_attribute("alt", brand.name, 0)} class="max-h-[2.6rem] filter-invert-100 md:max-h-15">` : `<img${add_attribute("src", brand.image, 0)}${add_attribute("alt", brand.name, 0)} class="max-h-[2.6rem] md:max-h-15">`} </div>`;
  })}</section>`;
});
const FeaturedMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isDesktop;
  $$unsubscribe_isDesktop = subscribe(isDesktop, (value) => value);
  let { class: classname = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classname !== void 0) $$bindings.class(classname);
  $$unsubscribe_isDesktop();
  return `<section id="featuredMessage" class="${"relative snap-start snap-always max-h-screen min-h-screen w-full lg:w-1/2 " + escape(classname, true)}"><div class="max-h-screen h-screen bg-[#003B49] z-3 flex flex-col justify-center pl-6 md:pl-10 lg:pl-16 lg:gap-8" data-svelte-h="svelte-1qowtst"><h4 class="text-[#E3D268] text-lg opacity-0 font-300 max-w-18rem z-4 md:text-3xl md:max-w-lg md:text-balance lg:max-w-32rem">Somos representantes exclusivos de Wilier e Inspire Fitness. También, distribuidores de
			equipos True</h4> <p class="text-[#DDDDDD] font-300 opacity-0 max-w-18rem mt-4 md:text-2xl md:max-w-sm lg:text-2xl lg:max-w-31rem">Ofrecemos su garantía comercial además de brindarte el servicio que te mereces. Tenemos a tu
			disposición una selección de las mejores bicicletas y equipos</p></div> <div class="absolute top-0 right-0 bottom-0 [clip-path:polygon(70.23%_0%,_100%_0%,_82.52%_41.59%,_72.71%_10.19%)] bg-[#93B7BB] w-full -z-1"></div></section>`;
});
const NavigationBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { class: classnames = "" } = $$props;
  let { position = "left" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.class === void 0 && $$bindings.class && classnames !== void 0) $$bindings.class(classnames);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  return `<button class="${escape(classnames, true) + " w-8 h-8 md:w-12 md:h-12 bg-#55555A/50 hover:bg-#55555A/80 rounded-full flex items-center justify-center absolute z-10 bottom-47% " + escape(position === "left" ? "left-2" : "right-2", true)}"><div class="${escape(icon, true) + " text-white text-md md:text-lg"}"></div></button>`;
});
const css$1 = {
  code: "swiper-container.svelte-1j7z3iw::part(pagination){--swiper-pagination-bottom:15vh;--swiper-pagination-color:#fff}",
  map: `{"version":3,"file":"Main.svelte","sources":["Main.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { animate, inView } from \\"motion\\";\\nimport { carousel } from \\"$lib/brands\\";\\nimport { onMount } from \\"svelte\\";\\nimport { blur } from \\"svelte/transition\\";\\nimport * as actions from \\"$lib/actions/inView\\";\\nimport { elementColors } from \\"$lib/store\\";\\nimport NavigationBtn from \\"../common/NavigationBtn.svelte\\";\\nlet swiper;\\nconst spaceBetween = 10;\\nfunction animateElements(repeat = false) {\\n  $elementColors.burger = \\"light\\";\\n  inView(\\"swiper-slide\\", (info) => {\\n    animate(info.target.querySelector(\\"h3\\"), {\\n      opacity: [0, 1],\\n      x: [-100, 0]\\n    }, {\\n      duration: 1.5,\\n      delay: repeat ? 0.1 : 0.5,\\n      easing: [0.17, 0.55, 0.55, 1]\\n    });\\n    animate(info.target.querySelector(\\"p\\"), {\\n      opacity: [0, 1],\\n      x: [-100, 0]\\n    }, {\\n      duration: 1.5,\\n      delay: repeat ? 0.3 : 0.7,\\n      easing: [0.17, 0.55, 0.55, 1]\\n    });\\n    animate(info.target.querySelector(\\"img#banner\\"), {\\n      opacity: [0, 1]\\n    }, {\\n      duration: 1.5,\\n      delay: repeat ? 0.5 : 0.9,\\n      easing: [0.17, 0.55, 0.55, 1]\\n    });\\n  });\\n}\\nconst onSlideChange = () => {\\n  animateElements();\\n};\\nonMount(() => {\\n  swiper = document.querySelector(\\"swiper-container#mainSlider\\")?.swiper;\\n  animateElements();\\n});\\n<\/script>\\r\\n\\r\\n<section\\r\\n\\tclass=\\"snap-start snap-always h-screen relative\\"\\r\\n\\tuse:actions.inView={{ bottom: 100, top: 100 }}\\r\\n\\ton:enter={animateElements}\\r\\n>\\r\\n\\t<NavigationBtn\\r\\n\\t\\ticon=\\"i-fa6-solid-arrow-left\\"\\r\\n\\t\\tclass=\\"main-prev-btn\\"\\r\\n\\t\\ton:click={() => swiper?.slidePrev()}\\r\\n\\t/>\\r\\n\\t<swiper-container\\r\\n\\t\\tid=\\"mainSlider\\"\\r\\n\\t\\tclass=\\"w-full\\"\\r\\n\\t\\tslides-per-view={1}\\r\\n\\t\\tspace-between={spaceBetween}\\r\\n\\t\\tcentered-slides={true}\\r\\n\\t\\tnavigation={{\\r\\n\\t\\t\\tenabled: false,\\r\\n\\t\\t\\tnextEl: '.main-next-btn',\\r\\n\\t\\t\\tprevEl: '.main-prev-btn',\\r\\n\\t\\t\\tdisabledClass: 'opacity-90'\\r\\n\\t\\t}}\\r\\n\\t\\tpagination={{}}\\r\\n\\t\\tbreakpoints={{\\r\\n\\t\\t\\t1024: {\\r\\n\\t\\t\\t\\tpagination: false,\\r\\n\\t\\t\\t\\tnavigation: true\\r\\n\\t\\t\\t}\\r\\n\\t\\t}}\\r\\n\\t\\ton:swiperslidechange={onSlideChange}\\r\\n\\t>\\r\\n\\t\\t{#each carousel.hardware as item (item.name)}\\r\\n\\t\\t\\t<swiper-slide\\r\\n\\t\\t\\t\\tclass=\\"min-h-screen min-w-full bg-cover bg-[-45em] flex flex-col justify-start pt-36 pl-10 items-start gap-4 md:pt-40 md:gap-6 md:bg-center lg:pl-24 lg:pt-52\\"\\r\\n\\t\\t\\t\\tstyle=\\"background-image: url({item.image})\\"\\r\\n\\t\\t\\t>\\r\\n\\t\\t\\t\\t<h3\\r\\n\\t\\t\\t\\t\\tclass=\\"text-#E3D268 text-2xl font-light max-w-[80%] text-shadow-xl md:text-4xl md:max-w-70% lg:text-5xl\\"\\r\\n\\t\\t\\t\\t\\tin:blur\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t{item.copy.main}\\r\\n\\t\\t\\t\\t</h3>\\r\\n\\t\\t\\t\\t<p\\r\\n\\t\\t\\t\\t\\tclass=\\"text-white max-w-[80%] text-shadow-xl md:text-xl md:max-w-60% lg:text-2xl lg:max-w-45%\\"\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t{item.copy.secondary}\\r\\n\\t\\t\\t\\t</p>\\r\\n\\t\\t\\t\\t{#if item.name === 'Inspire logo'}\\r\\n\\t\\t\\t\\t\\t<img\\r\\n\\t\\t\\t\\t\\t\\tsrc={item.logo}\\r\\n\\t\\t\\t\\t\\t\\talt={item.name}\\r\\n\\t\\t\\t\\t\\t\\tloading=\\"lazy\\"\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"filter-invert-100 w-60% md:w-30% md:mt-12\\"\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t{:else}\\r\\n\\t\\t\\t\\t\\t<img src={item.logo} alt={item.name} loading=\\"lazy\\" class=\\"w-60% md:w-30% md:mt-12\\" />\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t</swiper-slide>\\r\\n\\t\\t{/each}\\r\\n\\t</swiper-container>\\r\\n\\t<NavigationBtn\\r\\n\\t\\ticon=\\"i-fa6-solid-arrow-right\\"\\r\\n\\t\\tclass=\\"main-next-btn\\"\\r\\n\\t\\tposition=\\"right\\"\\r\\n\\t\\ton:click={() => swiper?.slideNext()}\\r\\n\\t/>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n\\tswiper-container::part(pagination) {\\r\\n\\t\\t--swiper-pagination-bottom: 15vh;\\r\\n\\t\\t--swiper-pagination-color: #fff;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAmHC,+BAAgB,OAAO,UAAU,CAAE,CAClC,0BAA0B,CAAE,IAAI,CAChC,yBAAyB,CAAE,IAC5B"}`
};
const spaceBetween$1 = 10;
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_elementColors;
  $$unsubscribe_elementColors = subscribe(elementColors, (value) => value);
  $$result.css.add(css$1);
  $$unsubscribe_elementColors();
  return `<section class="snap-start snap-always h-screen relative">${validate_component(NavigationBtn, "NavigationBtn").$$render(
    $$result,
    {
      icon: "i-fa6-solid-arrow-left",
      class: "main-prev-btn"
    },
    {},
    {}
  )} <swiper-container id="mainSlider" class="w-full svelte-1j7z3iw"${add_attribute("slides-per-view", 1, 0)}${add_attribute("space-between", spaceBetween$1, 0)}${add_attribute("centered-slides", true, 0)}${add_attribute(
    "navigation",
    {
      enabled: false,
      nextEl: ".main-next-btn",
      prevEl: ".main-prev-btn",
      disabledClass: "opacity-90"
    },
    0
  )}${add_attribute("pagination", {}, 0)}${add_attribute(
    "breakpoints",
    {
      1024: { pagination: false, navigation: true }
    },
    0
  )}>${each(carousel.hardware, (item) => {
    return `<swiper-slide class="min-h-screen min-w-full bg-cover bg-[-45em] flex flex-col justify-start pt-36 pl-10 items-start gap-4 md:pt-40 md:gap-6 md:bg-center lg:pl-24 lg:pt-52" style="${"background-image: url(" + escape(item.image, true) + ")"}"><h3 class="text-#E3D268 text-2xl font-light max-w-[80%] text-shadow-xl md:text-4xl md:max-w-70% lg:text-5xl">${escape(item.copy.main)}</h3> <p class="text-white max-w-[80%] text-shadow-xl md:text-xl md:max-w-60% lg:text-2xl lg:max-w-45%">${escape(item.copy.secondary)}</p> ${item.name === "Inspire logo" ? `<img${add_attribute("src", item.logo, 0)}${add_attribute("alt", item.name, 0)} loading="lazy" class="filter-invert-100 w-60% md:w-30% md:mt-12">` : `<img${add_attribute("src", item.logo, 0)}${add_attribute("alt", item.name, 0)} loading="lazy" class="w-60% md:w-30% md:mt-12">`} </swiper-slide>`;
  })}</swiper-container> ${validate_component(NavigationBtn, "NavigationBtn").$$render(
    $$result,
    {
      icon: "i-fa6-solid-arrow-right",
      class: "main-next-btn",
      position: "right"
    },
    {},
    {}
  )} </section>`;
});
const css = {
  code: "swiper-container.svelte-1j7z3iw::part(pagination){--swiper-pagination-bottom:15vh;--swiper-pagination-color:#fff}",
  map: `{"version":3,"file":"Slider.svelte","sources":["Slider.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { animate, inView } from \\"motion\\";\\nimport { onMount } from \\"svelte\\";\\nimport { carousel } from \\"$lib/brands\\";\\nimport * as actions from \\"$lib/actions/inView\\";\\nimport { elementColors } from \\"$lib/store\\";\\nimport NavigationBtn from \\"../common/NavigationBtn.svelte\\";\\nlet swiper;\\nconst spaceBetween = 10;\\nfunction animateElements(repeat = false) {\\n  $elementColors.burger = \\"light\\";\\n  inView(\\"swiper-slide\\", (info) => {\\n    animate(info.target.querySelector(\\"div > img#sliderBanner\\"), {\\n      opacity: [0, 1]\\n    }, {\\n      duration: 0.5,\\n      delay: repeat ? 0.1 : 0.3,\\n      easing: [0.17, 0.55, 0.55, 1]\\n    });\\n  });\\n}\\nconst onSlideChange = () => {\\n  animateElements();\\n};\\nonMount(() => {\\n  swiper = document.querySelector(\\"swiper-container#accesoriesSlider\\")?.swiper;\\n  animateElements();\\n});\\n<\/script>\\r\\n\\r\\n<section\\r\\n\\tclass=\\"snap-start snap-always h-screen relative\\"\\r\\n\\tuse:actions.inView={{ bottom: 100, top: 100 }}\\r\\n\\ton:enter={animateElements}\\r\\n>\\r\\n\\t<NavigationBtn\\r\\n\\t\\ticon=\\"i-fa6-solid-arrow-left\\"\\r\\n\\t\\tclass=\\"prev-btn\\"\\r\\n\\t\\ton:click={() => swiper?.slidePrev()}\\r\\n\\t/>\\r\\n\\t<swiper-container\\r\\n\\t\\tid=\\"accesoriesSlider\\"\\r\\n\\t\\tclass=\\"min-h-screen w-full top-0\\"\\r\\n\\t\\tslides-per-view={1}\\r\\n\\t\\tspace-between={spaceBetween}\\r\\n\\t\\tcentered-slides={true}\\r\\n\\t\\tnavigation={{\\r\\n\\t\\t\\tenabled: false,\\r\\n\\t\\t\\tnextEl: '.accesories-next-btn',\\r\\n\\t\\t\\tprevEl: '.accesories-prev-btn',\\r\\n\\t\\t\\tdisabledClass: 'opacity-50'\\r\\n\\t\\t}}\\r\\n\\t\\tpagination={{}}\\r\\n\\t\\tbreakpoints={{\\r\\n\\t\\t\\t1024: {\\r\\n\\t\\t\\t\\tpagination: false,\\r\\n\\t\\t\\t\\tnavigation: true\\r\\n\\t\\t\\t}\\r\\n\\t\\t}}\\r\\n\\t\\ton:swiperslidechange={onSlideChange}\\r\\n\\t>\\r\\n\\t\\t{#each carousel.accesories as accesory (accesory.name)}\\r\\n\\t\\t\\t<swiper-slide\\r\\n\\t\\t\\t\\tclass=\\"min-h-screen min-w-full bg-center bg-cover flex flex-col justify-center\\"\\r\\n\\t\\t\\t\\tstyle=\\"background-image: url({accesory.image})\\"\\r\\n\\t\\t\\t>\\r\\n\\t\\t\\t\\t{#if accesory.logo}\\r\\n\\t\\t\\t\\t\\t<img\\r\\n\\t\\t\\t\\t\\t\\tid=\\"sliderBanner\\"\\r\\n\\t\\t\\t\\t\\t\\tclass=\\"p-8 rounded-md w-63 md:w-81 self-center\\"\\r\\n\\t\\t\\t\\t\\t\\tsrc={accesory.logo}\\r\\n\\t\\t\\t\\t\\t\\talt={accesory.name}\\r\\n\\t\\t\\t\\t\\t/>\\r\\n\\t\\t\\t\\t{/if}\\r\\n\\t\\t\\t</swiper-slide>\\r\\n\\t\\t{/each}\\r\\n\\t</swiper-container>\\r\\n\\r\\n\\t<NavigationBtn\\r\\n\\t\\ticon=\\"i-fa6-solid-arrow-right\\"\\r\\n\\t\\tclass=\\"accesories-next-btn\\"\\r\\n\\t\\tposition=\\"right\\"\\r\\n\\t\\ton:click={() => swiper?.slideNext()}\\r\\n\\t/>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n\\tswiper-container::part(pagination) {\\r\\n\\t\\t--swiper-pagination-bottom: 15vh;\\r\\n\\t\\t--swiper-pagination-color: #fff;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAsFC,+BAAgB,OAAO,UAAU,CAAE,CAClC,0BAA0B,CAAE,IAAI,CAChC,yBAAyB,CAAE,IAC5B"}`
};
const spaceBetween = 10;
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_elementColors;
  $$unsubscribe_elementColors = subscribe(elementColors, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_elementColors();
  return `<section class="snap-start snap-always h-screen relative">${validate_component(NavigationBtn, "NavigationBtn").$$render(
    $$result,
    {
      icon: "i-fa6-solid-arrow-left",
      class: "prev-btn"
    },
    {},
    {}
  )} <swiper-container id="accesoriesSlider" class="min-h-screen w-full top-0 svelte-1j7z3iw"${add_attribute("slides-per-view", 1, 0)}${add_attribute("space-between", spaceBetween, 0)}${add_attribute("centered-slides", true, 0)}${add_attribute(
    "navigation",
    {
      enabled: false,
      nextEl: ".accesories-next-btn",
      prevEl: ".accesories-prev-btn",
      disabledClass: "opacity-50"
    },
    0
  )}${add_attribute("pagination", {}, 0)}${add_attribute(
    "breakpoints",
    {
      1024: { pagination: false, navigation: true }
    },
    0
  )}>${each(carousel.accesories, (accesory) => {
    return `<swiper-slide class="min-h-screen min-w-full bg-center bg-cover flex flex-col justify-center" style="${"background-image: url(" + escape(accesory.image, true) + ")"}">${accesory.logo ? `<img id="sliderBanner" class="p-8 rounded-md w-63 md:w-81 self-center"${add_attribute("src", accesory.logo, 0)}${add_attribute("alt", accesory.name, 0)}>` : ``} </swiper-slide>`;
  })}</swiper-container> ${validate_component(NavigationBtn, "NavigationBtn").$$render(
    $$result,
    {
      icon: "i-fa6-solid-arrow-right",
      class: "accesories-next-btn",
      position: "right"
    },
    {},
    {}
  )} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-17cqqex_START -->${$$result.title = `<title>${escape(data.content.title)}</title>`, ""}<!-- HEAD_svelte-17cqqex_END -->`, ""} ${validate_component(Main, "Main").$$render($$result, {}, {}, {})} <div class="lg:flex">${validate_component(FeaturedMessage, "FeaturedMessage").$$render($$result, { class: "lg:w-1/2" }, {}, {})} ${validate_component(Brands, "Brands").$$render($$result, { class: "lg:w-1/2" }, {}, {})}</div> ${validate_component(Slider, "Slider").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
