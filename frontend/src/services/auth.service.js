// Enhanced auth service to handle more user profile data
const AuthService = {
  // Store user data in session storage
  setUser: (user) => {
    sessionStorage.setItem("sabitalk_user", JSON.stringify(user));
  },

  // Get user data from session storage
  getUser: () => {
    const user = sessionStorage.getItem("sabitalk_user");
    return user ? JSON.parse(user) : null;
  },

  // Store token in session storage
  setToken: (token) => {
    sessionStorage.setItem("sabitalk_token", token);
  },

  // Get token from session storage
  getToken: () => {
    return sessionStorage.getItem("sabitalk_token");
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!sessionStorage.getItem("sabitalk_token");
  },

  // Update user profile data
  updateUserProfile: (profileData) => {
    const currentUser = AuthService.getUser();
    if (currentUser) {
      const updatedUser = { ...currentUser, ...profileData };
      sessionStorage.setItem("sabitalk_user", JSON.stringify(updatedUser));
      return updatedUser;
    }
    return null;
  },

  // Store selected language
  setLanguage: (language) => {
    const currentUser = AuthService.getUser();
    if (currentUser) {
      const updatedUser = { ...currentUser, language };
      sessionStorage.setItem("sabitalk_user", JSON.stringify(updatedUser));
      return updatedUser;
    } else {
      // If no user exists yet, create a temporary user object with just the language
      const tempUser = { language };
      sessionStorage.setItem("sabitalk_user", JSON.stringify(tempUser));
      return tempUser;
    }
  },

  // Log out user
  logout: () => {
    sessionStorage.removeItem("sabitalk_user");
    sessionStorage.removeItem("sabitalk_token");
  },
};

export default AuthService;
