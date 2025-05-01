# 📘 SABITALK API Documentation

**SABITALK** is a web application designed to help users learn their native languages through an engaging and personalized experience. The platform supports multiple languages and provides structured learning paths tailored to individual preferences.

This documentation covers the **authentication and user onboarding endpoints**, which are the foundation for accessing the app. These routes allow users to:

- Select a language they wish to learn
- Sign up for an account
- Log in securely

> ⚠️ **Note**: This document focuses only on the authentication flow. Additional endpoints for learning content and language progression will be documented as the app evolves.


---

## 🌍 1. Select Language

### `POST /select-language`

Selects the language the user wants to learn. This must be called **before signup**, and the selection is stored in the session.

### 🔸 Request Body

```json
{
  "language": "yoruba"
}
```
###🔹 **Success Response**
```
{
  "message": "successfully selected yoruba"
}
```
###🔹 **Error Response**
```
{
  "message": "you have to select a language"
}
```
## 📝 2. Sign Up

### `POST /auth/signup`

Registers a new user. Requires that the user has selected a language via `/select-language`, and has accepted the terms and conditions.

### 🔸 Request Body


```
{  
	"email":  "johndoe@gmail.com",
	"password":  "johnDoe@13",  
	"termsAccepted":  true 
}
``` 

> 🔐 **Password requirements:**
> 
> -   Minimum 8 characters
>     
> -   At least one uppercase letter
>     
> -   At least one lowercase letter
>     
> -   At least one number
>     
> -   At least one special character
>     

### 🔹 Success Response

```
{
  "code": 201,
  "success": true,
  "data": {
    "user": {
      "_id": "user_id_here",
      "email": "johndoe@gmail.com",
      "language": "yoruba"
    },
    "token": "jwt_token_here"
  },
  "message": "signed up successfully"
}
``` 

### 🔹 Error Responses

**Missing Language in Session:**

```
{
  "code": 400,
  "success": false,
  "message": "Language not selected in session"
}
``` 

**Email Already Exists:**

```
{
  "code": 409,
  "success": false,
  "message": "Email already exists"
}
``` 


----------

## 🔐 3. Log In

### `POST /auth/login`

Authenticates an existing user and returns a JWT token if successful.

### 🔸 Request Body

```
{  
	"email":  "johndoe@gmail.com",
	"password":  "johnDoe@13" 
}
``` 

### 🔹 Success Response

```
{
  "code": 201,
  "success": true,
  "data": {
    "user": {
      "_id": "user_id_here",
      "email": "johndoe@gmail.com",
      "language": "yoruba"
    },
    "token": "jwt_token_here"
  },
  "message": "login successful"
}
``` 

### 🔹 Error Response


```
{  
	"code":  400,  
	"success":  false,  
	"message":  "Invalid email or password"  
}
``` 

----------

## ⚙️ Technical Notes

-   All requests and responses are in JSON.
    
-   Cookie-based session is used for storing selected language.
    
-   Make sure the frontend sends requests with credentials (cookies):
    
    -   `credentials: "include"` in `fetch`
        
    -   `withCredentials: true` in `axios`
        
-   CORS must allow credentials if frontend and backend are on different domains.
    

----------

## 🛠 Example Frontend Flow

1.  `POST /select-language` → store `language` in session
    
2.  `POST /auth/signup` → send email, password, and `termsAccepted`
    
3.  `POST /auth/login` → log in with email and password