export const getSneakers = async (req, res) => {
    try {
        const pool = req.pool
        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log(`connected as id ${connection.threadId}`)
            connection.query('SELECT brands.brand_name, sneakers.sneaker_name, sneakers.visit_count, sneakers.image_url, sneaker_qty.*'+
                                'FROM brands, sneakers, sneaker_qty '+
                                'WHERE brands.brand_id = sneakers.sneaker_brand '+
                                'AND sneakers.sneaker_id = sneaker_qty.sneaker_id', 
                (err, rows) => {
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