function validateUser(data) {
  const errors = [];

  // Destructure safely (no mutation of original object)
  const name = data?.name;
  const email = data?.email;
  const rawAge = data?.age;
  const password = data?.password;
  const role = data?.role;

  // ---------- NAME ----------
  if (typeof name !== "string" || name.trim() === "") {
    errors.push("Name cannot be empty");
  }

  // ---------- EMAIL ----------
  if (typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
    errors.push("Invalid email format");
  }

  // ---------- AGE (coercion required) ----------
  const age = Number(rawAge);

  if (rawAge === undefined || rawAge === null || rawAge === "") {
    errors.push("Age is required");
  } else if (isNaN(age)) {
    errors.push("Age must be a valid number");
  } else if (age < 13 || age > 120) {
    errors.push("Age must be 13-120");
  }

  // ---------- PASSWORD ----------
  if (typeof password !== "string" || password.length < 8) {
    errors.push("Password min 8 chars");
  }

  // ---------- ROLE ----------
  const allowedRoles = ["admin", "editor", "user"];
  const finalRole = role ?? "user";

  if (role !== undefined && !allowedRoles.includes(role)) {
    errors.push("Role must be admin, editor, or user");
  }

  // ---------- FINAL RESPONSE ----------
  if (errors.length > 0) {
    return {
      valid: false,
      errors: errors
    };
  }

  return {
    valid: true,
    user: {
      name,
      email,
      age,
      password,
      role: finalRole
    }
  };
}


// ---------------- TEST CASES ----------------

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