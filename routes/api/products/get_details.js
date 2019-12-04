const db = require('../../../db');
const { buildUrl } = require('../../../helpers');

module.exports = async (req, res) => {
    
    const { product_id } = req.params;

    //Query database to get all the data you need
    //Then, format the data as needed
    //Then, send data to client

    const [ results ] = await db.query(`
    SELECT p.pid AS id, caption, cost, description, p.name, i.pid AS imId, altText, file, type  
    FROM products AS p 
    JOIN images AS i 
    ON i.productId=p.id
    WHERE p.pid=?
    `, [product_id]);

    let product = {};
    let images = {};

    results.forEach(result => {
        const { imId, altText, file, type, ...p} = result;

        let keyName = 'image';

        if(type === 'thumbnail') {
            keyName= type;
        }

        product = p;

        images[keyName] = {
            id: imId,
            altText: altText,
            file: file,
            type: type,
            url: buildUrl(req, type, file),
        }
        
    });

    res.send({
        ...product,
        ...images
    });
};