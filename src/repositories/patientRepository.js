const { getConnection } = require('./db');

async function addPatient(name, email) {
    let connection = await getConnection();
    try {
        return (
            await connection.query('INSERT INTO patients(email, name) VALUES (?, ?)',
                [email, name])
    )

    } catch (err) {
        throw err;
    } finally {
        if (connection) connection.close();
    }
}

module.exports = addPatient;