export const getSneakers = async (req, res) => {
    try {
        const pool = req.pool
        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log(`connected as id ${connection.threadId}`)
            connection.query('SELECT brands.brand_name, sneakers.sneaker_name, sneakers.visit_count, sneakers.image_url, sneaker_qty.*' +
                'FROM brands, sneakers, sneaker_qty ' +
                'WHERE brands.brand_id = sneakers.sneaker_brand ' +
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

export const getSneakersMostPopular = async (req, res) => {
    try {
        const pool = req.pool
        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log(`connected as id ${connection.threadId}`)
            connection.query('SELECT brands.brand_name, sneakers.sneaker_name, sneakers.visit_count, sneakers.image_url, sneaker_qty.*' +
                'FROM brands, sneakers, sneaker_qty ' +
                'WHERE brands.brand_id = sneakers.sneaker_brand ' +
                'AND sneakers.sneaker_id = sneaker_qty.sneaker_id ' +
                'ORDER BY sneakers.visit_count DESC ' +
                'LIMIT 10',
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

export const getSneakersHighest = async (req, res) => {
    try {
        const pool = req.pool
        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log(`connected as id ${connection.threadId}`)
            connection.query('SELECT brands.brand_name, sneakers.sneaker_name, sneakers.visit_count, sneakers.image_url, sneaker_qty.*' +
                'FROM brands, sneakers, sneaker_qty ' +
                'WHERE brands.brand_id = sneakers.sneaker_brand ' +
                'AND sneakers.sneaker_id = sneaker_qty.sneaker_id ' +
                'ORDER BY sneakers.sell DESC ' +
                'LIMIT 5',
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

export const getSneakersRecommended = async (req, res) => {
    try {
        const pool = req.pool
        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log(`connected as id ${connection.threadId}`)
            connection.query('SELECT brands.brand_name, sneakers.sneaker_name, sneakers.visit_count, sneakers.image_url, sneaker_qty.*' +
                'FROM brands, sneakers, sneaker_qty ' +
                'WHERE brands.brand_id = sneakers.sneaker_brand ' +
                'AND sneakers.sneaker_id = sneaker_qty.sneaker_id ' +
                'AND brands.brand_name = "ADIDAS"',
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

export const getSneakersById = async (req, res) => {
    try {
        const sneakerId = req.params.id
        const pool = req.pool
        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log(`connected as id ${connection.threadId}`)
            connection.query('SELECT brands.brand_name, sneakers.sneaker_name, sneakers.visit_count, sneakers.image_url, sneaker_qty.*' +
                'FROM brands, sneakers, sneaker_qty ' +
                'WHERE brands.brand_id = sneakers.sneaker_brand ' +
                'AND sneakers.sneaker_id = sneaker_qty.sneaker_id ' +
                'AND sneakers.sneaker_id = ?',
                [sneakerId], (err, rows) => {
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