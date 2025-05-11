import { i as initClient, Q as QueryStore, g as getCurrentConfig } from "../../../chunks/query.js";
import { R as RequestContext } from "../../../chunks/session.js";
const artifact = {
  "name": "Categories",
  "kind": "HoudiniQuery",
  "hash": "0abb0fe8b2314417db7b7605ddd6e02204b5bcc0dc71ab69f14622ad5384f548",
  "raw": `query Categories {
  categories(sort: "id:asc") {
    data {
      id
      attributes {
        name
        image {
          data {
            attributes {
              name
              url
              formats
            }
            id
          }
        }
        subcategorias {
          data {
            attributes {
              name
              image {
                data {
                  attributes {
                    name
                    url
                    formats
                  }
                  id
                }
              }
            }
            id
          }
        }
      }
    }
  }
}
`,
  "rootType": "Query",
  "stripVariables": [],
  "selection": {
    "fields": {
      "categories": {
        "type": "CategoryEntityResponseCollection",
        "keyRaw": 'categories(sort: "id:asc")',
        "nullable": true,
        "selection": {
          "fields": {
            "data": {
              "type": "CategoryEntity",
              "keyRaw": "data",
              "selection": {
                "fields": {
                  "id": {
                    "type": "ID",
                    "keyRaw": "id",
                    "visible": true,
                    "nullable": true
                  },
                  "attributes": {
                    "type": "Category",
                    "keyRaw": "attributes",
                    "nullable": true,
                    "selection": {
                      "fields": {
                        "name": {
                          "type": "String",
                          "keyRaw": "name",
                          "nullable": true,
                          "visible": true
                        },
                        "image": {
                          "type": "UploadFileEntityResponse",
                          "keyRaw": "image",
                          "nullable": true,
                          "selection": {
                            "fields": {
                              "data": {
                                "type": "UploadFileEntity",
                                "keyRaw": "data",
                                "nullable": true,
                                "selection": {
                                  "fields": {
                                    "attributes": {
                                      "type": "UploadFile",
                                      "keyRaw": "attributes",
                                      "nullable": true,
                                      "selection": {
                                        "fields": {
                                          "name": {
                                            "type": "String",
                                            "keyRaw": "name",
                                            "visible": true
                                          },
                                          "url": {
                                            "type": "String",
                                            "keyRaw": "url",
                                            "visible": true
                                          },
                                          "formats": {
                                            "type": "JSON",
                                            "keyRaw": "formats",
                                            "nullable": true,
                                            "visible": true
                                          }
                                        }
                                      },
                                      "visible": true
                                    },
                                    "id": {
                                      "type": "ID",
                                      "keyRaw": "id",
                                      "visible": true,
                                      "nullable": true
                                    }
                                  }
                                },
                                "visible": true
                              }
                            }
                          },
                          "visible": true
                        },
                        "subcategorias": {
                          "type": "SubcategoryRelationResponseCollection",
                          "keyRaw": "subcategorias",
                          "nullable": true,
                          "selection": {
                            "fields": {
                              "data": {
                                "type": "SubcategoryEntity",
                                "keyRaw": "data",
                                "selection": {
                                  "fields": {
                                    "attributes": {
                                      "type": "Subcategory",
                                      "keyRaw": "attributes",
                                      "nullable": true,
                                      "selection": {
                                        "fields": {
                                          "name": {
                                            "type": "String",
                                            "keyRaw": "name",
                                            "nullable": true,
                                            "visible": true
                                          },
                                          "image": {
                                            "type": "UploadFileEntityResponse",
                                            "keyRaw": "image",
                                            "nullable": true,
                                            "selection": {
                                              "fields": {
                                                "data": {
                                                  "type": "UploadFileEntity",
                                                  "keyRaw": "data",
                                                  "nullable": true,
                                                  "selection": {
                                                    "fields": {
                                                      "attributes": {
                                                        "type": "UploadFile",
                                                        "keyRaw": "attributes",
                                                        "nullable": true,
                                                        "selection": {
                                                          "fields": {
                                                            "name": {
                                                              "type": "String",
                                                              "keyRaw": "name",
                                                              "visible": true
                                                            },
                                                            "url": {
                                                              "type": "String",
                                                              "keyRaw": "url",
                                                              "visible": true
                                                            },
                                                            "formats": {
                                                              "type": "JSON",
                                                              "keyRaw": "formats",
                                                              "nullable": true,
                                                              "visible": true
                                                            }
                                                          }
                                                        },
                                                        "visible": true
                                                      },
                                                      "id": {
                                                        "type": "ID",
                                                        "keyRaw": "id",
                                                        "visible": true,
                                                        "nullable": true
                                                      }
                                                    }
                                                  },
                                                  "visible": true
                                                }
                                              }
                                            },
                                            "visible": true
                                          }
                                        }
                                      },
                                      "visible": true
                                    },
                                    "id": {
                                      "type": "ID",
                                      "keyRaw": "id",
                                      "visible": true,
                                      "nullable": true
                                    }
                                  }
                                },
                                "visible": true
                              }
                            }
                          },
                          "visible": true
                        }
                      }
                    },
                    "visible": true
                  }
                }
              },
              "visible": true
            }
          }
        },
        "visible": true
      }
    }
  },
  "pluginData": {
    "houdini-svelte": {}
  },
  "policy": "CacheOrNetwork",
  "partial": false
};
class CategoriesStore extends QueryStore {
  constructor() {
    super({
      artifact,
      storeName: "CategoriesStore",
      variables: false
    });
  }
}
async function load_Categories(params) {
  await initClient();
  const store = new CategoriesStore();
  await store.fetch(params);
  return {
    Categories: store
  };
}
const ssr = false;
const prerender = true;
async function load(context) {
  const houdini_context = new RequestContext(context);
  getCurrentConfig();
  const promises = [];
  const inputs = {};
  inputs["Categories"] = {};
  promises.push(load_Categories({
    "variables": inputs["Categories"],
    "event": context,
    "blocking": void 0
  }));
  let result = {};
  try {
    result = Object.assign({}, ...await Promise.all(promises));
  } catch (err) {
    throw err;
  }
  return {
    ...houdini_context.returnValue,
    ...result
  };
}
export {
  load,
  prerender,
  ssr
};
