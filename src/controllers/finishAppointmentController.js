const { finishAppointmentByDate } = require('../services/appointmentService');

async function finishAppointmentController(date, id) {
    const { insertId } = await finishAppointmentByDate(date, id);
    console.log(`Treatment is now finished`);
}

module.exports = finishAppointmentController;