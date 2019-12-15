const db = require('../../../../db');
const cartJwt = require('../../../../config/cart_jwt.json');
const { buildUrl, getCartTotals } = require('../../../../helpers');
const jwt = require('jwt-simple');

module.exports = async (req, res) => {

    // Check for existing cart
    const { product_id } = req.params;
    const { quantity = 1 } = req.body;
    let { cart, token } = req;

    if(isNaN(quantity) || quantity < 1) {
        res.status(422).send('Invalid quantity received');
        return;
    }

    // Check for valid product

    const [[product = null]] = await db.execute('SELECT id, name FROM products WHERE pid=?', [product_id])

    if(!product) {
        res.status(404).send('Product not found');
        return;
    };

    // console.log('Found Product:', product);

    // If no cart, create a new cart

    if(!cart){
        const [[ cartStatus ]] = await db.query('SELECT id FROM cartStatuses WHERE mid="active"');

        const [ result ] = await db.query('INSERT INTO cart (pid, statusId) VALUES (UUID(), ?)', [cartStatus.id]);

        console.log('Result:', result);

        cart = {
            id: result.insertId
        };

        const tokenData = {
            cartId: cart.id,
            ts: Date.now(),
        };

        console.log('Secret:', cartJwt.secret);

        token = jwt.encode(tokenData, cartJwt.secret);
    };

    // Does item already exist in cart
    const [[cartItem = null]] = await db.query('SELECT id FROM cartItems WHERE cartId=? AND productId=?', [cart.id, product.id]);
    // If product already in cart, increase quantity
    if(cartItem) {
        //Increase the quantity of the existing cartItem
        await db.execute('UPDATE cartItems SET quantity=quantity + ? WHERE id=?', [quantity, cartItem.id]);
    } else {
        //create cart item for product
        const [ itemResult ] = await db.execute(`
        INSERT INTO cartItems 
        (pid, cartId, productId, quantity)
        VALUES (UUID(), ?, ?, ?)`
        , [cart.id, product.id, quantity]);
    };

    const [ [cartData] ] = await db.query(
        `SELECT c.id AS cartId, ci.pid AS itemId, p.pid AS productId, p.cost AS 'each', ci.quantity, (cost * quantity) AS total, ci.createdAt AS added, p.name, i.altText, i.type, i.file FROM cartItems AS ci JOIN cart AS c ON ci.cartId=c.id JOIN products AS p ON ci.productId=p.id JOIN images AS i ON i.productId=p.id WHERE cartId=? AND ci.productId=? AND i.type="thumbnail"`, [cart.id, product.id]);


    // console.log('Cart Data: ', cartData);

    const { cartId, altText, file, type, ...item} = cartData;
    item.thumbnail = {
        altText: altText,
        url: buildUrl(req, type, file),
    };
    // If product already in cart, increase quantity

    // Else create cart item for product

    // Create a message to send back to user of what was added

    const message = `${quantity} ${product.name} added to cart`;

    const total = await getCartTotals(cart.id);

    res.send({
        cartId: cartId,
        cartToken: token,
        item: item,
        message: message,
        total: total
    });
}
