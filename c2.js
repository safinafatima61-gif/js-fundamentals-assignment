// ===============================
// USER VALIDATION SYSTEM
// ===============================

function validateUser(data) {
  const errors = [];

  // Destructure safely (no mutation)
  const name = data.name;
  const email = data.email;
  const ageInput = data.age;
  const password = data.password;
  const roleInput = data.role;

  // =========================
  // NAME VALIDATION
  // =========================
  if (typeof name !== "string" || name.trim() === "") {
    errors.push("Name cannot be empty");
  }

  // =========================
  // EMAIL VALIDATION
  // =========================
  if (typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
    errors.push("Invalid email format");
  }

  // =========================
  // AGE VALIDATION
  // =========================
  const age = Number(ageInput);

  if (ageInput === undefined || ageInput === null || isNaN(age)) {
    errors.push("Age must be a valid number");
  } else if (age < 13 || age > 120) {
    errors.push("Age must be 13-120");
  }

  // =========================
  // PASSWORD VALIDATION
  // =========================
  if (typeof password !== "string" || password.length < 8) {
    errors.push("Password min 8 chars");
  }

  // =========================
  // ROLE VALIDATION
  // =========================
  const allowedRoles = ["admin", "editor", "user"];
  const role = roleInput ?? "user";

  if (roleInput && !allowedRoles.includes(roleInput)) {
    errors.push("Invalid role");
  }

  // =========================
  // FINAL RESPONSE
  // =========================
  if (errors.length > 0) {
    return {
      valid: false,
      errors: errors
    };
  }

  return {
    valid: true,
    user: {
      name: name,
      email: email,
      age: age,
      password: password,
      role: role
    }
  };
}


// ===============================
// TEST CASES (REQUIRED)
// ===============================

console.log(
  "Test 1:",
  validateUser({
    name: "Ali",
    email: "ali@test.com",
    age: "25",
    password: "pass1234"
  })
);

console.log(
  "Test 2:",
  validateUser({
    name: "",
    email: "notanemail",
    age: 10,
    password: "abc"
  })
);

console.log(
  "Test 3:",
  validateUser({
    name: "Sara",
    email: "sara@x.io",
    age: 30,
    password: "secure99",
    role: "admin"
  })
);

console.log(
  "Test 4:",
  validateUser({
    name: "X",
    email: "x@x.com",
    age: "17abc",
    password: "hello123"
  })
);