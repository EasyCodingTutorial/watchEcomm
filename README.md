# Watch E-commerce Website 
![Untitled design](https://github.com/user-attachments/assets/5e990671-4d82-4b4c-b1bf-fc306a684767)
 
## Overview
The **Watch E-commerce Website** is a fully responsive online store built from scratch using **Next.js** and **TypeScript**. The platform allows users to browse and purchase premium watches, while also providing a robust admin dashboard for managing products, orders, and users.

This project serves as a great educational resource for developers looking to enhance their web development skills, particularly in building secure, scalable, and modern e-commerce applications.

In this tutorial, we’ll walk through building a fully responsive e-commerce website for watches from scratch using Next.js and TypeScript. This project is perfect for developers looking to enhance their skills in modern web development and learn how to build a scalable online store.

## Technologies Used
- **Next.js 14**: A React framework for building server-side rendered applications, delivering high performance and SEO benefits.
- **TypeScript**: A statically typed superset of JavaScript that improves code quality and development speed.
- **React.js**: A popular library for building user interfaces using components.
- **React Icons**: A versatile library providing popular icon sets as React components.
- **NextAuth.js**: A secure and flexible authentication solution, handling session management and multiple authentication providers.
- **bcrypt**: A library for hashing and securing passwords, ensuring user data remains protected.
- **MongoDB** : For storing user and product data securely.
- **UploadThing**: A file upload service that enables easy file handling in your project, used here for uploading product images.

## 📌 In This Video:
- Setting up a Next.js project with TypeScript
- Creating dynamic components for an online store
- Implementing a responsive product catalog and shopping cart
- Following best practices for clean, maintainable code
- Integrating **Role-Based Authentication** with **NextAuth.js** to secure different user roles (Admin, User)
- Implementing **bcrypt** for secure password storage and user authentication
- Using **UploadThing** for file uploads, allowing easy management of product images

## Key Features
- **Admin Dashboard**: A fully functional admin dashboard that allows admin users to manage products, view orders, and update store settings.
- **Role-Based Authentication**: Restricts access to certain features based on the user's role (Admin, User). Only admins can access the admin dashboard.
- **Secure Authentication with NextAuth.js**: User authentication is handled securely with NextAuth.js, supporting multiple sign-in methods including email/password and OAuth-based login.
- **Password Security with bcrypt**: User passwords are securely hashed using bcrypt, ensuring that passwords are never stored in plain text in the database.
- **Session Management**: Secure sessions are handled using JSON Web Tokens (JWT) for safe user authentication.
- **Protected Routes**: Sensitive routes, such as the admin dashboard, are protected and accessible only by authenticated users with appropriate roles.
- **UploadThing Integration**: Product images are uploaded using **UploadThing**, making it simple to handle image files and other media.

## Wants To Access The Admin Dashboard
 - **Credentials**: Email: admin@gmail.com, Password: 123456

## Known Issues:
1. **Middleware Protection**: All admin routes are not currently protected, and some routes that require protection are also exposed.
2. **Payment Gateway**: A payment gateway has not been integrated due to time constraints.
3. **Admin Dashboard**: The admin dashboard is not fully responsive and may not work optimally on mobile devices.

## Missing Features
I acknowledge that many features are currently missing from the website due to time constraints. If you can help, I would truly appreciate it! Please address any of the issues listed above, or feel free to identify additional ones. Here are some potential features that could be added:
- Integration of a **payment gateway** (e.g., Stripe, PayPal)
- Full integration of **Role-Based Access Control** with more granular permissions
- A **complete admin dashboard** with more management features and full responsiveness

If you find any new issues or want to help me complete the missing features, kindly inform me at **ecoding45@gmail.com**. Let’s collaborate to make this project better!

## Installation
To get this project up and running on your local machine, follow the steps below:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install` or `yarn install`.
4. Create a `.env` file in the root directory of the project.
5. Copy and paste the following configuration into your `.env` file:

## Configuration
 After installing the dependencies, you will need to configure environment variables to connect the app with NextAuth, MongoDB, and UploadThing.
 1. Create a ```.env``` file in the root of your project directory.
 2. Add the following configuration:
```env
# .env

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key

# MongoDB URI for Database Connection
MONGODB_URI=your-mongo-db-uri
  
# UploadThing Configuration: Replace with your UploadThing token key
UPLOADTHING_TOKEN=your-uploadthing-token 

```
  3. Replace the placeholder values:
   - ```your-nextauth-secret-key:``` Replace with a strong secret key for NextAuth.
   - ``` your-mongo-db-uri: ``` Replace with your actual MongoDB connection URI.
   - ``` your-uploadthinkg-token: ```   Replace with your UploadThing token for handling file uploads.

4.  Start the development server using ```npm run dev``` or ```yarn dev```.
5.  Access the application in your browser at ```http://localhost:3000```.

## How to Use UploadThing
UploadThing is used in this project to handle product image uploads. To use it, follow these steps:

1. **Register for an account** at [UploadThing](https://uploadthing.com/).
2. **Obtain your API Token** and add it to your `.env` file as shown in the Configuration section:
   ```env
   # UploadThing Configuration: Replace with your UploadThing token key
   UPLOADTHING_TOKEN=your-uploadthing-token
   
   ```


## Contributions
Contributions are welcome! Feel free to open issues for any bugs, feature requests, or suggestions. If you're interested in adding new features (like the payment gateway or improving middleware protection), feel free to fork the project and submit a pull request!


## Learn By Watching Video ▶️
[![Watch Demo Video](https://img.youtube.com/vi/2tZL7bgK9uk/maxresdefault.jpg)](https://www.youtube.com/watch?v=2tZL7bgK9uk)

