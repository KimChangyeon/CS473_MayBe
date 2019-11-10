const express = require('express');
const os = require('os');
const router = express.Router();
const db = require('../dbconnection')
const mysql = require('mysql')
 
router.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello Express!' });
    });
    
// router.get('/api/getUsername', (req, res, next) => {
//     res.send({ username: os.userInfo().username });
// });

// router.get('/getData', (req, res) => {
//     db.query("select * from data", (err, rows) => {
//         if (!err) {
//         res.send({data: rows});
//         } else {
//         res.send(err);
//         }
//         });
//     }
// )

// router.post('/postData/:id', (req, res) => {
//     // var sheet = req.params.id.split(',').map(function (item){
//     //     return parseInt(item, 10);
//     // });
//     var sheet = parseInt(req.params.id, 10)
//     var query = 'UPDATE data SET count = count + 1, pending = pending - 1, time = null WHERE id = ? and pending > 0'
//     var queries = query;
//     // for (var k = 1 ; k < sheet.length ; k++) {
//     //     queries = queries.concat(';').concat(query);
//     // }
//     db.query (queries, sheet, (err, rows) => {
//         if (!err) {
//             res.send({data: 'SUCCESS'});
//         }
//         else {
//             res.send({data: err});
//         }
//     })
// });

// router.post('/postPending/:id', (req, res) => {
//     var sheet = parseInt(req.params.id, 10);
//     // res.send({data: 'AA'});
//     var query = 'UPDATE data SET pending = pending + 1, time = NOW() WHERE id = ?';
//     // res.send({data: req.params.id});
//     // var queries = query;
//     // for (var k = 1 ; k < sheet.length ; k++) {
//     //     queries = queries.concat(';').concat(query);
//     // }
//     db.query (query, sheet, (err, rows) => {
//         if (!err) {
//             res.send({data: 'PENDING UPDATE SUCCESS'});
//         }
//         else {
//             res.send({data: err});
//         }
//     })
// });
     
module.exports = router;