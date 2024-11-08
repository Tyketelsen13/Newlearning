const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

// Sort users by points in descending order.
const sortedUsers = users.map(function(user);
return {
	fullName: `${user.firstName} ${user.lastName}`, memberShipStatus: user.points > 100 ? "Premium" : "Standard"
};
console.log(sortedUsers);