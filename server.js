const express = require('express');
const PORT = process.env.PORT || 3001;
const db = require('./db');
const { buildUrl } = require('./helpers')

const app = express();

app.get('/api/products', async (req,res) => {

    const [ results ] = await db.query(`
    SELECT p.id AS id, caption, cost, p.name, i.pid AS tnId, altText, file, type 
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

app.listen(PORT, () => {
    console.log('Our server is running @ localhost:', PORT);
});
