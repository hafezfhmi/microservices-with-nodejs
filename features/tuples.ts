const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

// manually creating a tuple
const pepsi: [string, boolean, number] = ["brown", true, 40];

// using type alias to create tuple
const coke: Drink = ["brown", true, 40];
