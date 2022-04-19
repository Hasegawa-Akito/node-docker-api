// expressをrequireする
const express = require("express");

// ポート番号を変数に設定
const portNumber = 3000;

// appオブジェクトを作成する
const app = express();

//'./database/connection'でmysqlと接続を行う
const pool = require('./database/connection');

// getメソッドで、ルートパスにアクセスしてきたときの処理を記載する
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

// リクエストを待ち受ける
app.listen(portNumber);

console.log(`PortNumber is ${portNumber}`);

