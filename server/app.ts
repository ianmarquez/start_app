import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req: express.Request , res: express.Response) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req: any , res: express.Response) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));