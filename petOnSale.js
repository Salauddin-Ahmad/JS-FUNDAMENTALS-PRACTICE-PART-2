// You have a Pet enum and an array of incoming pet orders.
// Each order contains a pet: string and quantity: number.
// You need to:

// Filter out invalid pets (not in the enum).

// Convert valid strings to enum values.

// Get total quantity of orders for the pet that is on sale.

enum Pet {
  Hamster = 'Hamster',
  Rat = 'Rat',
  Chinchilla = 'Chinchilla',
  Tarantula = 'Tarantula',
}

const petOnSale: Pet = Pet.Chinchilla;

const rawOrders = [
  { pet: 'Rat', quantity: 2 },
  { pet: 'Chinchilla', quantity: 5 },
  { pet: 'Hamster', quantity: 3 },
  { pet: 'Dog', quantity: 4 },            // invalid pet
  { pet: 'Chinchilla', quantity: 7 },
  { pet: 'Chinchilla', quantity: -1 },    // invalid quantity
];

// Step 1: Create a type guard to validate pet strings
function isValidPet(pet: string): pet is Pet {
  return Object.values(Pet).includes(pet as Pet);
}

// Step 2: Filter valid orders and parse into typed values
type Order = { pet: Pet; quantity: number };

const validOrders: Order[] = rawOrders.filter(
  (order): order is Order =>
    isValidPet(order.pet) && Number.isInteger(order.quantity) && order.quantity > 0
);

// Step 3: Aggregate quantity of pet on sale
const totalSold = validOrders
  .filter(order => order.pet === petOnSale)
  .reduce((sum, order) => sum + order.quantity, 0);

console.log(`Total ${petOnSale} sold:`, totalSold);
