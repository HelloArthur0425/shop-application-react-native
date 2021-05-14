export const getBrands = async (req, res) => {
    try {
        const pool = req.pool
        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log(`connected as id ${connection.threadId}`)
            connection.query('select * from brands', (err, rows) => {
                connection.release();
                if (!err) {
                    res.status(200).json(rows);
                } else {
                    console.log(err);
                }
            })
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}