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
        var query = "SELECT UserId, Reward FROM MayBe.User WHERE Username = ? and password = ?"
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

//한 유저의 친구 목록 불러오기.
router.get('/fri/:id', (req, res) => {
    var query = 'SELECT name, UserId from User where userid in (SELECT FriendId FROM Friend where userId = ?)'
    db.query(query, req.params.id, (err, rows) => {
        if (!err) {
            res.send({data: rows});
        }
        else {
            res.send({data: err});
        }
    })
});

router.post('/make/:What', (req, res) => {
    var query = 'INSERT INTO Appointment(What) VALUES (?)'
    db.query(query, req.params.What, (err, rows) => {
        if (!err) {
            res.send({data: 'POSTING SUCCESSED FOR MAKING APPOINTMENT.'});
        }
        else {
            res.send({data: err});
        }
    })
});

router.post('/vote/:UserId/:DateId/:StartTime/:EndTime', (req, res) => {
    var query = 'INSERT INTO Appointment((SELECT LAST_INSERT_ID(AppointmentId) as AppointmentId from Appointment order by LAST_INSERT_ID(AppointmentId) desc limit 1), UserId, DateId, StartTime, EndTime) VALUES (?,?,?,?,?)'
    db.query(query, [req.params.UserId,req.params.DateId,req.params.StartTime,req.params.EndTime], (err, rows) => {
        if (!err) {
            res.send({data: 'POSTING SUCCESSED FOR VOTING.'});
        }
        else {
            res.send({data: err});
        }
    })
});


router.post('/register/:partname', (req, res) => {
    var query = 'INSERT INTO Appointment_participants VALUES ((SELECT LAST_INSERT_ID(AppointmentId) as AppointmentId from Appointment order by LAST_INSERT_ID(AppointmentId) desc limit 1),(SELECT UserId from User where name = ?))'
    db.query(query, req.params.partname, (err, rows) => {
        if (!err) {
            res.send({data: 'POSTING SUCCESSED FOR REGISTERING APPOINTMENT PARTICIPANTS.'});
        }
        else {
            res.send({data: err});
        }
    })
});

router.post('/register_self/:partid', (req, res) => {
    var query = 'INSERT INTO Appointment_participants VALUES ((SELECT LAST_INSERT_ID(AppointmentId) as AppointmentId from Appointment order by LAST_INSERT_ID(AppointmentId) desc limit 1), ?)'
    db.query(query, Number(req.params.partid), (err, rows) => {
        if (!err) {
            res.send({data: 'POSTING SUCCESSED FOR REGISTERING THIS USER.'});
        }
        else {
            res.send({data: err});
        }
    })
});

router.post('/reward/:id/:point', (req, res) => {
    var query = 'UPDATE User SET Reward = ? WHERE UserId = ?'
    db.query(query, [req.params.point, req.params.id], (err, rows) => {
        if (!err) {
            res.send({data: 'POSTING SUCCESSED FOR UPDATING REWARD.'});
        }
        else {
            res.send({data: err});
        }
    })
});

router.post('/modify_time/:id/:DateId/:StartTime/:EndTime/', (req, res) => {
    var query = 'UPDATE Appointment SET DateId = ?, StartTime = ?, EndTime = ? WHERE AppointmentId = ?'
    db.query(query, [req.params.DateId, req.params.StartTime, req.params.EndTime, req.params.id], (err, rows) => {
        if (!err) {
            res.send({data: 'POSTING SUCCESSED.'});
        }
        else {
            res.send({data: err});
        }
    })
});

router.post('/modify_place/:id/:Place/', (req, res) => {
    var query = 'UPDATE Appointment SET Place = ? WHERE AppointmentId = ?'
    db.query(query, [req.params.Place, req.params.id], (err, rows) => {
        if (!err) {
            res.send({data: 'POSTING SUCCESSED MODIFYING LOCATION.'});
        }
        else {
            res.send({data: err});
        }
    })
});

router.post('/modify_memo/:id/:Memo/', (req, res) => {
    var query = 'UPDATE Appointment SET Memo = ? WHERE AppointmentId = ?'
    db.query(query, [req.params.Memo, req.params.id], (err, rows) => {
        if (!err) {
            res.send({data: 'POSTING SUCCESSED FOR MODIFYING MEMO.'});
        }
        else {
            res.send({data: err});
        }
    })
});

router.get('/AppId/', (req, res) => {
    var query = 'SELECT LAST_INSERT_ID(AppointmentId) as AppointmentId from Appointment order by LAST_INSERT_ID(AppointmentId) desc limit 1'
    db.query(query, req, (err, rows) => {
        if (!err) {
            res.send({data: rows});
        }
        else {
            res.send({data: err});
        }
    })
});



module.exports = router;