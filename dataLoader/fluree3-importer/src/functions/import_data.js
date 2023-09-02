const api = require('../api/ApiClient')

const knowledgePointData = require('../../../../ontologies/apps/thoughtBank/data/KnowledgePointData.json')
const knowledgePointRemarkData = require('../../../../ontologies/apps/thoughtBank/data/KnowledgePointRemarkData.json')
const knowledgePointTagData = require('../../../../ontologies/apps/thoughtBank/data/KnowledgePointTagData.json')

async function importData() {

  const payload = {
    ledger: "TB1",
    txn: [
      ...knowledgePointData,
      ...knowledgePointRemarkData,
      ...knowledgePointTagData
    ]
  }

  try {
    const result = await api.post('/transact', payload)
    if (result.status === 200) {
      console.log("🚀 --- Data were imported successfully --- 🚀");
    }
  } catch (error) {
    console.error("Error while importing data:", error);
  }
}

importData()

