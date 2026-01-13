@ "
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('<h1>GitOps Success!</h1><p>Running on: AakashThapliyal/exp1_k8s</p>');
});
app.listen(port, () => {
    console.log('App running on port 3000');
});
"@ | Out-File -FilePath src\app.js -Encoding utf8