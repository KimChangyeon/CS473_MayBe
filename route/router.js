const express = require('express');
const os = require('os');
const router = express.Router();
const db = require('../dbconnection')
const mysql = require('mysql')
 

router.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello Express!' });
    });

// 로그인 가능 여부에 관한 정보 리턴.
router.get('/login/:id/:pw', (req, res) => {
        var query = "SELECT UserId FROM MayBe.User WHERE Username = ? and password = ?"
        db.query(query, [req.params.id, req.params.pw], (err, rows) => {
            if (!err) {
                res.send({data: rows});
            }
            else {
                res.send({data: err});
            }
        })
    });

// 한 유저가 포함되는 약속의 정보 리턴.
router.get('/appoint/:id', (req, res) => {
        var query = 'SELECT * from Appointment where appointmentid IN (SELECT b.appointmentid FROM Appointment_participants b where b.participantsid = ?)'
        db.query(query, req.params.id, (err, rows) => {
            if (!err) {
                res.send({data: rows});
            }
            else {
                res.send({data: err});
            }
        })
    });

// 한 유저의 스케줄 정보 불러오기.
router.get('/sch/:id', (req, res) => {
    var query = 'SELECT * FROM schedule WHERE userid = ?'
    db.query(query, req.params.id, (err, rows) => {
        if (!err) {
            res.send({data: rows});
        }
        else {
            res.send({data: err});
        }
    })
});

// 한 유저의 약속 정보 불러오기.
router.get('/appt/:id', (req, res) => {
    var query = 'SELECT a.*, b.participants FROM (SELECT * FROM Appointment WHERE AppointmentId IN (SELECT Appointmentid FROM Appointment_participants WHERE ParticipantsId = ?)) a JOIN (SELECT AppointmentId, GROUP_CONCAT(participant) AS participants FROM (SELECT AppointmentId, (SELECT name from User where userid = ParticipantsId) participant from Appointment_participants) c GROUP BY AppointmentId) b ON a.AppointmentId = b.AppointmentId '

    db.query(query, req.params.id, (err, rows) => {
        if (!err) {
            res.send({data: rows});
        }
        else {
            res.send({data: err});
        }
    })
});

router.get('/fri/:id', (req, res) => {
    var query = 'SELECT name from User where userid in (SELECT FriendId FROM Friend where userId = ?)'
    db.query(query, req.params.id, (err, rows) => {
        if (!err) {
            res.send({data: rows});
        }
        else {
            res.send({data: err});
        }
    })
});


module.exports = router;