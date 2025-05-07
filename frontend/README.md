# Sabitalk Frontend

This is the frontend codebase for the Sabitalk application. The frontend is built using React, React Router, and CSS Modules for styling.

## Table of Contents

Features
Project Structure
Installation
Usage
Available Scripts
Key Components
Styling
Contributing

## Features

-- **User Authentication**: Login, signup, and password reset functionality.

- **Personalization**: Users can personalize their accounts with gender and username.
- **Responsive Design**: Fully responsive UI for desktop, tablet, and mobile devices.
- **Google Login**: Integration with Google OAuth for seamless login.
- **Dynamic Navigation**: React Router for page transitions and state management.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sabitalk-frontend.git
   cd sabitalk-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Available Scripts

- **`npm start`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm test`**: Runs the test suite.
- **`npm run lint`**: Lints the codebase for errors.

## Key Components

### 1. **Login.jsx**

- Handles user login with email/password and Google OAuth.
- Validates input fields and displays error messages.
- Redirects users to the dashboard upon successful login.

### 2. **SignUp.jsx**

- Allows users to create an account.
- Validates passwords and terms acceptance.
- Sends signup data to the backend API.

### 3. **ResetPassword.jsx**

- Sends an OTP to the user's email for password reset.
- Validates email input and handles API errors.

### 4. **NewPassword.jsx**

- Allows users to set a new password after OTP verification.
- Validates password length and confirmation.

### 5. **PersonalizeAccount.jsx**

- Enables users to personalize their account by selecting gender and setting a username.
- Updates user profile data via the backend API.

### 6. **LanguageSelect.jsx**

- Allows users to select their preferred language.
- Stores the selected language in the application state.

## Styling

- **CSS Modules**: Each page/component has its own scoped CSS file for styling.
- **Responsive Design**: Media queries are used to ensure the app looks great on all devices.
  - **Mobile**: Adjustments for screens smaller than 768px.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
