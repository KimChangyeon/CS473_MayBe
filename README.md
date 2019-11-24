# <b>MayBe</b>
URL: https://cs473maybe.herokuapp.com/<br>
GitHub: https://github.com/KimChangyeon/CS473_MayBe<br>
## 
This is web service for appointments. We provide three major service <br>
1. Making Appointment
2. Ranking system operated by rewards
3. Statistics on past appointments

## <b>Make Appointment</b>
><b> Find friends available at selected time slots </b> is implemented in <br>
- select time slots : CS473_MayBe/maybe/src/Appointment/DragSelect.js<br>
    &rarr; use package named "react-table-drag-select" / selected time slots are mananged by state  named "cell" of component
- show available friends : CS473_MayBe/maybe/src/friend_list.js<br>

><b> Choose available appointment time slots with selected appointment partners</b> is implemented in <br>
- select appointment partners : CS473_MayBe/maybe/src/
- choose available appointment time slots : CS473_MayBe/maybe/src/appointment/ChooseTable
&rarr; use bootstrap table / when a cell in table is selected, the state named "choice" of component is changed to contain selected cell
><b> Vote for appointment</b> is implmented in <br>
- vote : CS473_MayBe/maybe/src/appointment/ChooseTable


## <b>Be Punctual</b>
> <b>Earning Rewards</b> is implemented in<br>
>
> <b>Rank</b> is implemented in<br>
> CS473_MayBe/maybe/src/

## <b>Recall Appointment</b>
><b>My Overall Monthly Statistics</b> is implemented in<br>
CS473_MayBe/maybe/src/Statistics/<b>Statistics_Monthly.js</b><br>
CS473_MayBe/maybe/src/Statistics/<b>Statistics_Monthly.css</b><br>

> <b>Statistics for Each Friend</b> is implemented in<br>
CS473_MayBe/maybe/src/Statistics/<b>Statistics_Friend.js</b><br> CS473_MayBe/maybe/src/Statistics/<b>Statistics_Friend.css</b><br>