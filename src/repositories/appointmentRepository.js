const { getConnection } = require('./db');

async function getAppointment(name) {
    let connection = await getConnection();
    try {
        const treatment = await connection.query(
            'SELECT appointments.date AS date, treatments.name AS treatments FROM treatments LEFT JOIN appointments ON treatments.id = appointments.treatments WHERE treatments.name = ? AND appointments.patients is null',
            [name]
        );
        return treatment;

    } catch (err) {
        throw err;
    } finally {
        if (connection) connection.close();
    }
}

async function allTreatments() {
    let connection = await getConnection();
    try {
        const alltreatments = await connection.query('SELECT * from treatments');
        return alltreatments;
    } catch (err) {
        throw err;
    } finally {
        if (connection) connection.close();
    }
}

async function bookAppointment( date, id) {
    let conn;
    try {

        conn = await getConnection();
        const bookAppointment = await conn.query('UPDATE appointments set patients = (?) WHERE date = (?) ', [id, date]);

        return bookAppointment;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close();
    }
}

async function finishAppointment(date) {
    let conn;
    try {

        conn = await getConnection();
        const finishAppointment = await conn.query('UPDATE appointments set status = "finished" WHERE date = (?) ', [date]);

        return finishAppointment;

    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.close();
    }
}


module.exports = {getAppointment, allTreatments, bookAppointment, finishAppointment};