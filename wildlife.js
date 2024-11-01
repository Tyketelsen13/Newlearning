/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function logAnimalSighting (...animals) {
	console.log(`Animal sightings: ${animals}`);
}
logAnimalSighting("Elephant", "Rhino", "Tiger");
/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
console.log(`Combined Habitats: ${combinedHabitats}`);
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
const updateRhinoStatus = {
	...rhinoStatus,
	population: 520,
	status: "Vulnerable"
};
console.log(`Upadted Rhino Status: ${updatedRhinoStatus}`);
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
const lionGeneticProfile = {
	...lionProfile,
    genetics: "Diverse"
};
console.log{`Original Lion Profile: ${lionProfile}`};
console.log(`Lion Genetic Profile: ${lionGeneticProfile}`);
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations: Changing a property in copied onject will not affect the original obj because the spread operator creates only copies of the object
 * TODO: Explain here.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};

// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
const updatedEcosystemHealth = {...ecosystemHealth, foodSupply; {...ecosystemHealth, foodSupply, herbivores: "plentiful"}};
console.log("Original Ecosystem Health:", ecosystemHealth);
console.log("Updated Ecosystem Health:", updatedEcosystemHealth);
/*
 * Observations:
 * TODO: Explain here. Changing a nested property as a copy also affects the orignal because the spread operator does a light copy which means nested objects are not duplicated but still reference the same object through memory.
 */
