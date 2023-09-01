const api = require("../api/ApiClient");

async function createLedger() {
  try {
    const ledger = "TB1"
    const result = await api.post('/create', {
      ledger,
      txn: {
        message: "New ledger created"
      },
      defaultContext: {
        id: "@id",
        type: "@type",
        xsd: "http://www.w3.org/2001/XMLSchema#",
        rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        rdfs: "http://www.w3.org/2000/01/rdf-schema#",
        sh: "http://www.w3.org/ns/shacl#",
        schema: "http://schema.org/",
        skos: "http://www.w3.org/2008/05/skos#",
        wiki: "https://www.wikidata.org/wiki/",
        f: "https://ns.flur.ee/ledger#"
      }
    })
    if (result.status === 200) {
      console.log(`🚀 --- Ledger ${ledger} was created successfully --- 🚀`);
    }
  } catch (error) {
    console.error("Error while creating ledger: ", error);
  }
}

createLedger()