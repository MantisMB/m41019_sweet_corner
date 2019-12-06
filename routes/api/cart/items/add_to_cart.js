const db = require('../../../../db');

module.exports = async (req, res) => {

    // Check for existing cart
    let { cart } = req;

    // If no cart, create a new cart

    if(!cart){
        const [[ cartStatus ]] = await db.query('SELECT id FROM cartStatuses WHERE mid="active"');

        console.log('Cart Status', cartStatus);

        const [ result ] = await db.query('INSERT INTO cart (pid, statusId) VALUES (UUID(), ?)', [cartStatus.id]);

        console.log('Result:', result);
    };

    // Does item already exist in cart

    // If product already in cart, increase quantity

    // Else create cart item for product

    // Create a message to send back to user of what was added


    res.send({
        message: 'This will add an item to your cart'
    });
}
