const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>GitOps Experiment Successful!</h1><p>Managed by Argo CD | Version: 1.0.0</p>');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});