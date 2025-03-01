// Higher-Order Function: Creates a dynamic form validator
function createValidator(rules) {
  return function (formData) {
    const errors = {};

    for (const field in rules) {
      for (const rule of rules[field]) {
        const error = rule(formData[field]);
        if (error) {
          errors[field] = error;
          break; // Stop at first error per field
        }
      }
    }

    return errors;
  };
}

// Validation Rules
const required = (value) => (!value ? "This field is required" : null);
const minLength = (min) => (value) =>
  value.length < min ? `Must be at least ${min} characters` : null;
const isEmail = (value) =>
  !/^\S+@\S+\.\S+$/.test(value) ? "Invalid email address" : null;

// Define validation rules for a form
const formValidator = createValidator({
  username: [required, minLength(3)],
  email: [required, isEmail],
  password: [required, minLength(6)],
});

// Example Form Data
const formData1 = {
  username: "Jo",
  email: "not-an-email",
  password: "123",
};

const formData2 = {
  username: "JohnDoe",
  email: "john@example.com",
  password: "securePass",
};

// Validate forms
console.log("Form 1 Errors:", formValidator(formData1));
console.log("Form 2 Errors:", formValidator(formData2)); // Should return an empty object
