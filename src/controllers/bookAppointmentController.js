const { bookAppointmentByDate } = require('../services/appointmentService');

async function bookAppointmentController(date, id) {
    const { insertId } = await bookAppointmentByDate(date, id);
    console.log(`Successfully booked`);
}

module.exports = bookAppointmentController;