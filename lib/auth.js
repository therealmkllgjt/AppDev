// In lib/auth.js
export const getLoggedInUser = () => {
  console.log('Starting getLoggedInUser...');
  const user = // Your logic to get the user
  console.log('User retrieved:', user);
  return user;
};

// export const getLoggedInUser = () => {
   // if (typeof window !== 'undefined') {
     // const user = localStorage.getItem('user');
      // return user ? JSON.parse(user) : null;
    // }
    // return null;
  // }; 
  