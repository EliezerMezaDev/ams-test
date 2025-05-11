import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, e as escape, b as each } from "../../../chunks/ssr.js";
import { e as elementColors } from "../../../chunks/store.js";
const coachesBanner = "/_app/immutable/assets/avila-multisports-coaches-ciclistas-recorriendo-ruta-velocidad-banner.C23vuyub.webp";
const CarolinaAvatar = "/_app/immutable/assets/avila-multisports-coaches-carolina-lairet.D4C6OImQ.webp";
const SalvatoreAvatar = "/_app/immutable/assets/avila-multisports-coaches-salvatore-cali.DPD1oOo9.webp";
const FedericoAvatar = "/_app/immutable/assets/avila-multisports-coaches-federico-pisani.BNtlYtsV.webp";
const coaches = [{
  name: "Carolina Lairet",
  avatar: CarolinaAvatar,
  speciality: "Natacion",
  instagramProfile: "https://www.instagram.com/nutricioncaro/",
  shortBio: "Carolina Lairet es una Nutricionista graduada en la Universidad Central de Venezuela, con una Especialización en Nutrición Clínica de la Universidad Simón Bolívar y un Máster en Nutrición Humana de la Universidad de Barcelona. Además, ha realizado cursos especializados en Nutrición Deportiva con el profesor Francis Holway del Comité Olímpico Internacional, en la Federación Mexicana de Nutrición Deportiva, el Curso ISAK nivel 1 de Antropometría, y en Cálculos en Deportistas con Eureka Nutrición."
}, {
  name: "Salvatore Cali",
  avatar: SalvatoreAvatar,
  speciality: "Ciclismo",
  instagramProfile: "https://www.instagram.com/salvadorcali/",
  shortBio: "Salvatore Cali es un entrenador de triatlón con casi 30 años de experiencia en la formación de atletas en natación, ciclismo y carrera. Es director del Centro Deportivo Ccs Multisport y Ávila Multisport, donde impulsa el desarrollo deportivo en Venezuela. Ha participado en competencias internacionales, logrando destacadas marcas. Además, ha liderado programas innovadores en natación infantil y rehabilitación. Su enfoque combina educación física, psicología y entrenamiento de alto rendimiento. Su trayectoria lo posiciona como un referente en el mundo del triatlón."
}, {
  name: "Federico Pisani",
  avatar: FedericoAvatar,
  speciality: "Fortalecimiento",
  instagramProfile: "https://www.instagram.com/fuconei/",
  shortBio: "Biólogo con sólidos conocimientos sobre la biodiversidad venezolana. Escalador de Big Wall con 30 años de experiencia y entrenador actual del equipo venezolano de escalada deportiva. \n \n \n Guía de Tirika Expeditions / Entrenador / Fisiólogo del Ejercicio / Escalador de Aventura."
}];
function getColors(index) {
  const colors = {
    0: {
      li: "bg-#93B7BB border-#93B7BB",
      path: "bg-#93B7BB"
    },
    1: {
      li: "bg-#ACC37E border-#ACC37E",
      path: "bg-#ACC37E"
    },
    2: {
      li: "bg-#E3D268 border-#E3D268",
      path: "bg-#E3D268"
    }
  };
  return colors[index] || colors[0];
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_elementColors;
  $$unsubscribe_elementColors = subscribe(elementColors, (value) => value);
  let { data } = $$props;
  const info = {
    title: data.content.topics[0].title,
    content: data.content.topics[0].description
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_elementColors();
  return `<section id="coaches" class="bg-#003B49 flex flex-col items-center pt-14 lg:pt-18"><div class="w-full" data-svelte-h="svelte-5c8vui"><div id="top" class="w-full h-10 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] bg-#93B7BB lg:h-80px"></div> <div class="w-full h-36 relative overflow-hidden lg:h-300px"><div id="middle" class="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-#93B7BB/50 gap-2 z-2"><h4 id="name" class="text-#003B49 font-bold text-2xl md:text-3xl lg:text-4xl">Coaches</h4></div> <img id="image" class="md:min-w-full min-h-full object-cover object-center"${add_attribute("src", coachesBanner, 0)} alt="Coaches banner"></div> <div id="bottom" class="bottom-0 left-0 w-full h-10 [clip-path:polygon(32%_60%,_0_0,_100%_0)] bg-#93B7BB lg:h-80px"></div></div> <p class="hidden">${escape(info.content)}</p> <div class="-mt-12 bg-#fff w-full min-h-full md:px-12 lg:-mt-20"><ul class="px-12 pt-45 mb-18 pb-12 flex flex-col gap-40 min-h-screen md:mt-40 md:gap-70 lg:flex-row lg:min-h-full lg:justify-center lg:mx-auto lg:mb-0 lg:pt-10 lg:mb-24 lg:gap-6 lg:px-0">${each(coaches, (coach, index) => {
    return `<li class="${"p-6 flex-1 md:mx-auto relative border md:p-16 lg:last:mx-0 lg:p-8 lg:pt-12 lg:pb-12 " + escape(getColors(index).li, true)}"><div id="coachesTop" class="${"w-full absolute left-0 -top-65px h-16 [clip-path:polygon(0%_100%,_100%_100%,_73.49%_50.75%)] md:[clip-path:polygon(0%_100%,_100%_100%,_73.49%_0%)] lg:h-80px lg:-top-81px lg:[clip-path:polygon(0%_100%,_100%_100%,_80.35%_35%)] " + escape(getColors(index).path, true)}"></div> <div class="absolute flex justify-center left-0 right-0 -top-100px md:-top-180px lg:-top-8.5rem" data-svelte-h="svelte-firtb1"><img class="max-w-128px md:max-w-14rem lg:max-w-12rem"${add_attribute("src", coach.avatar, 0)}${add_attribute("alt", coach.name, 0)}></div> <div class="flex justify-center"><a${add_attribute("href", coach.instagramProfile, 0)} target="_blank" class="flex items-center gap-2 text-2xl text-#55555A hover:text-#47474d"><h4 class="text-center font-bold mt-4 text-xl md:text-3xl">${escape(coach.name)}</h4> <div class="i-fa6-brands-instagram mt-4"></div> </a></div> <div class="text-#55555A font-700 text-sm text-center md:text-base">Especialidad: <span class="text-sm font-300 md:text-base">${escape(coach.speciality)}</span></div> <p class="text-pretty text-#55555A text-sm mt-2 md:text-base md:mt-4">${escape(coach.shortBio)}</p> <div id="coachesBottom" class="${"absolute -bottom-48px left-0 w-full h-12 [clip-path:polygon(32%_60%,_0_0,_100%_0)] md:[clip-path:polygon(14%_97%,_0_0,_100%_0)] lg:h-80px lg:-bottom-81px lg:[clip-path:polygon(18%_50%,_0_0,_100%_0)] " + escape(getColors(index).path, true)}"></div> </li>`;
  })}</ul></div></section>`;
});
export {
  Page as default
};
