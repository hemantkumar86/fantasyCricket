const players = [
  {
    name: "Virat Kohli",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Jasprit Bumrah",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Rohit Sharma",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Yuzvendra Chahal",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Mohammed Shami",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Suryakumar Yadav",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Prasidh Krishna",
    playingRole: "Bowler",
    credit: 7,
  },
  {
    name: "Hardik Pandya",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Shikhar Dhawan",
    playingRole: "Batsman",
    credit: 8,
  },
  {
    name: "Ravindra Jadeja",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Arshdeep Singh",
    playingRole: "Bowler",
    credit: 6,
  },
  {
    name: "Ravichandran Ashwin",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Deepak Chahar",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Ruturaj Gaikwad",
    playingRole: "Batsman",
    credit: 8,
  },
  {
    name: "Deepak Hooda",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Ishan Kishan",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Shreyas Iyer",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Venkatesh Iyer",
    playingRole: "Wicketkeeper",
    credit: 9,
  },
  {
    name: "Dinesh Karthik",
    playingRole: "Wicketkeeper",
    credit: 11,
  },
  {
    name: "Kuldeep Yadav",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Bhuvneshwar Kumar",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Mohammed Siraj",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Devdutt Padikkal",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Rishabh Pant",
    playingRole: "Wicketkeeper",
    credit: 10,
  },
  {
    name: "Moeen Ali",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "James Anderson",
    playingRole: "Bowler",
    credit: 12,
  },
  {
    name: "Jonny Bairstow",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Sam Billings",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Stuart Broad",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Rory Burns",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Jos Buttler",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Zak Crawley",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Sam Curran",
    playingRole: "Bowler",
    credit: 8,
  },
  {
    name: "Tom Curran",
    playingRole: "Bowler",
    credit: 7,
  },
  {
    name: "Chris Jordan",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Jack Leach",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Liam Livingstone",
    playingRole: "Batsman",
    credit: 12,
  },
  {
    name: "Reece Topley",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "David Willey",
    playingRole: "Wicketkeeper",
    credit: 9,
  },
  {
    name: "Joe Root",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Ben Stokes",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Pat Cummins",
    playingRole: "Bowler",
    credit: 11,
  },
  {
    name: "Aaron Finch",
    playingRole: "Batsman",
    credit: 10,
  },
  {
    name: "Cameron Green",
    playingRole: "Batsman",
    credit: 9,
  },
  {
    name: "Josh Hazlewood",
    playingRole: "Bowler",
    credit: 9,
  },
  {
    name: "Travis Head",
    playingRole: "Wicketkeeper",
    credit: 8,
  },
  {
    name: "Usman Khawaja",
    playingRole: "Batsman",
    credit: 11,
  },
  {
    name: "Marnus Labuschagne",
    playingRole: "Bowler",
    credit: 10,
  },
  {
    name: "Nathan Lyon",
    playingRole: "Bowler",
    credit: 9,
  },
];

var player1 = prompt("Enter 1st Team Name");
var player2 = prompt("Enter 2nd Team Name");
var gamer;
var tossWinner;
var list1 = [];
var list2 = [];
var list3 = [];
var listTeam1 = [];
var listTeam2 = [];
var listTeam3 = [];
var filteredArray = [];
var sum1;
var sum2;
var sum3;
var sumTeam1;
var sumTeam2;
var sumTeam3;
var teamList = [];
var teamList1 = [];
var grandTotal;
var grandTotal1;
var randomNumber;
var gamingTeam = [];
var toss = () => {
  if (player1 == "" || player2 == "") {
    alert("Please enter the names of both teams");
    return false;
  }
  randomNumber = Math.floor(Math.random() * 2) + 1;
  if (randomNumber == 1) {
    gamer = [player1, player2];
    gamingTeam = [player1, player2];
    document.getElementById(
      "selectTeam"
    ).value = `${player1.toUpperCase()} won the toss`;
    // document.getElementById("teamName").innerHTML = `${player1} Create your team<br><br>`
  } else {
    document.getElementById(
      "selectTeam"
    ).value = `${player2.toUpperCase()} won the toss`;
    gamer = [player2, player1];
    gamingTeam = [player2, player1];
    // document.getElementById("teamName").innerHTML = `${player2} Create your team<br><br>`
  }
  document.getElementById(
    "teamName"
  ).innerHTML = `${gamer[0].toUpperCase()} Create your team<br><br>`;
  document.getElementById("team").style.display = "block";
};

var bat = () => {
  var card = "";
  for (let i of players) {
    if (i.playingRole == "Batsman") {
      card += `<div class="card m-3  bg-secondary text-light" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Name: ${i.name}</h5>
<p class="card-text">Role: ${i.playingRole}</p>
<p class="card-text">Credit: ${i.credit}</p>
<button class="btn btn-primary"  onclick="addToBat('${i.name}','${i.playingRole}',${i.credit})">Select</button>
 
<button class="btn btn-danger"  onclick="removeToBat('${i.name}','${i.playingRole}',${i.credit})">Remove</button>
</div>
</div>`;
    }
  }
  document.getElementById("card").innerHTML = card;
};
var bowl = () => {
  var card = "";

  for (let i of players) {
    if (i.playingRole == "Bowler") {
      card += `<div class="card m-3  bg-warning text-dark" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Name: ${i.name}</h5>
<p class="card-text">Role: ${i.playingRole}</p>
<p class="card-text">Credit: ${i.credit}</p>
<button class="btn btn-primary bowl"  onclick="addToBowl('${i.name}','${i.playingRole}',${i.credit})">Select</button>
<button class="btn btn-danger"  onclick="removeToBowl('${i.name}','${i.playingRole}',${i.credit})">Remove</button>
</div>
</div>`;
    }
  }
  document.getElementById("card").innerHTML = card;
};
var keeping = () => {
  var card = "";

  for (let i of players) {
    if (i.playingRole == "Wicketkeeper") {
      card += `<div class="card m-3  bg-info text-dark" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Name: ${i.name}</h5>
<p class="card-text">Role: ${i.playingRole}</p>
<p class="card-text">Credit: ${i.credit}</p>
<button class="btn btn-primary keeping"  onclick="addToKeeping('${i.name}','${i.playingRole}',${i.credit})">Select</button>
 
<button class="btn btn-danger"  onclick="removeToKeeping('${i.name}','${i.playingRole}',${i.credit})">Remove</button>
</div>
</div>`;
    }
  }
  document.getElementById("card").innerHTML = card;
};

var addToBat = (name, role, credit) => {
  obj = { name: name, role: role, credit: credit };
  if (list1.length + 1 > 5) {
    alert("You can only select maximum five player");
    return false;
  } else {
    list1.push(obj);

    var jsonObject = list1.map(JSON.stringify);
    var uniqueSet = new Set(jsonObject);
    list1 = Array.from(uniqueSet).map(JSON.parse);
    sum1 = 0;
    for (let i of list1) {
      sum1 += i.credit;
    }

    // console.log(list1)

    document.getElementById("batTotal").innerHTML = sum1;
    creditData();
  }
};
var addToBowl = (name, role, credit) => {
  obj = { name: name, role: role, credit: credit };
  if (list2.length + 1 > 5) {
    alert("You can only select maximum five player");
    return false;
  } else {
    list2.push(obj);

    var jsonObject = list2.map(JSON.stringify);
    var uniqueSet = new Set(jsonObject);
    list2 = Array.from(uniqueSet).map(JSON.parse);
    sum2 = 0;
    for (let i of list2) {
      sum2 += i.credit;
    }

    // console.log(list1)

    document.getElementById("bowlTotal").innerHTML = sum2;
    creditData();
  }
};
var addToKeeping = (name, role, credit) => {
  obj = { name: name, role: role, credit: credit };
  if (list3.length + 1 > 1) {
    alert("You can only select maximum one player");
    return false;
  } else {
    list3.push(obj);

    var jsonObject = list3.map(JSON.stringify);
    var uniqueSet = new Set(jsonObject);
    list3 = Array.from(uniqueSet).map(JSON.parse);
    sum3 = 0;
    for (let i of list3) {
      sum3 += i.credit;
    }
    // console.log(list1)

    document.getElementById("keepingTotal").innerHTML = sum3;
    creditData();
  }
};

var summary = () => {
  newArr = [...list1, ...list2, ...list3];

  document.getElementById("secondteam").disabled = false;
  let card = "";
  for (let i of newArr) {
    card += `<div class="card m-3 bg-secondary text-light" style="width: 18rem;">
            <div class="card-body">
                <p class="card-text"><strong>Name:-</strong> ${i.name}</p>
                <p class="card-text"><strong>Credit:-</strong> ${i.credit}</p>
                <p class="card-text"><strong>PlayingRole:-</strong> ${i.role}</p>
                
                </div>
                </div>`;
  }

  document.getElementById("card").innerHTML = card;
  creditData();
  makeCaptain1();
  makeVCaptain1();

  filteredArray = players.filter(
    (item1) => !newArr.some((item2) => item2.name === item1.name)
  );
};
var creditData = () => {
  var teamList = [...list1, ...list2, ...list3];
  grandTotal = 0;

  // console.log(teamList);
  for (let i of teamList) {
    grandTotal = grandTotal + i.credit;
  }
  //   if (grandTotal > 100) {
  //     alert("Maximum Credit is 100. Please recreate your team");
  //   }

  document.getElementById("creditTotal").innerHTML = grandTotal;
};

var removeToBat = (name, role, credit) => {
  if (list1.length == 0) {
    alert("Batsman list is empty");
  } else {
    let obj1 = {
      name: name,
      role: role,
      credit: credit,
    };
    let index = list1.findIndex((obj) => {
      return obj.name === obj1.name;
    });
    if (index == -1) {
      alert("Player  is not available in the Batsman List");
    } else {
      list1.splice(index, 1);
      sum1 = sum1 - obj1.credit;
    }

    document.getElementById("batTotal").innerHTML = sum1;
    creditData();
  }
};

var removeToBowl = (name, role, credit) => {
  if (list2.length == 0) {
    alert("Bowler List is empty");
  } else {
    let obj1 = {
      name: name,
      role: role,
      credit: credit,
    };
    let index = list2.findIndex((obj) => {
      return obj.name === obj1.name;
    });
    if (index == -1) {
      alert("Player  is not available in Bowler List");
    } else {
      list2.splice(index, 1);
      sum2 = sum2 - obj1.credit;
    }

    document.getElementById("bowlTotal").innerHTML = sum2;
    creditData();
  }
};

var removeToKeeping = (name, role, credit) => {
  if (list3.length == 0) {
    alert("Keeping List is empty");
  } else {
    let obj1 = {
      name: name,
      role: role,
      credit: credit,
    };
    let index = list3.findIndex((obj) => {
      return obj.name === obj1.name;
    });
    if (index == -1) {
      alert("Player is not available in the Keeping List");
    } else {
      list3.splice(index, 1);
      sum3 = sum3 - obj1.credit;
    }

    document.getElementById("keepingTotal").innerHTML = sum3;
    creditData();
  }
};
makeCaptain1 = () => {
  document.getElementById("chooseC").style.display = "block";
  let option = "";
  gamer[0] = [];
  newArr = [...list1, ...list2, ...list3];
  gamer[0].push(newArr);
  // console.log(gamer[0]);
  for (let i of newArr) {
    option += ` 
      <option value="${i.name}">${i.name}</option>
      `;
  }
  document.getElementById("captain1").innerHTML = `${option}`;
};
var makeVCaptain1 = () => {
  document.getElementById("chooseVC").style.display = "block";
  let option = "";
  newArr = [...list1, ...list2, ...list3];
  for (let i of newArr) {
    option += ` 
      <option value="${i.name}">${i.name}</option>
      `;
  }
  document.getElementById("vCaptain1").innerHTML = `${option}`;
};
var captainName1;
var vCaptainName1;
var chooseCaptain1 = (value) => {
  if (value == vCaptainName1) {
    alert(`You can't select same player as Captain and Vice-Captain`);
    return false;
  } else {
    captainName1 = value;
    // console.log(captainName1);
  }
};
var chooseVCaptain1 = (value) => {
  if (value == captainName1) {
    alert(`You can't select same player as Captain and Vice-Captain`);
    return false;
  } else {
    vCaptainName1 = value;
    // console.log(vCaptainName1);
  }
};

var secondTeam = () => {
  if (grandTotal > 100) {
    alert("Maximum Credit is 100. Please recreate your team");
    return false;
  }
  if (list1.length + list2.length + list3.length != 11) {
    alert(
      `11 Players must be selected (${
        11 - (list1.length + list2.length + list3.length)
      } remaining)`
    );

    return false;
  }
  if (captainName1 == null || vCaptainName1 == null) {
    alert(`Please Select Captain & Vice-Captain First`);
    return false;
  }
  document.getElementById("team").style.display = "none";
  document.getElementById("Toss").disabled = true;
  document.getElementById("team1").style.display = "block";
  document.getElementById(
    "teamName1"
  ).innerHTML = `${gamer[1].toUpperCase()} Create your team<br><br>`;
};
var bat1 = () => {
  var card = "";
  newArr = [...list1, ...list2, ...list3];
  filteredArray = players.filter(
    (item1) => !newArr.some((item2) => item2.name === item1.name)
  );
  // console.log(filteredArray);
  for (let i of filteredArray) {
    if (i.playingRole == "Batsman") {
      card += `<div class="card m-3   bg-secondary text-light" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Name: ${i.name}</h5>
<p class="card-text">Role: ${i.playingRole}</p>
<p class="card-text">Credit: ${i.credit}</p>
<button class="btn btn-primary"  onclick="addToBat1('${i.name}','${i.playingRole}',${i.credit})">Select</button>

<button class="btn btn-danger"  onclick="removeToBat1('${i.name}','${i.playingRole}',${i.credit})">Remove</button>
</div>
</div>`;
    }
  }
  document.getElementById("card1").innerHTML = card;
};

var bowl1 = () => {
  var card = "";
  newArr = [...list1, ...list2, ...list3];
  filteredArray = players.filter(
    (item1) => !newArr.some((item2) => item2.name === item1.name)
  );

  for (let i of filteredArray) {
    if (i.playingRole == "Bowler") {
      card += `<div class="card m-3  bg-warning text-dark" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Name: ${i.name}</h5>
<p class="card-text">Role: ${i.playingRole}</p>
<p class="card-text">Credit: ${i.credit}</p>
<button class="btn btn-primary bowl"  onclick="addToBowl1('${i.name}','${i.playingRole}',${i.credit})">Select</button>
<button class="btn btn-danger"  onclick="removeToBowl1('${i.name}','${i.playingRole}',${i.credit})">Remove</button>
</div>
</div>`;
    }
  }
  document.getElementById("card1").innerHTML = card;
};

var keeping1 = () => {
  var card = "";
  newArr = [...list1, ...list2, ...list3];
  filteredArray = players.filter(
    (item1) => !newArr.some((item2) => item2.name === item1.name)
  );

  for (let i of filteredArray) {
    if (i.playingRole == "Wicketkeeper") {
      card += `<div class="card m-3  bg-info text-dark" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Name: ${i.name}</h5>
<p class="card-text">Role: ${i.playingRole}</p>
<p class="card-text">Credit: ${i.credit}</p>
<button class="btn btn-primary bowl"  onclick="addToKeeping1('${i.name}','${i.playingRole}',${i.credit})">Select</button>
<button class="btn btn-danger"  onclick="removeToKeeping1('${i.name}','${i.playingRole}',${i.credit})">Remove</button>
</div>
</div>`;
    }
  }
  document.getElementById("card1").innerHTML = card;
};

var addToBat1 = (name, role, credit) => {
  obj = { name: name, role: role, credit: credit };
  if (listTeam1.length + 1 > 5) {
    alert("You can only select maximum five player");
    return false;
  } else {
    listTeam1.push(obj);

    var jsonObject = listTeam1.map(JSON.stringify);
    var uniqueSet = new Set(jsonObject);
    listTeam1 = Array.from(uniqueSet).map(JSON.parse);
    sumTeam1 = 0;
    for (let i of listTeam1) {
      sumTeam1 += i.credit;
    }

    // console.log(list1)

    document.getElementById("batTotal1").innerHTML = sumTeam1;
    creditData1();
  }
};

var addToBowl1 = (name, role, credit) => {
  obj = { name: name, role: role, credit: credit };
  if (listTeam2.length + 1 > 5) {
    alert("You can only select maximum five player");
    return false;
  } else {
    listTeam2.push(obj);

    var jsonObject = listTeam2.map(JSON.stringify);
    var uniqueSet = new Set(jsonObject);
    listTeam2 = Array.from(uniqueSet).map(JSON.parse);
    sumTeam2 = 0;
    for (let i of listTeam2) {
      sumTeam2 += i.credit;
    }

    // console.log(list1)

    document.getElementById("bowlTotal1").innerHTML = sumTeam2;
    creditData1();
  }
};
var addToKeeping1 = (name, role, credit) => {
  obj = { name: name, role: role, credit: credit };
  if (listTeam3.length + 1 > 1) {
    alert("You can only select maximum one player");
    return false;
  } else {
    listTeam3.push(obj);

    var jsonObject = listTeam3.map(JSON.stringify);
    var uniqueSet = new Set(jsonObject);
    listTeam3 = Array.from(uniqueSet).map(JSON.parse);
    sumTeam3 = 0;
    for (let i of listTeam3) {
      sumTeam3 += i.credit;
    }

    // console.log(list1)

    document.getElementById("keepingTotal1").innerHTML = sumTeam3;
    creditData1();
  }
};
var summary1 = () => {
  newArr1 = [...listTeam1, ...listTeam2, ...listTeam3];

  // console.log(filteredArray)

  grandTotal1 = 0;
  // console.log(listArr);
  // let point = "";
  let card = "";
  for (let i of newArr1) {
    card += `<div class="card m-3 bg-secondary text-light" style="width: 18rem;">
<div class="card-body">
<p class="card-text"><strong>Name:-</strong> ${i.name}</p>
<p class="card-text"><strong>Credit:-</strong> ${i.credit}</p>
<p class="card-text"><strong>PlayingRole:-</strong> ${i.role}</p>

</div>
</div>`;
  }

  document.getElementById("card1").innerHTML = card;
  creditData1();
  makeCaptain2();
  makeVCaptain2();

  filteredArray = players.filter(
    (item1) => !newArr.some((item2) => item2.name === item1.name)
  );
};

var creditData1 = () => {
  var teamList1 = [...listTeam1, ...listTeam2, ...listTeam3];
  grandTotal1 = 0;

  let p = "";
  // console.log(teamList);
  for (let i of teamList1) {
    grandTotal1 = grandTotal1 + i.credit;
  }

  document.getElementById("creditTotal1").innerHTML = grandTotal1;
};

var removeToBat1 = (name, role, credit) => {
  if (listTeam1.length == 0) {
    alert("Batsman list is empty");
  } else {
    let obj1 = {
      name: name,
      role: role,
      credit: credit,
    };
    let index = listTeam1.findIndex((obj) => {
      return obj.name === obj1.name;
    });
    if (index == -1) {
      alert("Player  is not available in the Batsman List");
    } else {
      listTeam1.splice(index, 1);
      sumTeam1 = sumTeam1 - obj1.credit;
    }

    document.getElementById("batTotal1").innerHTML = sumTeam1;
    creditData1();
  }
};

var removeToBowl1 = (name, role, credit) => {
  if (listTeam2.length == 0) {
    alert("Bowler List is empty");
  } else {
    let obj1 = {
      name: name,
      role: role,
      credit: credit,
    };
    let index = listTeam2.findIndex((obj) => {
      return obj.name === obj1.name;
    });
    if (index == -1) {
      alert("Player  is not available in Bowler List");
    } else {
      listTeam2.splice(index, 1);
      sumTeam2 = sumTeam2 - obj1.credit;
    }

    document.getElementById("bowlTotal1").innerHTML = sumTeam2;
    creditData1();
  }
};

var removeToKeeping1 = (name, role, credit) => {
  if (listTeam3.length == 0) {
    alert("Keeping List is empty");
  } else {
    let obj1 = {
      name: name,
      role: role,
      credit: credit,
    };
    let index = listTeam3.findIndex((obj) => {
      return obj.name === obj1.name;
    });
    if (index == -1) {
      alert("Player is not available in the Keeping List");
    } else {
      listTeam3.splice(index, 1);
      sumTeam3 = sumTeam3 - obj1.credit;
    }

    document.getElementById("keepingTotal1").innerHTML = sumTeam3;
    creditData1();
  }
};
makeCaptain2 = () => {
  document.getElementById("chooseC2").style.display = "block";
  let option = "";
  gamer[1] = [];
  newArr = [...listTeam1, ...listTeam2, ...listTeam3];
  gamer[1].push(newArr);
  // console.log(gamer[1]);
  for (let i of newArr) {
    option += ` 
      <option value="${i.name}">${i.name}</option>
      `;
  }
  document.getElementById("captain2").innerHTML = `${option}`;
};
var makeVCaptain2 = () => {
  document.getElementById("chooseVC2").style.display = "block";
  let option = "";
  newArr = [...listTeam1, ...listTeam2, ...listTeam3];
  for (let i of newArr) {
    option += ` 
      <option value="${i.name}">${i.name}</option>
      `;
  }
  document.getElementById("vCaptain2").innerHTML = `${option}`;
  document.getElementById("teamPre").style.display = "block";
};
var captainName2;
var vCaptainName2;
var chooseCaptain2 = (value) => {
  if (value == vCaptainName2) {
    alert(`You can't select same player as Captain and Vice-Captain`);
    return false;
  } else {
    captainName2 = value;
    // console.log(captainName2);
  }
};
var chooseVCaptain2 = (value) => {
  if (value == captainName2) {
    alert(`You can't select same player as Captain and Vice-Captain`);
    return false;
  } else {
    vCaptainName2 = value;
    // console.log(vCaptainName2);
  }
};

var teamPreview = () => {
  if (grandTotal1 > 100) {
    alert("Maximum Credit is 100. Please recreate your team");
    return false;
  }
  if (listTeam1.length + listTeam2.length + listTeam3.length != 11) {
    alert(
      `11 Players must be selected (${
        11 - (listTeam1.length + listTeam2.length + listTeam3.length)
      } remaining)`
    );
    return false;
  }
  if (captainName2 == null || vCaptainName2 == null) {
    alert(`Please Select Captain & Vice-Captain First`);
    return false;
  }
  document.getElementById("team1").style.display = "none";
  document.getElementById("teamSummary").style.display = "block";
  document.getElementById(
    "gamingTeam1"
  ).innerHTML = `${gamingTeam[0].toUpperCase()} Playing XI`;
  document.getElementById(
    "gamingTeam2"
  ).innerHTML = `${gamingTeam[1].toUpperCase()} Playing XI`;
  let list1 = "";
  let list2 = "";

  for (let i of gamer[0]) {
    for (let j of i) {
      // console.log(j.name)
      if (j.name == captainName1) {
        list1 += `  <li class="list-group-item list-group-item-primary">${j.name}-(C)</li>`;
      } else if (j.name == vCaptainName1) {
        list1 += `  <li class="list-group-item  list-group-item-secondary">${j.name}-(VC)</li>`;
      } else {
        list1 += `  <li class="list-group-item list-group-item-light">${j.name}</li>`;
      }
    }
  }
  for (let i of gamer[1]) {
    for (let j of i) {
      // console.log(j.name)
      if (j.name == captainName2) {
        list2 += `  <li class="list-group-item list-group-item-primary">${j.name}-(C)</li>`;
      } else if (j.name == vCaptainName2) {
        list2 += `  <li class="list-group-item  list-group-item-secondary">${j.name}-(VC)</li>`;
      } else {
        list2 += `  <li class="list-group-item list-group-item-light">${j.name}</li>`;
      }
    }
  }

  document.getElementById("playingTeam1").innerHTML = list1;
  document.getElementById("playingTeam2").innerHTML = list2;
};
var play = () => {
  document.getElementById("teamSummary").style.display = "none ";
  document.getElementById("start").style.display = "block";

  newArr = [...list1, ...list2, ...list3];
  document.getElementById("batter").value = newArr[0].name;
  newArr1 = [...listTeam1, ...listTeam2, ...listTeam3];
  document.getElementById("bowler").value = listTeam2[0].name;
  document.getElementById("scorecard").value = `${0}/${0}`;
  document.getElementById(
    "scoreTeam1"
  ).innerHTML = `${gamingTeam[0].toUpperCase()}'s Points`;
  document.getElementById(
    "scoreTeam2"
  ).innerHTML = `${gamingTeam[1].toUpperCase()}'s Points`;
  document.getElementById("displayTeam").style.display = "block";
  document.getElementById("hideTeams1").style.display = "none";
  document.getElementById("hideTeams2").style.display = "none";
};

let point1;
let point2;
var runTeam1 = 0;
var wicketCount1 = 0;
var wicketCount2 = 0;
var fourCount = 0;
var sixCount = 0;
var ind_wicket = 0;
var ind_score_bat = [];
// var ind_score_obj1 = {};
var ind_score_bowl = [];
var ind_score_obj2 = {};
var bowl_played=0
var batsman_point1=0;
var bowler_point1=0
var ind_run=0

var fourCount1 = 0;
var sixCount1 = 0;
var ind_wicket1 = 0;
var ind_score_bat1 = [];
// var ind_score_obj3 = {};
var ind_score_bowl1 = [];
var ind_score_obj4 = {};
var bowl_played1=0
var batsman_point2=0;
var bowler_point2=0
var ind_run1=0


var shot = "";
var shotType = () => {
  var randomShot = Math.floor(Math.random() * 7) + 1;
  switch (randomShot) {
    case 1:
      shot = "Single";
      point1 = 1;
      point2 = 0;
      runTeam1 += 1;
      ind_run += 1;
 
      break;
    case 2:
      shot = "Double";
      point1 = 2;
      point2 = 0;
      runTeam1 += 2;
      ind_run += 2;
      break;
    case 3:
      shot = "Three";
      point1 = 3;
      point2 = 0;
      runTeam1 += 3;
      ind_run += 3;
      break;
    case 4:
      shot = "Four";
      point1 = 5;
      point2 = 0;
      runTeam1 += 4;
      ind_run += 4;
      fourCount += 1;
      break;
    case 5:
      shot = "Six";
      point1 = 8;
      point2 = 0;
      runTeam1 += 6;
      ind_run += 6;
      sixCount += 1;
      break;
    case 6:
      shot = "Dot";
      point2 = 1;
      point1 = 0;
      runTeam1 += 0;
      break;
    case 7:
      shot = "Wicket";
      point1 = -2;
      point2 = 10;
      wicketCount1 += 1;
      ind_wicket += 1;
      break;
  }
  return shot;
};
var runTeam2 = 0;
var point3;
var point4;
var shotType1 = () => {
  var randomShot = Math.floor(Math.random() * 7) + 1;
  switch (randomShot) {
    case 1:
      shot1 = "Single";
      point3 = 1;
      point4 = 0;
      runTeam2 += 1;
      ind_run1 += 1;
      break;
    case 2:
      shot1 = "Double";
      point3 = 2;
      point4 = 0;
      runTeam2 += 2;
      ind_run1 += 2;
      break;
    case 3:
      shot1 = "Three";
      point3 = 3;
      point4 = 0;
      runTeam2 += 3;
      ind_run1 += 3;
      break;
    case 4:
      shot1 = "Four";
      point3 = 5;
      point4 = 0;
      runTeam2 += 4;
      ind_run1 += 4;
      fourCount1 += 1;
      break;
    case 5:
      shot1 = "Six";
      point3 = 8;
      point4 = 0;
      runTeam2 += 6;
      ind_run1 += 6;
      sixCount1+=1
      break;
    case 6:
      shot1 = "Dot";
      point4 = 1;
      point3 = 0;
      break;
    case 7:
      shot1 = "Wicket";
      point3 = -2;
      point4 = 10;
      wicketCount2 += 1;
      ind_wicket1 += 1;
      break;
  }
  return shot1;
};

var over = 5;
var ball = 6;
var myOver = [];
let total1 = 0;
let total2 = 0;
var currentBall = 0;
var currentOver = 0;
for (let i = 0; i < over; i++) {
  myOver[i] = new Array(ball).fill(null);
}

var count = 0;
var bowlerWicket = 0;
var hit = () => {
  bowl_played++;
  newArr = [...list1, ...list2, ...list3];

  newArr1 = [...listTeam1, ...listTeam2, ...listTeam3];

  var playedShot = shotType();
  document.getElementById("shots").value = playedShot;
  if (bowlerWicket == 10) {
    alert("Team All Out");
    return false;
  }
  let p = "";
  // console.log(bowlerWicket1);
  newArr1 = [...listTeam1, ...listTeam2, ...listTeam3];

  document.getElementById("scorecard").value = `${runTeam1}/${wicketCount1} `;
  if (currentOver < over && currentBall < ball) {
    myOver[currentOver][currentBall] = playedShot;

    // console.log(`${newArr[bowlerWicket].name}'s Run: ${ind_run}`)
    // console.log(`${newArr[bowlerWicket].name}'s Four:  ${fourCount}`)
    // console.log(`${newArr[bowlerWicket].name}'s Six count:  ${sixCount}`)
    // console.log(`${listTeam2[count].name}'s Wickets: ${ind_wicket}`)

    document.getElementById("bowler").value = listTeam2[count].name;
   
    if (newArr[bowlerWicket].name == captainName1) {
      //console.log(captainName1);
      total1 = total1 + point1 * 2;
      total2 = total2 + point2;
      batsman_point1+=point1*2;
      bowler_point1+=point2;
      // console.log(total1);
      document.getElementById("pointTeam1").value = total1;

      document.getElementById("pointTeam2").value = total2;
    } else if (newArr[bowlerWicket].name == vCaptainName1) {
      total1 = total1 + point1 * 1.5;
      total2 = total2 + point2;
      batsman_point1+=point1*1.5;
      bowler_point1+=point2;
      // console.log(total1);
      document.getElementById("pointTeam1").value = total1;

      document.getElementById("pointTeam2").value = total2;
    } else {
      total1 = total1 + point1;
      total2 = total2 + point2;
      batsman_point1+=point1;
      bowler_point1+=point2;
      // console.log(total1);
      document.getElementById("pointTeam1").value = total1;

      document.getElementById("pointTeam2").value = total2;
    }
    let ind_score_obj1 = {
      playerName: `${newArr[bowlerWicket].name}`,
      four: fourCount,
      six: sixCount,
      bowl_played:bowl_played,
      runs:ind_run,
      points:batsman_point1

  }
  let index = ind_score_bat.findIndex(obj => obj.playerName === ind_score_obj1.playerName);
  if (index !== -1) {
    ind_score_bat[index] = ind_score_obj1;
  } else {
    ind_score_bat.push(ind_score_obj1);
    
  }
  console.log(ind_score_bat)

    if (playedShot != "Wicket") {
      p += ` <p class="card-text text-center">Over-[${currentOver}.${
        currentBall + 1
      }] :  ${
        myOver[currentOver][currentBall]
      } , ${new Date().toLocaleString()}  </p>`;
      document.getElementById("batter").value = newArr[bowlerWicket].name;
    } else {
      // ind_score_obj = {
      //   playerName: `${newArr[bowlerWicket].name}`,
      //   four: fourCount,
      //   six: sixCount,
      //   bowl_played:bowl_played,
      //   runs:ind_run,
      //   points:batsman_point1
      // };
      // // console.log("player object: " + ind_score_obj);
      // ind_score_bat.push(ind_score_obj);
      // for (let i of ind_score_bat) {
      //   console.log(i);
      // }
      ind_run = 0;
      fourCount = 0;
      sixCount = 0;
      bowlerWicket++;
      bowl_played=0
      batsman_point1=0
      p += ` <p class="card-text text-danger text-center">Over-[${currentOver}.${ currentBall + 1 }] :  ${myOver[currentOver][currentBall]} , ${new Date().toLocaleString()} `;
      document.getElementById("batter").value = newArr[bowlerWicket].name;
    }
    currentBall++;
    if (currentBall === ball) {
      ind_score_obj1={bowler:listTeam2[count].name,wicket:ind_wicket,points:bowler_point1};
      ind_score_bowl.push(ind_score_obj1)
      // for(let i of ind_score_bowl){
      //   console.log(i)
      // }
      bowler_point1=0
      currentBall = 0;
      ind_wicket = 0;
      currentOver++;
      count++;
    }

    document.getElementById("table").innerHTML += p;
  } else {
    // console.log(myOver);
    document.getElementById("hitted").disabled = true;
    document.getElementById("playSecondTeam").style.display = "block";
    document.getElementById("playTeam1").style.display = "none";
    alert("1st inning is finished");
    return false;
  }

  // disableButton();
};
var disableButton = () => {
  const button = document.getElementById("hitted");
  button.disabled = true;
  button.innerText = "Wait for 5 seconds...";
  setTimeout(() => {
    button.disabled = false;
    button.innerText = "Bowl";
  }, 5000);
};

var playSecond = () => {
  document.getElementById("start").style.display = "none";
  document.getElementById("playTeam2").style.display = "block";
  document.getElementById("scorecardTeam2").value = `${0}/${0}`;
  newArr1 = [...listTeam1, ...listTeam2, ...listTeam3];
  newArr = [...list1, ...list2, ...list3];

  document.getElementById("batter1").value = newArr1[0].name;
  document.getElementById("bowler1").value = list2[0].name;
  document.getElementById(
    "playingTeamPoint1"
  ).innerHTML = `${gamingTeam[0].toUpperCase()}'s Points`;
  document.getElementById(
    "playingTeamPoint2"
  ).innerHTML = `${gamingTeam[1].toUpperCase()}'s Points`;
  document.getElementById("showScore").style.display = "block";
  document.getElementById(
    "showScoreTeam"
  ).innerHTML = `${gamingTeam[0].toUpperCase()}'s Runs`;
  document.getElementById(
    "showScoreCard"
  ).value = `${runTeam1}/${wicketCount1}`;
};

let over1 = 5;
let ball1 = 6;
let myOver1 = [];
let currentBall1 = 0;
let currentOver1 = 0;
let count1 = 0;
let bowlerWicket1 = 0;

for (let i = 0; i < over1; i++) {
  myOver1[i] = new Array(ball1).fill(null);
}

var hit1 = () => {
  newArr = [...list1, ...list2, ...list3];

  newArr1 = [...listTeam1, ...listTeam2, ...listTeam3];

  var playedShot = shotType1();
  document.getElementById("shots1").value = playedShot;
  if (bowlerWicket1 == 10) {
    alert("Team All Out");
    return false;
  }
  if (runTeam2 > runTeam1) {
    alert(`${gamingTeam[1].toUpperCase()} Successfully Run Chased`);
    document.getElementById("hitted1").disabled = true;
    document.getElementById("getWinner").style.display = "block";
    document.getElementById("inning1").style.display = "block";
    document.getElementById("inning2").style.display = "block";
    getWinnerName();
    // alert("2nd inning is finished")
    return false;
  }
  let p = "";
  // console.log(bowlerWicket);
  newArr1 = [...listTeam1, ...listTeam2, ...listTeam3];

  document.getElementById(
    "scorecardTeam2"
  ).value = `${runTeam2}/${wicketCount2} `;
  if (currentOver1 < over1 && currentBall1 < ball1) {
    myOver1[currentOver1][currentBall1] = playedShot;
    document.getElementById("bowler1").value = list2[count1].name;

    if (newArr1[bowlerWicket1].name == captainName2) {
      console.log(captainName2);
      total2 = total2 + point3 * 2;
      total1 = total1 + point4;
      batsman_point2+=point3*2;
      bowler_point2+=point4;
      // console.log(total1);
      document.getElementById("playPointTeam1").value = total1;

      document.getElementById("playPointTeam2").value = total2;
    } else if (newArr1[bowlerWicket].name == vCaptainName2) {
      total2 = total2 + point3 * 1.5;
      total1 = total1 + point4;
      batsman_point2+=point3*1.5;
      bowler_point2+=point4;
      // console.log(total1);
      document.getElementById("playPointTeam1").value = total1;

      document.getElementById("playPointTeam2").value = total2;
    } else {
      total2 = total2 + point3;
      total1 = total1 + point4;
      batsman_point2+=point3;
      bowler_point2+=point4;
      // console.log(total1);
      document.getElementById("playPointTeam1").value = total1;

      document.getElementById("playPointTeam2").value = total2;
    }
    let ind_score_obj3 = {
      playerName: `${newArr1[bowlerWicket1].name}`,
      four: fourCount1,
      six: sixCount1,
      bowl_played:bowl_played1,
      runs:ind_run1,
      points:batsman_point2
    };
    let index = ind_score_bat1.findIndex(obj => obj.playerName === ind_score_obj3.playerName);
  if (index !== -1) {
    ind_score_bat1[index] = ind_score_obj3;
  } else {
    ind_score_bat1.push(ind_score_obj3);
  }


    if (playedShot != "Wicket") {
      p += ` <p class="card-text text-center">Over-[${currentOver1}.${
        currentBall1 + 1
      }] :  ${
        myOver1[currentOver1][currentBall1]
      } , ${new Date().toLocaleString()}  </p>`;
      document.getElementById("batter1").value = newArr1[bowlerWicket1].name;
    } else {
     
      ind_run1 = 0;
      fourCount1 = 0;
      sixCount1 = 0;
      bowlerWicket1++;
      bowl_played1=0
      batsman_point2=0

      
      p += ` <p class="card-text text-danger text-center">Over-[${currentOver1}.${currentBall1 + 1}] :  ${ myOver1[currentOver1][currentBall1]} , ${new Date().toLocaleString()} `;  document.getElementById("batter1").value = newArr1[bowlerWicket1].name;}
    currentBall1++;
    if (currentBall1 === ball1) {
     
    
      ind_score_obj4={bowler:list2[count1].name,wicket:ind_wicket1,points:bowler_point2};
      ind_score_bowl1.push(ind_score_obj4)
      // for(let i of ind_score_bowl1){
      //   console.log(i)
      // }
      bowler_point2=0
      currentBall1 = 0;
      ind_wicket1 = 0;
      currentOver1++;
      count1++;

    }
 

    document.getElementById("table1").innerHTML += p;
  } else {
    // console.log(myOver);
    document.getElementById("inning1").style.display = "block";
    document.getElementById("inning2").style.display = "block";
    document.getElementById("hitted1").disabled = true;
    document.getElementById("getWinner").style.display = "block";

    getWinnerName();
    alert("2nd inning is finished");
    return false;
  }

  // disableButton1();
};
var disableButton1 = () => {
  const button = document.getElementById("hitted1");
  button.disabled = true;
  button.innerText = "Wait for 5 seconds...";
  setTimeout(() => {
    button.disabled = false;
    button.innerText = "Bowl";
  }, 5000);
};

var getWinnerName = () => {
  if (total1 > total2) {
    console.log(gamingTeam[0].toUpperCase());
    document.getElementById(
      "winnerData"
    ).innerHTML = `${gamingTeam[0].toUpperCase()} Wins`;
  } else {
    console.log(gamingTeam[1].toUpperCase());
    document.getElementById(
      "winnerData"
    ).innerHTML = `${gamingTeam[1].toUpperCase()} Wins`;
  }
};

var displayTeam1 = () => {
  document.getElementById("hideTeams1").style.display = "inline-block";
  document.getElementById("displayTeams1").style.display = "none";
  document.getElementById("showTeam1").style.display = "block";
  let list1 = "";

  for (let i of gamer[0]) {
    for (let j of i) {
      // console.log(j.name)
      if (j.name == captainName1) {
        list1 += `  <li class="list-group-item list-group-item-primary">${j.name}-(C)</li>`;
      } else if (j.name == vCaptainName1) {
        list1 += `  <li class="list-group-item  list-group-item-secondary">${j.name}-(VC)</li>`;
      } else {
        list1 += `  <li class="list-group-item list-group-item-light">${j.name}</li>`;
      }
    }
  }
  document.getElementById("playsTeam1").innerHTML = list1;
};
var displayTeam2 = () => {
  document.getElementById("hideTeams2").style.display = "inline-block";
  document.getElementById("displayTeams2").style.display = "none";
  document.getElementById("showTeam2").style.display = "block";
  let list1 = "";
  for (let i of gamer[1]) {
    for (let j of i) {
      // console.log(j.name)
      if (j.name == captainName2) {
        list1 += `  <li class="list-group-item list-group-item-primary">${j.name}-(C)</li>`;
      } else if (j.name == vCaptainName2) {
        list1 += `  <li class="list-group-item  list-group-item-secondary">${j.name}-(VC)</li>`;
      } else {
        list1 += `  <li class="list-group-item list-group-item-light">${j.name}</li>`;
      }
    }
  }
  document.getElementById("playsTeam2").innerHTML = list1;
};
var hideTeam1 = () => {
  document.getElementById("hideTeams1").style.display = "none";
  document.getElementById("showTeam1").style.display = "none";
  document.getElementById("displayTeams1").style.display = "inline-block";
};
var hideTeam2 = () => {
  document.getElementById("hideTeams2").style.display = "none";
  document.getElementById("showTeam2").style.display = "none";
  document.getElementById("displayTeams2").style.display = "inline-block";
};

var newGame = () => {
  location.reload();
};


var  getSummary1=()=> {
  document.getElementById("inning1").style.display="none"
  document.getElementById("hideInning1").style.display="block"
  document.getElementById("hideTable1").style.display="block"
  let table = ` <thead>
        <tr>
          <th scope="col">Batter</th>
          <th scope="col">Runs</th>
          <th scope="col">4s</th>
          <th scope="col">6s</th>
          <th scope="col">Bowl Played</th>
          <th scope="col">Points</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">`
  let tr = "";
  for (let i of ind_score_bat) {
   
      tr = tr + "<tr>";
       tr = tr + `<td>${i.playerName}</td>`;
       tr += `<td>${i.runs}</td>`;
       tr += `<td>${i.four}</td>`;
       tr += `<td>${i.six}</td>`;
       tr += `<td>${i.bowl_played}</td>`;
       tr += `<td>${i.points}</td>`;
       tr = tr + "</tr>";
  };
  table = table + tr + "</tbody>";
  document.getElementById("tab1").innerHTML = table;

  let table2 = ` <thead>
        <tr>
          <th scope="col">Bowler</th>
          <th scope="col">Wickets</th>
          <th scope="col">Point</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">`
  let tr1 = "";
  for (let i of ind_score_bowl) {
      tr1 = tr1 + "<tr>";
       tr1 = tr1 + `<td>${i.bowler}</td>`;
       tr1 += `<td>${i.wicket}</td>`;
       tr1 += `<td>${i.points}</td>`;
       tr1 = tr1 + "</tr>";
  };
  table2 = table2 + tr1 + "</tbody>";
  document.getElementById("tab2").innerHTML = table2;
}

var  getSummary2=()=> {
  document.getElementById("inning2").style.display="none"
  document.getElementById("hideInning2").style.display="block"
  document.getElementById("hideTable2").style.display="block"

  let table = ` <thead>
        <tr>
        <th scope="col">Batter</th>
        <th scope="col">Runs</th>
        <th scope="col">4s</th>
        <th scope="col">6s</th>
        <th scope="col">Bowl Played</th>
        <th scope="col">Points</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">`
  let tr = "";
  for (let i of ind_score_bat1) {
      tr = tr + "<tr>";
       tr = tr + `<td>${i.playerName}</td>`;
       tr += `<td>${i.runs}</td>`;
       tr += `<td>${i.four}</td>`;
       tr += `<td>${i.six}</td>`;
       tr += `<td>${i.bowl_played}</td>`;
       tr += `<td>${i.points}</td>`;
       tr = tr + "</tr>";
  };
  table = table + tr + "</tbody>";
  document.getElementById("tab3").innerHTML = table;

  let table2 = ` <thead>
        <tr>
          <th scope="col">Bowler</th>
          <th scope="col">Wickets</th>
          <th scope="col">Points</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">`
  let tr1 = "";
  for (let i of ind_score_bowl1) {
      tr1 = tr1 + "<tr>";
       tr1 = tr1 + `<td>${i.bowler}</td>`;
       tr1 += `<td>${i.wicket}</td>`;
       tr1 += `<td>${i.points}</td>`;
       tr1 = tr1 + "</tr>";
  };
  table2 = table2 + tr1 + "</tbody>";
  document.getElementById("tab4").innerHTML = table2;

}

var hideSummary1=()=>{
  document.getElementById("inning1").style.display="block"
  document.getElementById("hideInning1").style.display="none";
  document.getElementById("hideTable1").style.display="none"
}
var hideSummary2=()=>{
  document.getElementById("inning2").style.display="block"
  document.getElementById("hideInning2").style.display="none";
  document.getElementById("hideTable2").style.display="none"
}
