
// expressをrequireする
const express = require("express");

// ポート番号を変数に設定
const portNumber = process.env.PORT || 3000;

// // 別オリジンからのアクセスを許可する（CORSモジュール利用）
// const cors = require("cors");
// app.use(cors());

// appオブジェクトを作成する
const app = express();

//'./database/connection'でmysqlと接続を行う
const pool = require('./database/connection');


// getメソッドで、ルートパスにアクセスしてきたときの処理を記載する
//api実装
app.get("/", (req, res) => {

    //現在の日付を取得
    const time = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' })
    const day = time.split(",")[0];
    const dateArr = day.split("/");
    const [month, date, year] = dateArr;
    
    pool.getConnection(function(err, connection){
        //誕生日と日付が一緒のものを検索
        connection.query("SELECT * FROM `players` WHERE `birth_month`=? AND `birth_date`=?", [month, date], function (err, results, fields) {  
            if (err) throw err;
            //値をjsonで返す
            res.json({ BirthDay_Players: results });
        })
    });
});

// リクエストを待ち受ける
app.listen(portNumber);

console.log(`PortNumber is ${portNumber}`);

