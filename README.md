# <b>MayBe</b>
URL: https://cs473maybe.herokuapp.com/<br>
GitHub: https://github.com/KimChangyeon/CS473_MayBe<br>

***
>## <b>What is MayBe?</b>
MayBe is a web service supporting various social interaction related to appointments.<br>
We provide three major services: <br>
1. Making Appointment
2. Ranking system operated by rewards
3. Statistics on past appointments

***

## <b>Login</b>
You can log in with the following account.
```
ID: guest
PW: 0000
```
Implementation: _CS473_MayBe/maybe/src/Login.js_

# <b>Main Functionality</b>
When you sign in, you will encounter the list of upcoming appointments.<br>
Implementation: _CS473_MayBe/maybe/src/Main.js_<br>

--- 

## <b>Make Appointment</b>
You can make an appointment with your friends.
All functions related to making appointments are in _CS473_MayBe/maybe/src/Appointment/_ directory.

><b> Friend list </b>
- _CS473_MayBe/maybe/src/Appointment/Make.js_

><b> Search available friends with time slots </b> 
- Choose time slots : _CS473_MayBe/maybe/src/Appointment/DragSelect.js<br>_
- Show available friends : _CS473_MayBe/maybe/src/Appointment/friend_list.js<br>_

><b> Choose available appointment time slots </b>
- _CS473_MayBe/maybe/src/Appointment/ChooseTable.js_

><b> Vote for appointment </b>
- _CS473_MayBe/maybe/src/Appointment/ChooseTable.js_

><b> Make a note </b>
- _CS473_MayBe/maybe/src/Appointment/Memo.js_

---

## <b>Be Punctual</b>
We assume you arrived at the meeting point on time. You can earn rewards by clicking coin icon. You can also check the reward ranking in ranking tab.

><b>Earn rewards</b>
- _CS473_MayBe/maybe/src/Main.js_

><b>Rank</b> 
- _CS473_MayBe/maybe/src/Statistics/Rank.js_

---

## <b>Recall Appointment</b>
You can recall your social life with some statistics and calendar memo function.

><b> Your overall monthly statistics </b>
- _CS473_MayBe/maybe/src/Statistics/Statistics_Monthly.js_

><b> Your friends' statistics </b>
- _CS473_MayBe/maybe/src/Statistics/Statistics_Friend.js_

---

## <b>Manage Schedule</b>
You can manage your own schedules in schedule tab.
All functions related to schedule management are in _CS473_MayBe/maybe/src/Schedule/_ directory.