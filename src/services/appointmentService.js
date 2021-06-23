const {getAppointment, allTreatments, bookAppointment, finishAppointment} = require("../repositories/appointmentRepository");

async function searchAppointment(name) {
    const treatment = await getAppointment(name);
    delete treatment.meta;
    return treatment;
}

async function listAllTreatments() {
    const treatment = await allTreatments();
    delete treatment.meta;
    return treatment;
}

async function bookAppointmentByDate(date, id) {
    const appointment = await bookAppointment(date, id);

    delete appointment.meta;
    return appointment;
}

async function finishAppointmentByDate(date) {
    const books = await finishAppointment(date);

    delete books.meta;
    return books;
}

module.exports = {searchAppointment, listAllTreatments, bookAppointmentByDate, finishAppointmentByDate};
