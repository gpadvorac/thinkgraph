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
        rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        rdfs: "http://www.w3.org/2000/01/rdf-schema#",
        xsd: "http://www.w3.org/2001/XMLSchema#",
        schema: "http://schema.org/",
        kp: "http://thinkgraph.org/ontologies/apps/thoughtbank/knowledgepoint#",
        person: "http://thinkgraph.org/ontologies/core/persons#"
      }
    })
    if (result.status === 201) {
      console.log(`🚀 --- Ledger ${ledger} was created successfully --- 🚀`);
    }
  } catch (error) {
    console.error("Error while creating ledger: ", error);
  }
}

createLedger()