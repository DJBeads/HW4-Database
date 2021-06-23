const {listAllTreatments} = require('../services/appointmentService');

async function listTreatmentsController(arg) {
    const allTreatments = await listAllTreatments(arg);
    allTreatments.forEach(({name, id}) =>
    {
        console.log(`Name: ${name} Id: ${id}`);
    });
}

module.exports = listTreatmentsController;