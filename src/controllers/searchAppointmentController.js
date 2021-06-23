const {searchAppointment} = require('../services/appointmentService');

async function searchAppointmentController(arg) {
    const treatment = await searchAppointment(arg);
    treatment.forEach(({ date, treatments }) => {
        console.log(`Date: ${date} Treatment: ${treatments}`);
    });
}

module.exports = searchAppointmentController;