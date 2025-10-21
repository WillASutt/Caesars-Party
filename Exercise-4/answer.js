const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

// Step 1:
let locationStart = "";

if (emblemClue1 === "Eagle") {
    locationStart = "Forum";
}
else if (emblemClue1 === "Lion") {
    locationStart = "Colosseum";
}
else {
    locationStart = "Villa";
}

// Step 2:
if (emblemClue2 === "Laurel" && locationStart === "Forum") {
    locationStart.append(" of Augustus");
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa") {
    locationStart.append(" of Pompey");
}

// Step 3:
switch (emblemClue3) {
    case 7:
        locationStart.append(" North");
        break;
    case 3:
        locationStart.append(" South");
        break;
    case 9:
        locationStart.append(" East");
        break;
    case 4:
        locationStart.append(" West");
        break;
}

// Question:
// Be careful using (==) instead of (===) because double equals compares the data type of two values instead of the strict value. Where as, triple equals compares both the data type and the value.