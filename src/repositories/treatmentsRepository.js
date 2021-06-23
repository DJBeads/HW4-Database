const { getConnection } = require('./db');

async function addTreatment(name) {
    let connection = await getConnection();
    try {
        return (
            await connection.query('INSERT INTO treatments(name) VALUES (?)',
                [name])
        )

    } catch (err) {
        throw err;
    } finally {
        if (connection) connection.close();
    }
}

async function deleteTreatment(name) {
    let connection = await getConnection();
    try {
        return (
            await connection.query('DELETE FROM treatments WHERE name = ?',
                [name])
        )

    } catch (err) {
        throw err;
    } finally {
        if (connection) connection.close();
    }
}

module.exports = {addTreatment, deleteTreatment};
