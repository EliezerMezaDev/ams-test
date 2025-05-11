import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { a as isDesktop, e as elementColors } from "../../../chunks/store.js";
const EMAIL_TARGET = "info@avilamultisport.com";
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isDesktop;
  $$unsubscribe_isDesktop = subscribe(isDesktop, (value) => value);
  let formElement;
  function isMobileDevice() {
    return false;
  }
  function getEmailLink() {
    const subject = encodeURIComponent("CONTACTO DESDE FORMULARIO - AVILA MULTISPORT");
    if (isMobileDevice()) {
      return `mailto:${EMAIL_TARGET}?subject=${subject}`;
    }
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_TARGET}&su=${subject}`;
  }
  $$unsubscribe_isDesktop();
  return `<section id="contact" class="w-full h-screen snap-start relative"><div class="p-8 pt-24 bg-#003B49 h-94vh md:pt-32 md:p-12 lg:pl-16"><h3 class="mb-4 text-2xl text-#E3D268 md:text-4xl" data-svelte-h="svelte-7yzsx8">Contáctanos</h3> <form class="flex flex-col gap-4 md:gap-4 md:mt-8" name="contact-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"${add_attribute("this", formElement, 0)}><input type="hidden" name="form-name" value="contact-form"> <p class="hidden" data-svelte-h="svelte-1kzyknv"><label>No llenar si eres humano: <input name="bot-field"></label></p> <div class="flex flex-col gap-4 lg:flex-row"><div class="w-full"><input required class="w-full" type="text" name="name" placeholder="Nombre"${add_attribute("aria-invalid", void 0, 0)}${add_attribute("aria-describedby", void 0, 0)}> ${``}</div> <div class="w-full"><input required class="w-full" type="text" name="lastname" placeholder="Apellido"${add_attribute("aria-invalid", void 0, 0)}${add_attribute("aria-describedby", void 0, 0)}> ${``}</div></div> <div class="flex flex-col gap-4 lg:flex-row"><div class="w-full"><input required class="w-full" type="email" name="email" placeholder="Email"${add_attribute("aria-invalid", void 0, 0)}${add_attribute("aria-describedby", void 0, 0)}> ${``}</div> <div class="w-full"><input required class="w-full" type="tel" name="phone" placeholder="Teléfono"${add_attribute("aria-invalid", void 0, 0)}${add_attribute("aria-describedby", void 0, 0)}> ${``}</div></div> <div class="w-full"><textarea required class="w-full pt-3 pl-3 resize-none" name="message" rows="4" placeholder="Mensaje"${add_attribute("aria-invalid", void 0, 0)}${add_attribute("aria-describedby", void 0, 0)}></textarea> ${``}</div> ${``} ${``} <button class="self-start bg-#ACC37E py-2 px-12 rounded-full" ${""}>${escape("Enviar")}</button></form> <p id="contact-email" class="mt-4 text-white">O contáctanos directamente
			<a${add_attribute("href", getEmailLink(), 0)} target="_blank" rel="noopener noreferrer" class="text-#E3D268 hover:underline">${escape(EMAIL_TARGET)}</a></p></div></section>`;
});
const ContactMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_elementColors;
  let $$unsubscribe_isDesktop;
  $$unsubscribe_elementColors = subscribe(elementColors, (value) => value);
  $$unsubscribe_isDesktop = subscribe(isDesktop, (value) => value);
  let section;
  $$unsubscribe_elementColors();
  $$unsubscribe_isDesktop();
  return `<section class="w-full h-screen snap-start relative"${add_attribute("this", section, 0)} data-svelte-h="svelte-1a0ioft"><div id="map" class="bg-#003B49 h-84vh lg:h-81.4vh"><iframe class="w-full h-full" title="Mapa de ubicación de Avila Multisport" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31385.916957960602!2d-66.82160975000001!3d10.48176725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1706543997428!5m2!1ses!2sve" style="border:0;" ${""} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div> <div id="mapFill" class="absolute top-0 right-0 bottom-0 [clip-path:polygon(0%_0%,_100%_0%,_100%_88.75%,_0%_83.06%)] bg-#ACC37E w-full -z-1 lg:h-97.2vh"></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_elementColors;
  $$unsubscribe_elementColors = subscribe(elementColors, (value) => value);
  $$unsubscribe_elementColors();
  return `${$$result.head += `<!-- HEAD_svelte-13024i7_START -->${$$result.title = `<title>Contáctanos</title>`, ""}<!-- HEAD_svelte-13024i7_END -->`, ""} <div class="lg:flex lg:flex-row"> ${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})} ${validate_component(ContactMap, "ContactMap").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
