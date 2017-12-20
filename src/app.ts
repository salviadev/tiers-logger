import * as express from 'express';
import * as bodyParser from 'body-parser';

let app = express();


app.use(bodyParser.json())

app.all('*/info', (req, res) => {
    if (req.body)
        console.log(req.body);
    res.status(200).json({ response: 'I am alive!' })
});

app.listen(80, function () {
    console.log('Server started at port 80.')
})
