// Mock authentication service - this would be replaced with a real API in production
const users = [
  // Demo user removed - users must register with actual details
];

export const loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      
      if (user) {
        // Return user without the password
        const { password, ...userWithoutPassword } = user;
        resolve(userWithoutPassword);
      } else {
        reject(new Error('Invalid username or password'));
      }
    }, 500);
  });
};

export const registerUser = (username, password, name) => {
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      // Check if username already exists
      if (users.some(user => user.username === username)) {
        reject(new Error('Username already exists'));
        return;
      }
      
      // Create new user
      const newUser = {
        id: users.length + 1,
        username,
        password,
        name
      };
      
      // Add to "database"
      users.push(newUser);
      
      // Return user without the password
      const { password: _, ...userWithoutPassword } = newUser;
      resolve(userWithoutPassword);
    }, 500);
  });
};

export const validateToken = (token) => {
  return new Promise((resolve) => {
    // In a real app, you would validate the token on the server
    // Here we just check if it's in localStorage
    setTimeout(() => {
      const isValid = !!token;
      resolve(isValid);
    }, 100);
  });
}; 