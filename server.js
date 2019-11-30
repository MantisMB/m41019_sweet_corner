const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/test', (req,res) => {
    res.send({
        message: 'This is a test endpoint, if you see this, it is working'
    });
});

app.listen(PORT, () => {
    console.log('Our server is running @ localhost:', PORT);
});
