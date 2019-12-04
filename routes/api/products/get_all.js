const db = require('../../../db');
const { buildUrl } = require('../../../helpers');

module.exports = async (req,res) => {

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
}


