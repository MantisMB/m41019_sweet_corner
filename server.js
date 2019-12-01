const express = require('express');
const PORT = process.env.PORT || 3001;
const db = require('./db');
const { buildUrl } = require('./helpers')

const app = express();

app.get('/api/products', async (req,res) => {

    const [ results ] = await db.query(`
    SELECT p.pid AS id, caption, cost, p.name, i.pid AS tnId, altText, file, type 
    FROM products AS p 
    JOIN images AS i 
    ON i.productId=p.id
    WHERE i.type='thumbnail'
    `);

    const products = results.map(product => {
        const { tnId, altText, file, type, ...p} = product;

        return {
            ...p,
            thumbnail: {
                id: tnId,
                altText: altText,
                file: file,
                type: type,
                url: buildUrl(req, type, file),
            }
        }
    });

    res.send({ products });
});

app.get('/api/products/:product_id', async (req, res) => {
    
    const { product_id } = req.params;

    //Query database to get all the data you need
    //Then, format the data as needed
    //Then, send data to client

    const [ results ] = await db.query(`
    SELECT p.pid AS id, caption, cost, p.name, i.pid AS imId, altText, file, type, description 
    FROM products AS p 
    JOIN images AS i 
    ON i.productId=p.id
    WHERE p.pid=?
    `, [product_id]);

    let product = {};
    let images = {};

    results.forEach(result => {
        const { imId, altText, file, type, description, ...p} = result;

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
});

app.listen(PORT, () => {
    console.log('Our server is running @ localhost:', PORT);
});
