# Language Classes Management System

Welcome to the Language Classes Management System! This project is designed to manage and offer language classes with a focus on modern web development standards. It includes an admin dashboard for managing blog posts related to the classes, user authentication, and dynamic product card displays for German and English language classes.

## Preview

Admin Dashboard Preview: 

TODO

Product Cards Preview:

[product_cards.webm](https://github.com/user-attachments/assets/5011a432-3b9d-4077-86a6-8390544c7189)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Admin Dashboard**: Allows administrators to create, edit, and delete blog posts.
- **User Authentication**: Secure login system with JWT-based authentication.
- **Dynamic Product Cards**: Displays animated product cards for German and English language classes based on user selection.
- **Responsive Design**: Ensures usability across various devices.
- **Dark Theme**: A modern dark theme with support for emojis.

## Technologies

- **Frontend**: 
  - React.js
  - TypeScript
  - CSS (with animations)
  
- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  
- **Authentication**: 
  - JSON Web Tokens (JWT)
  - bcrypt.js for password hashing
  
- **Build Tool**:
  - Vite

## Setup

### Prerequisites

- Node.js (v14 or above)
- MongoDB

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yuseph03/gemuetlich-web.git
    cd gemuetlich-web
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
    ```env
    JWT_SECRET=your_jwt_secret
    MONGO_URI=your_mongodb_uri
    VITE_API_BASE_URL=http://localhost:5000
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```

5. **Start the backend server:**
    ```bash
    npm run server
    ```

## Usage

1. **Access the Admin Dashboard**: 
   Navigate to `/admin` after logging in with the correct credentials.
  
2. **Select Language Classes**: 
   Choose between German and English classes on the main page. The product cards will dynamically update based on your selection.


## API Endpoints

### Authentication

- **POST** `/api/auth/login`: Authenticates a user and returns a JWT.

### Posts

- **GET** `/api/posts`: Fetches all blog posts.
- **POST** `/api/posts`: Creates a new blog post.
- **PUT** `/api/posts/:id`: Updates a specific blog post.
- **DELETE** `/api/posts/:id`: Deletes a specific blog post.

## Contributing

We welcome contributions to improve this project! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

