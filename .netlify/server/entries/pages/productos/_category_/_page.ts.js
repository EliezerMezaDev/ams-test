import { i as initClient, Q as QueryStore, g as getCurrentConfig, m as marshalInputs } from "../../../../chunks/query.js";
import { R as RequestContext } from "../../../../chunks/session.js";
import { c as capitalizeFirstLetter } from "../../../../chunks/utils2.js";
const _SubcategoriesArtifact = {
  "name": "Subcategories",
  "kind": "HoudiniQuery",
  "hash": "07656850163c6aa7a544b3c5488a004a69b57f6aec11521e3f41dfd2073311c1",
  "raw": `query Subcategories($name: String!) {
  subcategories(filters: {categoria: {name: {eq: $name}}}) {
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
        categoria {
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
        productos {
          data {
            attributes {
              slug
            }
            id
          }
        }
      }
      id
    }
  }
}
`,
  "rootType": "Query",
  "stripVariables": [],
  "selection": {
    "fields": {
      "subcategories": {
        "type": "SubcategoryEntityResponseCollection",
        "keyRaw": "subcategories(filters: {categoria: {name: {eq: $name}}})",
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
                        },
                        "categoria": {
                          "type": "CategoryEntityResponse",
                          "keyRaw": "categoria",
                          "nullable": true,
                          "selection": {
                            "fields": {
                              "data": {
                                "type": "CategoryEntity",
                                "keyRaw": "data",
                                "nullable": true,
                                "selection": {
                                  "fields": {
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
                        "productos": {
                          "type": "ProductRelationResponseCollection",
                          "keyRaw": "productos",
                          "nullable": true,
                          "selection": {
                            "fields": {
                              "data": {
                                "type": "ProductEntity",
                                "keyRaw": "data",
                                "selection": {
                                  "fields": {
                                    "attributes": {
                                      "type": "Product",
                                      "keyRaw": "attributes",
                                      "nullable": true,
                                      "selection": {
                                        "fields": {
                                          "slug": {
                                            "type": "String",
                                            "keyRaw": "slug",
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
  "pluginData": {
    "houdini-svelte": {}
  },
  "input": {
    "fields": {
      "name": "String"
    },
    "types": {},
    "defaults": {},
    "runtimeScalars": {}
  },
  "policy": "CacheOrNetwork",
  "partial": false
};
class SubcategoriesStore extends QueryStore {
  constructor() {
    super({
      artifact: _SubcategoriesArtifact,
      storeName: "SubcategoriesStore",
      variables: true
    });
  }
}
async function load_Subcategories(params) {
  await initClient();
  const store = new SubcategoriesStore();
  await store.fetch(params);
  return {
    Subcategories: store
  };
}
const ssr = false;
const prerender = false;
const _SubcategoriesVariables = ({
  params
}) => ({
  name: capitalizeFirstLetter(params.category)
});
async function __houdini___SubcategoriesVariables(config, event) {
  const result = {};
  Object.assign(result, marshalInputs({
    config,
    input: await _SubcategoriesVariables(event),
    artifact: _SubcategoriesArtifact
  }));
  return result;
}
async function load(context) {
  const houdini_context = new RequestContext(context);
  const houdiniConfig = getCurrentConfig();
  const promises = [];
  const inputs = {};
  inputs["Subcategories"] = await __houdini___SubcategoriesVariables(houdiniConfig, context);
  promises.push(load_Subcategories({
    "variables": inputs["Subcategories"],
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
  _SubcategoriesVariables,
  load,
  prerender,
  ssr
};
