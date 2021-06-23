const { deleteTreatmentService } = require('../services/treatmentService');

async function deleteTreatmentController(name) {
    const treatment = await deleteTreatmentService(name);
    console.log(`Deleted Treatment: ${name}`);
}

module.exports = deleteTreatmentController;
