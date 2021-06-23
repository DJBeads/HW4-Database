const { addTreatmentService } = require('../services/treatmentService');

async function addTreatmentController(name) {
    const treatments = await addTreatmentService(name);
    console.log(`Added Treatment: ${name}`);
}

module.exports = addTreatmentController;
