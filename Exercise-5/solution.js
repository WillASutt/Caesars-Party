const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// Step 1:
guests.unshift("BRUTUS");

// Question 1:
// You can check the first value of the array with the index [0]
guests[0];

// Step 2:
guests.push("AUGUSTUS", "LUCIA");

// Step 3:
guests.indexOf("SPARTACUS");

// Question 2:
// The value of spartacusIndex would be -1 if "SPARTACUS" wasn't on the list.

// Step 4:
guests.indexOf("CASSIUS");
guests.pop(3);

// Step 5:
const specialInvite = guests.slice(0, 3);

// Step 6:
const favoriteGuest = guests.slice(0, 1);
const otherGuests = guests.slice(1);
otherGuests.sort();
const guestList = favoriteGuest.concat(otherGuests);






