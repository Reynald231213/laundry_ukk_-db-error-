const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const memberRouter = require("./api/member/member.router");
app.use("/api/member", memberRouter);

const userRouter = require("./api/user/user.router");
app.use("/api/user", userRouter);

const paketRouter = require("./api/paket/paket.router");
app.use("/api/paket", paketRouter);

const outletRouter = require("./api/outlet/outlet.router");
app.use("/api/outlet", outletRouter);

const transaksiRouter = require("./api/transaksi/transaksi.router");
app.use("/api/transaksi", transaksiRouter);

const detail_transaksiRouter = require("./api/detail_transaksi/detail_transaksi.router");
app.use("/api/detail_transaksi", detail_transaksiRouter);

const port = 4000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});