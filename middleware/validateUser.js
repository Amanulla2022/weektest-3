function validateUser(req, res, next) {
  const { firstName, lastName, password, email, phoneNumber } = req.body;

  // Validate first name and last name capitalization
  const nameRegex = /^[A-Z][a-z]*$/;
  if (!nameRegex.test(firstName)) {
    return next(new Error("First name must start with a capital letter."));
  }
  if (!nameRegex.test(lastName)) {
    return next(new Error("Last name must start with a capital letter."));
  }

  // Validate password complexity
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
  if (!passwordRegex.test(password)) {
    return next(
      new Error(
        "Password must be at least 8 characters long, and include at least one uppercase letter, one numeric digit, and one special character."
      )
    );
  }

  // Validate email address
  if (!email.includes("@")) {
    return next(new Error('Email must contain an "@" symbol.'));
  }

  // Validate phone number length
  if (phoneNumber.length < 10) {
    return next(new Error("Phone number must be at least 10 digits long."));
  }

  next();
}

module.exports = validateUser;
