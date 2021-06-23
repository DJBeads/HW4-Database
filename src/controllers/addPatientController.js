const addPatientService = require('../services/patientService');

async function addPatientController(name,email) {
    const patients = await addPatientService(name, email);
    console.log(`Added Patient! Name: ${name} Email: ${email}`);
}

module.exports = addPatientController;
