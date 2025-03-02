# **LMS - Learning Management System**

A full-stack **Learning Management System (LMS)** built using **React.js, Express.js, MongoDB, Tailwind CSS, Mongoose, and ShadCN UI**. This platform enables instructors to create and manage courses while allowing students to browse, filter, and purchase courses using **PayPal**.

---

## **🚀 Features**

### **🔹 Authentication & User Roles**
- Secure **Sign In / Sign Up** for users.
- Users can register as **Instructors** or **Students**.

### **👨‍🏫 Instructor Features**
- **Create courses** with structured lectures.
- **Upload lectures** to each course.
- **Track students** enrolled in their courses.
- **Monitor profits** and see revenue insights.

### **🎓 Student Features**
- **Browse & filter courses** based on categories.
- **View course details** before purchasing.
- **Purchase courses** securely using **PayPal**.

### **💳 Payment Integration**
- **PayPal** integration for secure transactions.

---

## **🛠️ Tech Stack**

### **Frontend:**
- React.js
- Tailwind CSS
- ShadCN UI

### **Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

### **Payment Gateway:**
- PayPal

---

## **📦 Installation & Setup**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### **2️⃣ Install Dependencies**

#### **Backend (Server)**
```sh
cd server
npm install
```

#### **Frontend (Client)**
```sh
cd ../client
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file in the **server/** and **client/** directories with the necessary environment variables.

#### **Server (`server/.env`)**
```
MONGO_URI=your_mongodb_connection_string
PAYPAL_CLIENT_ID=your_paypal_client_id
JWT_SECRET=your_secret_key
```

#### **Client (`client/.env`)**
```
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

---

## **🚀 Run the Application**

### **Start the Backend Server**
```sh
cd server
npm run dev
```

### **Start the Frontend Client**
```sh
cd client
npm run dev
```

The application will run at: **`http://localhost:5173`** 

---

## **📷 Screenshots**
_Add relevant screenshots of the LMS UI here._

---

## **📜 License**
This project is licensed under the **MIT License**.

---

## **📩 Contact**
For any queries or contributions, feel free to contact:
📧 Email: `baruahbhaskar10@gmail.com`
🔗 GitHub: [your-github-profile](https://github.com/BBoruah10)

---
