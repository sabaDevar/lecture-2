// Author: Saba Aptsiauri
// Date: 2025-05-10

// 🔹 Variable declarations
let firstName = "Saba";
let lastName = "Aptsiauri";
const email = "saba@example.com";
let phoneNumber = "+995555123456";
let age = 17;
let hobby = "Weightlifting";
const isStudent = true;

// 🔹 Logging initial values
console.log("🟩 Initial Information:");
console.log(`First Name : ${firstName}`);
console.log(`Last Name  : ${lastName}`);
console.log(`Email      : ${email}`);
console.log(`Phone      : ${phoneNumber}`);
console.log(`Age        : ${age}`);
console.log(`Hobby      : ${hobby}`);
console.log(`Is Student : ${isStudent}`);

// 🔹 Update some values
hobby = "Coding";     // Switched hobby
age += 1;             // Increased age by 1

// 🔹 Logging updated values
console.log("\n🟦 Updated Information:");
console.log(`New Hobby  : ${hobby}`);
console.log(`New Age    : ${age}`);

/*
📝 Code Explanation:
1. Used template literals (``) for cleaner string interpolation.
2. Grouped logs for better readability in the console.
3. Used `const` for values that don't change, and `let` where updates are needed.
*/
