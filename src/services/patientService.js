const addPatient = require("../repositories/patientRepository");

async function addPatientService(name, email) {
    const patients = await addPatient(name,email);
    return patients;
}

module.exports = addPatientService;