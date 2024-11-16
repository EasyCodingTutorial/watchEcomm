# Watch E-commerce Website 
![logo](https://github.com/user-attachments/assets/d611dd87-dd1b-4a22-9ada-0355b17c4526)

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

## Getting Started
Follow these steps to get the project up and running on your local machine:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install` or `yarn install`.
4. Create a `.env` file in the root directory of the project.
5. Copy and paste the following configuration into your `.env` file:

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
6. Replace the placeholder values:
   - ```your-nextauth-secret-key:``` Replace with a strong secret key for NextAuth.
   - ``` your-mongo-db-uri: ``` Replace with your actual MongoDB connection URI.
   - ``` your-uploadthinkg-token: ```   Replace with your UploadThing token for handling file uploads.

7.  Start the development server using ```npm run dev``` or ```yarn dev```.
8.  Access the application in your browser at ```http://localhost:3000```.

## Steps to use UploadThing for File Uploads:
1. Ensure you have registered with UploadThing and obtained your uploadthing Toekn.
2. Add the API Key and Secret Key to your ```.env``` file (as shown above).
3. Use UploadThing in your project to upload product images or other media by calling their API in your components or server-side functions.

## Contributions
Contributions are welcome! Feel free to open issues for any bugs, feature requests, or suggestions. If you're interested in adding new features (like the payment gateway or improving middleware protection), feel free to fork the project and submit a pull request!
