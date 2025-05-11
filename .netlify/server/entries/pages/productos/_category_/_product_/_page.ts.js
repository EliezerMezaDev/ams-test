import { i as initClient, Q as QueryStore, g as getCurrentConfig, m as marshalInputs } from "../../../../../chunks/query.js";
import { R as RequestContext } from "../../../../../chunks/session.js";
import { c as capitalizeFirstLetter } from "../../../../../chunks/utils2.js";
const _SubcategoryProductsArtifact = {
  "name": "SubcategoryProducts",
  "kind": "HoudiniQuery",
  "hash": "fb53c4fa6dd6938cee6aaa1623e0de473c80a3a47bbfd86c74af2c8465411e65",
  "raw": `query SubcategoryProducts($name: String!) {
  subcategories(filters: {name: {eq: $name}}) {
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
              name
              slug
              brand
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
        "keyRaw": "subcategories(filters: {name: {eq: $name}})",
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
                                          "name": {
                                            "type": "String",
                                            "keyRaw": "name",
                                            "nullable": true,
                                            "visible": true
                                          },
                                          "slug": {
                                            "type": "String",
                                            "keyRaw": "slug",
                                            "visible": true
                                          },
                                          "brand": {
                                            "type": "ENUM_PRODUCT_BRAND",
                                            "keyRaw": "brand",
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
class SubcategoryProductsStore extends QueryStore {
  constructor() {
    super({
      artifact: _SubcategoryProductsArtifact,
      storeName: "SubcategoryProductsStore",
      variables: true
    });
  }
}
async function load_SubcategoryProducts(params) {
  await initClient();
  const store = new SubcategoryProductsStore();
  await store.fetch(params);
  return {
    SubcategoryProducts: store
  };
}
const ssr = false;
const prerender = false;
const _SubcategoryProductsVariables = ({
  params
}) => ({
  name: capitalizeFirstLetter(params.product)
});
async function __houdini___SubcategoryProductsVariables(config, event) {
  const result = {};
  Object.assign(result, marshalInputs({
    config,
    input: await _SubcategoryProductsVariables(event),
    artifact: _SubcategoryProductsArtifact
  }));
  return result;
}
async function load(context) {
  const houdini_context = new RequestContext(context);
  const houdiniConfig = getCurrentConfig();
  const promises = [];
  const inputs = {};
  inputs["SubcategoryProducts"] = await __houdini___SubcategoryProductsVariables(houdiniConfig, context);
  promises.push(load_SubcategoryProducts({
    "variables": inputs["SubcategoryProducts"],
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
  _SubcategoryProductsVariables,
  load,
  prerender,
  ssr
};
