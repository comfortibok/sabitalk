
const AuthService = {
  setUser: (user) => {
    sessionStorage.setItem("sabitalk_user", JSON.stringify(user));
  },

  getUser: () => {
    const user = sessionStorage.getItem("sabitalk_user");
    return user ? JSON.parse(user) : null;
  },

  setToken: (token) => {
    sessionStorage.setItem("sabitalk_token", token);
  },

  getToken: () => {
    return sessionStorage.getItem("sabitalk_token");
  },

  isAuthenticated: () => {
    return !!sessionStorage.getItem("sabitalk_token");
  },

  updateUserProfile: (profileData) => {
    const currentUser = AuthService.getUser();
    if (currentUser) {
      const updatedUser = { ...currentUser, ...profileData };
      sessionStorage.setItem("sabitalk_user", JSON.stringify(updatedUser));
      return updatedUser;
    }
    return null;
  },
  setLanguage: (language) => {
    const currentUser = AuthService.getUser();
    if (currentUser) {
      const updatedUser = { ...currentUser, language };
      sessionStorage.setItem("sabitalk_user", JSON.stringify(updatedUser));
      return updatedUser;
    } else {
      const tempUser = { language };
      sessionStorage.setItem("sabitalk_user", JSON.stringify(tempUser));
      return tempUser;
    }
  },

  logout: () => {
    sessionStorage.removeItem("sabitalk_user");
    sessionStorage.removeItem("sabitalk_token");
    sessionStorage.removeItem("sabitalk_reset_email");
    sessionStorage.removeItem("sabitalk_otp");
  },

  initiatePasswordReset: (email) => {
    sessionStorage.setItem("sabitalk_reset_email", email);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem("sabitalk_otp", otp);

    console.log("Generated OTP for testing:", otp);
    return Promise.resolve({ success: true });
  },

  verifyOtp: (otpCode) => {
    const storedOtp = sessionStorage.getItem("sabitalk_otp");

    if (storedOtp === otpCode) {
            return Promise.resolve({ success: true });
    } else {
      return Promise.reject({ message: "Invalid OTP. Please try again." });
    }
  },

  resendOtp: () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem("sabitalk_otp", newOtp);

    console.log("New OTP for testing:", newOtp);
    return Promise.resolve({ success: true });
  },

  getResetEmail: () => {
    return sessionStorage.getItem("sabitalk_reset_email");
  },

  resetPassword: (newPassword) => {
    return Promise.resolve({ success: true });
  },
};

export default AuthService;
