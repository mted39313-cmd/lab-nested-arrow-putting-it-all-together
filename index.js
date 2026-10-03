/**
 * Creates a secure login tracker function for an e-commerce user.
 * 
 * @param {Object} userInfo - An object containing 'username' and 'password'.
 * @returns {Function} An inner arrow function that handles individual login attempts.
 */
function createLoginTracker(userInfo) {
    // Step 1: Initialize attemptCount to 0 in the outer scope
    let attemptCount = 0;

    // Step 2: Define the nested arrow function to handle each login attempt
    const loginAttempt = (passwordAttempt) => {
        // Check if the account is already locked due to exceeding 3 attempts
        if (attemptCount >= 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Increment the attempt count each time a login is tried
        attemptCount++;

        // Check if the password attempt matches the stored user password
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            // Return failure message along with the current attempt number
            return `Attempt ${attemptCount}: Login failed`;
        }
    };

    // Return the inner arrow function so it can be invoked externally
    return loginAttempt;
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};