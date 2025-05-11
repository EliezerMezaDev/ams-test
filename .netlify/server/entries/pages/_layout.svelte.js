import { s as subscribe, a as set_store_value } from "../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, b as each } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { s as setClientSession, e as extractSession } from "../../chunks/session.js";
import "../../chunks/index.js";
import { e as elementColors, i as isOpen, s as scrollY, a as isDesktop } from "../../chunks/store.js";
import { timeline, animate, stagger } from "motion";
import "../../chunks/client.js";
import { register } from "swiper/element/bundle";
const AmsLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let src;
  let $elementColors, $$unsubscribe_elementColors;
  $$unsubscribe_elementColors = subscribe(elementColors, (value) => $elementColors = value);
  src = $elementColors.logo === "light" ? "/ams-light.svg" : "/ams-dark.svg";
  $$unsubscribe_elementColors();
  return `<a href="/"><picture class="z-10"><img${add_attribute("src", src, 0)} alt="AMS Logo" class="drop-shadow-sm drop-shadow-color-#000"></picture></a>`;
});
const css = {
  code: "svg.svelte-1nyggo8{-webkit-perspective:800px;perspective:800px}",
  map: '{"version":3,"file":"BurgerMenu.svelte","sources":["BurgerMenu.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { isOpen, elementColors } from \\"$lib/store\\";\\nimport { timeline } from \\"motion\\";\\nfunction animationOpen() {\\n  return timeline([\\"burg\\", [\\".top\\", {\\n    y: -9,\\n    transformOrigin: \\"50% 50%\\"\\n  }, {\\n    duration: 0.5,\\n    easing: \\"ease-in\\",\\n    at: \\"burg\\"\\n  }], [\\".mid\\", {\\n    scale: 0.1,\\n    transformOrigin: \\"50% 50%\\"\\n  }, {\\n    duration: 0.5,\\n    easing: \\"ease-in\\",\\n    at: \\"burg\\"\\n  }], [\\".bot\\", {\\n    y: 9,\\n    transformOrigin: \\"50% 50%\\"\\n  }, {\\n    duration: 0.5,\\n    easing: \\"ease-in\\",\\n    at: \\"burg\\"\\n  }], \\"rotate\\", [\\".top\\", {\\n    y: 4\\n  }, {\\n    duration: 0.2,\\n    easing: \\"ease-in\\",\\n    at: \\"rotate\\"\\n  }], [\\".bot\\", {\\n    y: -4\\n  }, {\\n    duration: 0.2,\\n    easing: \\"ease-in\\",\\n    at: \\"rotate\\"\\n  }], [\\".top\\", {\\n    rotateZ: 45,\\n    transformOrigin: \\"50% 50%\\"\\n  }, {\\n    duration: 0.5,\\n    easing: \\"ease-in\\",\\n    at: \\"rotate\\"\\n  }], [\\".bot\\", {\\n    rotateZ: -45,\\n    transformOrigin: \\"50% 50%\\"\\n  }, {\\n    duration: 0.5,\\n    easing: \\"ease-in\\",\\n    at: \\"rotate\\"\\n  }]], {\\n    duration: 0.5\\n  });\\n}\\nfunction animationClose() {\\n  return timeline([\\"rotate\\", [\\".top\\", {\\n    y: 0\\n  }, {\\n    duration: 0.2,\\n    easing: \\"ease-in\\",\\n    at: \\"rotate\\"\\n  }], [\\".bot\\", {\\n    y: 0\\n  }, {\\n    duration: 0.2,\\n    easing: \\"ease-in\\",\\n    at: \\"rotate\\"\\n  }], [\\".top\\", {\\n    rotateZ: 0,\\n    transformOrigin: \\"50% 50%\\"\\n  }, {\\n    duration: 0.5,\\n    easing: \\"ease-in\\",\\n    at: \\"rotate\\"\\n  }], [\\".bot\\", {\\n    rotateZ: 0,\\n    transformOrigin: \\"50% 50%\\"\\n  }, {\\n    duration: 0.5,\\n    easing: \\"ease-in\\",\\n    at: \\"rotate\\"\\n  }], \\"burg\\", [\\".top\\", {\\n    y: 0,\\n    transformOrigin: \\"50% 50%\\"\\n  }, {\\n    duration: 0.5,\\n    easing: \\"ease-in\\",\\n    at: \\"burg\\"\\n  }], [\\".mid\\", {\\n    scale: [1.1, 1],\\n    opacity: [0.1, 1],\\n    x: [-20, 0]\\n  }, {\\n    duration: 0.2,\\n    easing: \\"ease-in\\",\\n    at: \\"burg\\"\\n  }], [\\".bot\\", {\\n    y: 0,\\n    transformOrigin: \\"50% 50%\\"\\n  }, {\\n    duration: 0.5,\\n    easing: \\"ease-in\\",\\n    at: \\"burg\\"\\n  }]], {\\n    duration: 0.5\\n  });\\n}\\nconst colors = {\\n  light: \\"#ddd\\",\\n  dark: \\"#003B49\\"\\n};\\n$:\\n  $isOpen ? animationOpen() : animationClose();\\n$:\\n  color = $isOpen ? \\"white\\" : colors[$elementColors.burger];\\n<\/script>\\r\\n\\r\\n<button class=\\"z-99\\" on:click={() => ($isOpen = !$isOpen)}>\\r\\n\\t<svg\\r\\n\\t\\tid=\\"burger\\"\\r\\n\\t\\twidth=\\"30\\"\\r\\n\\t\\tclass=\\"openmenu\\"\\r\\n\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n\\t\\tviewBox=\\"0 0 30 30\\"\\r\\n\\t\\tfill={color}\\r\\n\\t>\\r\\n\\t\\t<path class=\\"top\\" d=\\"M0 9h30v2H0z\\" />\\r\\n\\t\\t<line\\r\\n\\t\\t\\tclass=\\"mid\\"\\r\\n\\t\\t\\tx1=\\"0\\"\\r\\n\\t\\t\\ty1=\\"15\\"\\r\\n\\t\\t\\tx2=\\"30\\"\\r\\n\\t\\t\\ty2=\\"15\\"\\r\\n\\t\\t\\tstroke={color}\\r\\n\\t\\t\\tfill=\\"none\\"\\r\\n\\t\\t\\tstroke-width=\\"2\\"\\r\\n\\t\\t\\tvector-effect=\\"non-scaling-stroke\\"\\r\\n\\t\\t/>\\r\\n\\t\\t<path class=\\"bot\\" d=\\"M0 19h30v2H0z\\" />\\r\\n\\t</svg>\\r\\n</button>\\r\\n\\r\\n<style>\\r\\n\\tsvg {\\r\\n\\t\\t/* margin:55px; */\\r\\n\\t\\t-webkit-perspective: 800px;\\r\\n\\t\\tperspective: 800px;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA+IC,kBAAI,CAEH,mBAAmB,CAAE,KAAK,CAC1B,WAAW,CAAE,KACd"}'
};
const BurgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let color;
  let $elementColors, $$unsubscribe_elementColors;
  let $isOpen, $$unsubscribe_isOpen;
  $$unsubscribe_elementColors = subscribe(elementColors, (value) => $elementColors = value);
  $$unsubscribe_isOpen = subscribe(isOpen, (value) => $isOpen = value);
  function animationOpen() {
    return timeline(
      [
        "burg",
        [
          ".top",
          { y: -9, transformOrigin: "50% 50%" },
          {
            duration: 0.5,
            easing: "ease-in",
            at: "burg"
          }
        ],
        [
          ".mid",
          { scale: 0.1, transformOrigin: "50% 50%" },
          {
            duration: 0.5,
            easing: "ease-in",
            at: "burg"
          }
        ],
        [
          ".bot",
          { y: 9, transformOrigin: "50% 50%" },
          {
            duration: 0.5,
            easing: "ease-in",
            at: "burg"
          }
        ],
        "rotate",
        [
          ".top",
          { y: 4 },
          {
            duration: 0.2,
            easing: "ease-in",
            at: "rotate"
          }
        ],
        [
          ".bot",
          { y: -4 },
          {
            duration: 0.2,
            easing: "ease-in",
            at: "rotate"
          }
        ],
        [
          ".top",
          { rotateZ: 45, transformOrigin: "50% 50%" },
          {
            duration: 0.5,
            easing: "ease-in",
            at: "rotate"
          }
        ],
        [
          ".bot",
          { rotateZ: -45, transformOrigin: "50% 50%" },
          {
            duration: 0.5,
            easing: "ease-in",
            at: "rotate"
          }
        ]
      ],
      { duration: 0.5 }
    );
  }
  function animationClose() {
    return timeline(
      [
        "rotate",
        [
          ".top",
          { y: 0 },
          {
            duration: 0.2,
            easing: "ease-in",
            at: "rotate"
          }
        ],
        [
          ".bot",
          { y: 0 },
          {
            duration: 0.2,
            easing: "ease-in",
            at: "rotate"
          }
        ],
        [
          ".top",
          { rotateZ: 0, transformOrigin: "50% 50%" },
          {
            duration: 0.5,
            easing: "ease-in",
            at: "rotate"
          }
        ],
        [
          ".bot",
          { rotateZ: 0, transformOrigin: "50% 50%" },
          {
            duration: 0.5,
            easing: "ease-in",
            at: "rotate"
          }
        ],
        "burg",
        [
          ".top",
          { y: 0, transformOrigin: "50% 50%" },
          {
            duration: 0.5,
            easing: "ease-in",
            at: "burg"
          }
        ],
        [
          ".mid",
          {
            scale: [1.1, 1],
            opacity: [0.1, 1],
            x: [-20, 0]
          },
          {
            duration: 0.2,
            easing: "ease-in",
            at: "burg"
          }
        ],
        [
          ".bot",
          { y: 0, transformOrigin: "50% 50%" },
          {
            duration: 0.5,
            easing: "ease-in",
            at: "burg"
          }
        ]
      ],
      { duration: 0.5 }
    );
  }
  const colors = { light: "#ddd", dark: "#003B49" };
  $$result.css.add(css);
  {
    $isOpen ? animationOpen() : animationClose();
  }
  color = $isOpen ? "white" : colors[$elementColors.burger];
  $$unsubscribe_elementColors();
  $$unsubscribe_isOpen();
  return `<button class="z-99"><svg id="burger" width="30" class="openmenu svelte-1nyggo8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"${add_attribute("fill", color, 0)}><path class="top" d="M0 9h30v2H0z"></path><line class="mid" x1="0" y1="15" x2="30" y2="15"${add_attribute("stroke", color, 0)} fill="none" stroke-width="2" vector-effect="non-scaling-stroke"></line><path class="bot" d="M0 19h30v2H0z"></path></svg> </button>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $scrollY, $$unsubscribe_scrollY;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  let sticky = false;
  {
    {
      if ($scrollY > 100 && $page.url.pathname.includes("productos")) sticky = true;
      else sticky = false;
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_scrollY();
  return `<header class="${"flex items-center justify-between z-99 p-6 fixed " + escape(sticky ? "bg-#003B49" : "bg-transparent", true) + " top-0 w-full transition ease lg:p-12 lg:px-16"}">${validate_component(AmsLogo, "AmsLogo").$$render($$result, {}, {}, {})} ${validate_component(BurgerMenu, "BurgerMenu").$$render($$result, {}, {}, {})}</header>`;
});
const NovanetLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let color;
  let { class: classname = "" } = $$props;
  let { isDark = false } = $$props;
  let { width = 53 } = $$props;
  let { height = 13 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && classname !== void 0) $$bindings.class(classname);
  if ($$props.isDark === void 0 && $$bindings.isDark && isDark !== void 0) $$bindings.isDark(isDark);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  color = isDark ? "#1E1E1E" : "white";
  return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="0 0 53 13" fill="none" xmlns="http://www.w3.org/2000/svg"${add_attribute("class", classname, 0)}><g clip-path="url(#clip0_197_991)"><path d="M8.86426 6.50977C7.29035 6.50977 6.02734 7.76712 6.02734 9.33398C6.02734 10.9008 7.29035 12.1582 8.86426 12.1582C10.4382 12.1582 11.7012 10.9008 11.7012 9.33398C11.7012 7.76712 10.4382 6.50977 8.86426 6.50977ZM8.86426 10.2045C8.32019 10.2045 7.91214 9.79823 7.91214 9.2566C7.91214 8.71497 8.32019 8.30875 8.86426 8.30875C9.40832 8.30875 9.81637 8.71497 9.81637 9.2566C9.79694 9.81758 9.38889 10.2045 8.86426 10.2045Z" fill="#099BC3"></path><path d="M8.86426 0.00195312C7.29035 0.00195312 6.02734 1.25931 6.02734 2.82617C6.02734 4.39303 7.29035 5.65038 8.86426 5.65038C10.4382 5.65038 11.7012 4.39303 11.7012 2.82617C11.6817 1.25931 10.4382 0.00195312 8.86426 0.00195312ZM8.86426 3.71599C8.32019 3.71599 7.91214 3.30977 7.91214 2.76814C7.91214 2.22651 8.32019 1.82028 8.86426 1.82028C9.40832 1.82028 9.81637 2.22651 9.81637 2.76814C9.81637 3.30977 9.38889 3.71599 8.86426 3.71599Z" fill="#099BC3"></path><path d="M3.24902 3.21191C1.67512 3.21191 0.412109 4.46927 0.412109 6.03613C0.412109 7.60299 1.67512 8.86034 3.24902 8.86034C4.82292 8.86034 6.08593 7.60299 6.08593 6.03613C6.08593 4.46927 4.82292 3.21191 3.24902 3.21191ZM3.24902 6.92595C2.70496 6.92595 2.29691 6.51973 2.29691 5.9781C2.29691 5.43647 2.70496 5.03025 3.24902 5.03025C3.79309 5.03025 4.20114 5.43647 4.20114 5.9781C4.1817 6.53907 3.77365 6.92595 3.24902 6.92595Z" fill="#099BC3"></path><path d="M18.2668 6.52069C18.2668 4.97318 17.0038 3.71582 15.4493 3.71582H14.4778V4.4122C14.3806 4.00598 14.0114 3.71582 13.5645 3.71582C13.0399 3.71582 12.6318 4.14139 12.6318 4.64433V6.52069V8.39705C12.6318 8.91934 13.0593 9.32556 13.5645 9.32556C14.0892 9.32556 14.4972 8.89999 14.4972 8.39705V6.52069C14.4972 5.9984 14.9247 5.59218 15.4299 5.59218C15.9545 5.59218 16.3626 6.01775 16.3626 6.52069V8.39705C16.3626 8.91934 16.79 9.32556 17.2953 9.32556C17.8199 9.32556 18.2279 8.89999 18.2279 8.39705L18.2668 6.52069Z"${add_attribute("fill", color, 0)}></path><path d="M42.2834 6.52069C42.2834 4.97318 41.0204 3.71582 39.4659 3.71582H38.4944V4.4122C38.3972 4.00598 38.028 3.71582 37.5811 3.71582C37.0565 3.71582 36.6484 4.14139 36.6484 4.64433V6.52069V8.39705C36.6484 8.91934 37.0759 9.32556 37.5811 9.32556C38.1058 9.32556 38.5138 8.89999 38.5138 8.39705V6.52069C38.5138 5.9984 38.9413 5.59218 39.4465 5.59218C39.9711 5.59218 40.3792 6.01775 40.3792 6.52069V8.39705C40.3792 8.91934 40.8067 9.32556 41.3119 9.32556C41.8365 9.32556 42.2445 8.89999 42.2445 8.39705L42.2834 6.52069Z"${add_attribute("fill", color, 0)}></path><path d="M47.549 7.46775L48.4816 6.53924C48.4816 4.99173 47.2186 3.73438 45.6642 3.73438C44.1097 3.73438 42.8467 4.99173 42.8467 6.53924C42.8467 8.08676 44.1097 9.34411 45.6642 9.34411H47.549C48.0736 9.34411 48.4816 8.91855 48.4816 8.41561C48.4816 7.91266 48.0736 7.46775 47.549 7.46775ZM45.2367 7.35169C44.9258 7.19694 44.7315 6.88744 44.7315 6.5199C44.7315 5.99761 45.159 5.59139 45.6642 5.59139C46.0333 5.59139 46.3442 5.80418 46.4997 6.09433L45.2367 7.35169Z"${add_attribute("fill", color, 0)}></path><path d="M29.7115 3.81223C29.2451 3.5801 28.6816 3.77354 28.4485 4.23779L27.4186 6.30759L26.3694 4.23779C26.1362 3.77354 25.5727 3.5801 25.1064 3.81223C24.64 4.04435 24.4457 4.60533 24.6789 5.06958L26.5248 8.74493C26.6997 9.09312 26.9523 9.32525 27.3992 9.32525C27.8267 9.32525 28.0987 9.05443 28.2736 8.74493L30.1195 5.06958C30.3721 4.60533 30.1778 4.04435 29.7115 3.81223Z"${add_attribute("fill", color, 0)}></path><path d="M21.6476 3.71582C20.0931 3.71582 18.8301 4.97318 18.8301 6.52069C18.8301 8.0682 20.0931 9.32556 21.6476 9.32556C23.202 9.32556 24.465 8.0682 24.465 6.52069C24.465 4.97318 23.202 3.71582 21.6476 3.71582ZM21.6476 7.46854C21.1229 7.46854 20.7149 7.04298 20.7149 6.54003C20.7149 6.03709 21.1424 5.61153 21.6476 5.61153C22.1722 5.61153 22.5802 6.03709 22.5802 6.54003C22.5802 7.04298 22.1722 7.46854 21.6476 7.46854Z"${add_attribute("fill", color, 0)}></path><path d="M33.1496 7.46854C32.625 7.46854 32.2169 7.04298 32.2169 6.54003C32.2169 6.01775 32.6444 5.61153 33.1496 5.61153C33.6742 5.61153 34.0823 6.03709 34.0823 6.54003C34.1017 7.04298 33.6742 7.46854 33.1496 7.46854ZM35.9865 6.52069C35.9865 4.97318 34.7235 3.71582 33.169 3.71582C31.6146 3.71582 30.3516 4.97318 30.3516 6.52069C30.3516 8.0682 31.6146 9.32556 33.169 9.32556H34.1406V8.62918C34.2377 9.0354 34.6069 9.32556 35.0538 9.32556C35.5785 9.32556 35.9865 8.89999 35.9865 8.39705V6.52069Z"${add_attribute("fill", color, 0)}></path><path d="M50.9884 8.39733C50.9884 8.91961 50.5609 9.32584 50.0557 9.32584C49.5311 9.32584 49.123 8.90027 49.123 8.39733V2.55546C49.123 2.03318 49.5505 1.62695 50.0557 1.62695C50.5804 1.62695 50.9884 2.05252 50.9884 2.55546V3.7161H51.9211C52.4457 3.7161 52.8538 4.14166 52.8538 4.64461C52.8538 5.16689 52.4263 5.57311 51.9211 5.57311C51.3965 5.57311 50.9884 5.99868 50.9884 6.50162V8.39733Z"${add_attribute("fill", color, 0)}></path></g><defs><clipPath id="clip0_197_991"><rect width="52.4634" height="12.1286" fill="white" transform="translate(0.408203)"></rect></clipPath></defs></svg>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLight;
  let $page, $$unsubscribe_page;
  let $isDesktop, $$unsubscribe_isDesktop;
  let $isOpen, $$unsubscribe_isOpen;
  let $elementColors, $$unsubscribe_elementColors;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_isDesktop = subscribe(isDesktop, (value) => $isDesktop = value);
  $$unsubscribe_isOpen = subscribe(isOpen, (value) => $isOpen = value);
  $$unsubscribe_elementColors = subscribe(elementColors, (value) => $elementColors = value);
  set_store_value(isDesktop, $isDesktop = window.matchMedia("(min-width: 1024px)").matches, $isDesktop);
  isLight = $elementColors.copyright === "light" || $isOpen || $isDesktop && $page.url.pathname === "/";
  $$unsubscribe_page();
  $$unsubscribe_isDesktop();
  $$unsubscribe_isOpen();
  $$unsubscribe_elementColors();
  return `<footer class="flex justify-between items-center fixed bottom-6 w-full z-10 px-8 lg:px-16"><section class="flex gap-2 items-center"><p class="${"text-xs " + escape(isLight ? "text-white" : "text-[#55555A]", true) + " md:text-sm"}">Sitio hecho por</p> ${validate_component(NovanetLogo, "NovanetLogo").$$render(
    $$result,
    {
      height: 24,
      class: "w-18 p-0 m-0 md:w-24",
      isDark: !isLight
    },
    {},
    {}
  )}</section> <section class="flex gap-2 md:gap-4" data-svelte-h="svelte-1sd5hub"> <button class="w-8 h-8 rounded-full bg-[#E3D268] text-[#003B49] flex items-center justify-center md:w-10 md:h-10"><a href="https://www.instagram.com/avilamultisport/" target="_blank"><div class="i-fa6-brands-instagram text-lg"></div></a></button></section></footer>`;
});
const ADDITIONAL_OFFSET = 13;
function disableScroll() {
  document.body.style.overflow = "hidden";
  document.body.style.userSelect = "none";
}
function enableScroll() {
  document.body.style.overflow = "auto";
  document.body.style.userSelect = "auto";
}
function moveMarker(offset) {
  const marker = document.querySelector(".marker");
  marker.style.top = `${offset}px`;
}
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let current;
  let $isOpen, $$unsubscribe_isOpen;
  let $page, $$unsubscribe_page;
  $$unsubscribe_isOpen = subscribe(isOpen, (value) => $isOpen = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const getActiveOffset = (item) => item.offsetTop + ADDITIONAL_OFFSET;
  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Productos", path: "/productos" },
    { name: "Coaches", path: "/coaches" },
    { name: "Contacto", path: "/contacto" }
  ];
  {
    if ($isOpen) {
      animate(".link", { x: [-200, 0], opacity: [0, 1] }, {
        delay: stagger(0.1),
        duration: 0.2,
        easing: [0.22, 0.03, 0.26, 0.1]
      });
    }
  }
  {
    $isOpen ? disableScroll() : enableScroll();
  }
  current = $page.url.pathname;
  {
    if ($isOpen) {
      const item = menuItems.find((el) => {
        if (el.path === current) {
          return el;
        }
        if (current.includes("productos") && el.path === "/productos") {
          return el;
        }
      });
      const element = document.querySelector(`a[href="${item?.path}"]`);
      moveMarker(getActiveOffset(element));
    }
  }
  $$unsubscribe_isOpen();
  $$unsubscribe_page();
  return `<menu class="${[
    "fixed w-full min-h-screen bg-[#003B49] text-white shadow-lg top-0 bottom-0 z-10 max-h-screen overflow-hidden min-h-screen transition transition-right ease-in-out lg:transition-right lg:w-25% " + escape($isOpen ? "right-0" : "-right-full", true),
    $isOpen ? "open" : ""
  ].join(" ").trim()}"><nav class="p-12 text-2xl flex flex-col gap-4 items-center mt-24 relative lg:pr-20 lg:items-end">${each(menuItems, (item) => {
    return `<a class="${"link block " + escape(
      current === item.path ? "text-#e3d268" : current.includes("productos") && item.path === "/productos" && "text-#e3d268",
      true
    )}"${add_attribute("href", item.path, 0)}>${escape(item.name)}</a>`;
  })} <div class="marker w-2 h-2 rounded-full bg-#e3d268 absolute top-10 right-15 transition transition-top animate-pulse hidden lg:block"></div></nav></menu>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_scrollY;
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => value);
  register();
  page.subscribe((val) => {
    setClientSession(extractSession(val.data));
  });
  $$unsubscribe_scrollY();
  return `  <div class="font-primary">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})} <main class="h-screen overflow-y-scroll snap-y snap-mandatory">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
