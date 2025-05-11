import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
async function GET({
  url
}) {
  const key = url.searchParams.get("key") ?? "";
  if (!key) {
    error(400, "No key provided");
  }
  const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../content/about.md": () => import("../../../../chunks/about.js"), "../../../content/coaches.md": () => import("../../../../chunks/coaches.js"), "../../../content/home.md": () => import("../../../../chunks/home.js"), "../../../content/products.md": () => import("../../../../chunks/products.js") }), `../../../content/${key}.md`, 5);
  return new Response(JSON.stringify(module.metadata));
}
export {
  GET
};
