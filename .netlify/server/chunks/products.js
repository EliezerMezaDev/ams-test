import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Productos",
  "page_title": "Avila MultiSport - Productos",
  "categories": [
    {
      "name": "Cardio",
      "image": "cardio",
      "banner": "cardioBanner",
      "items": [
        {
          "name": "treadmills",
          "image": "treadmills"
        },
        {
          "name": "elípticas",
          "image": "elipticas"
        },
        {
          "name": "bicicletas",
          "image": "bicicletas"
        }
      ]
    },
    {
      "name": "Fuerza",
      "image": "strength",
      "banner": "strengthBanner",
      "items": [
        { "name": "multi estaciones", "image": "" },
        { "name": "entrenadores", "image": "" },
        { "name": "funcionales", "image": "" },
        {
          "name": "Sistema de entrenamiento grupal",
          "image": ""
        },
        {
          "name": "Banco de almacenaje",
          "image": ""
        }
      ]
    }
  ],
  "products": [
    {
      "name": "wilier",
      "items": [
        {
          "title": "Wilier Filante SLR",
          "image": "bycicle.png",
          "category": "bicicletas",
          "link": ""
        },
        {
          "title": "Wilier 0 SLR",
          "image": "bycicle-2.png",
          "category": "bicicletas",
          "link": ""
        },
        {
          "title": "Wilier 0 SL",
          "image": "bycicle-3.png",
          "category": "bicicletas",
          "link": ""
        },
        {
          "title": "Wilier Turbine Tt/Triathlon Bike",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Wilier 110 FX",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Wilier Jena Gravel",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Wilier Garda",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Wilier Urta Max SLR",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Wilier Usma SLR",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Wilier Rave SLR (Gravel/Road Bike Set Up)",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Wilier Granturismo SLR",
          "image": "",
          "category": "",
          "link": ""
        }
      ]
    },
    {
      "name": "true",
      "items": [
        {
          "title": "Corredora True Performance 100",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Elíptica True Performance 300",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Readmill PS100 True",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Treadmill PS300 True",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Treadmill PS800 True",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Treadmill C650",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Striker slat treadmil",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Performance 300",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "M30",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "ES900",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Indoor cycling bike",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Banco de Almacenaje FS 24-3",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Multi estaciones MP 4.0",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Multi estaciones MP 3.5",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Multi estaciones MP 3.0",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Multi estaciones MP 2.5",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Multi estaciones MP 2.0",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "FS100 Funcional Trainer",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "FXT100 Funcional trainer",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "SM1000 Funcional trainer",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "SM1050 Funcional trainer",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Quickfit",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Sistema de entrenamiento Grupal Atlas",
          "image": "",
          "category": "",
          "link": ""
        }
      ]
    },
    {
      "name": "inspire",
      "items": [
        {
          "title": "Entrenador Multifuncional Inspire FT2",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Multi Gym Inspire M2",
          "image": "",
          "category": "",
          "link": ""
        },
        {
          "title": "Multi Gym Inspire BL1 body lift",
          "image": "",
          "category": "",
          "link": ""
        }
      ]
    }
  ]
};
const { title, page_title, categories, products } = metadata;
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
export {
  Products as default,
  metadata
};
