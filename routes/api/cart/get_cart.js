const db = require('../../../db');
const { buildUrl, getCartTotals } = require('../../../helpers');

module.exports = async (req, res, next) => {
    try {
        const { cart } = req;

        let output = {
            cartId: null,
            message: "No active cart"
        }

        if(cart) {

            // Get all cart items from db
            const [ cartItems ] = await db.execute(`SELECT c.pid AS cartId, quantity, ci.pid AS itemId, ci.createdAt AS added, p.name, p.cost AS \`each\`, p.pid AS productId, (p.cost * quantity) AS total, altText, type, file
            FROM cartItems AS ci
            JOIN cart AS c ON ci.cartId=c.id
            JOIN products AS p ON ci.productId=p.id
            JOIN images AS i ON p.id=i.productId AND i.type='thumbnail'
            WHERE ci.cartId=?`, [cart.id]);

            const formattedCartItems = cartItems.map(item => {
                const { cartId, altText, type, file, ...i} = item;

                output.cartId = cartId;

                return { 
                    ...i,
                    thumbnail: {
                        altText: altText,
                        url: buildUrl(req, type, file)
                    }
                 }

            });

            delete output.message;

            output.items = formattedCartItems;

            output.total = await getCartTotals(cart.id);
        }

        res.send(output);

    } catch(error) {

        next(error);
        
    }
};
