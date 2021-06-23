const { addTreatment } = require("../repositories/treatmentsRepository");
const { deleteTreatment } = require("../repositories/treatmentsRepository");

async function addTreatmentService(name) {
    const treatments = await addTreatment(name);
    return treatments;
}

async function deleteTreatmentService(name) {
    const treatments = await deleteTreatment(name);
    return treatments;
}

module.exports = { addTreatmentService, deleteTreatmentService };
