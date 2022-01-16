const express = require('express');// expressを使用する
const app = express();// expressを実行する
const port = 3000;// ポート番号

app.use(express.json());// jsonを使えるようにする

// POST
app.post('/webapi', (req, res) => {
    const name = req.name;
    const text = req.text;

    // 入力チェック（nameとtextが空ではない）
    if (!(name && text)) {
        const body = req.body;
        return res.json({
            "ok": true,
            data: body
        })
    }

    res.json({
        "ok": false,
        "message": "nameとtextを入力してください"
    })
})

// GET
app.get('/webapi', (req, res) => {
    const name = req.name;
    const text = req.text;

    // 入力チェック（nameとtextが空ではない）
    if (!(name && text)) {
        const body = req.body;
        res.json({
            "ok": true,
            data: body
        })
    }
})

// リクエストが来たときに待ち受けておく
app.listen(port, () => {
    console.log(`App Listening at https://localhost:${port}`)
})
// 「'」ではなく「`」で囲まないといけない