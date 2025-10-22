# PageRush

**PageRush** is a modern e-commerce bookstore built for speed, reliability, and scalability. It provides readers with instant search results, rich book pages, and a secure checkout process, while giving authors and independent sellers a professional platform to manage and sell their books.  

---

## Overview

PageRush is designed to connect readers and sellers through an intelligent online bookstore experience. It serves two primary audiences:  
- **Readers**, who can browse, search, and purchase books instantly with a user-friendly interface and fast delivery.  
- **Sellers**, including authors, publishers, and bookstores, who can upload, price, and manage their listings through a private dashboard.  

If a specific book is unavailable on PageRush, the system automatically searches the **Google Books API**, ensuring that users always find the titles they’re looking for.

---

## Reader Experience

PageRush offers fast and precise book discovery powered by optimized search technology. Users can filter by title, author, keyword, or ISBN, and view detailed book pages with:  
- Cover images  
- Publication details and ISBN  
- Multiple formats and prices  
- Ratings and reviews  
- Personalized recommendations  

All transactions are encrypted and processed securely, with multiple payment options available. Orders are tracked in real time, and every account includes purchase history and wishlist management.  

The design is fully responsive, allowing customers to browse and shop seamlessly across desktops, tablets, and smartphones.

---

## Seller Experience

PageRush gives independent sellers complete control over their online bookstores. Sellers can:  
- Upload books with descriptions, images, and pricing  
- Track sales, revenue, and analytics  
- Manage inventory and stock updates  
- Run promotions and discounts  
- Communicate directly with customers  

Each seller is verified for authenticity and gains access to a private management dashboard. Book data, images, and transaction records are stored using **MongoDB** and **Mongoose**, ensuring accuracy, consistency, and security.

---

## Technology Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Server** | Node.js / Express | Backend logic, routes, API integration |
| **Views** | EJS templates | Dynamic page rendering |
| **Database** | MongoDB | Persistent storage for books, users, and orders |
| **ODM** | Mongoose | Schema enforcement and validation |
| **Uploads** | Multer | Image upload handling |
| **Environment** | dotenv | Secure configuration variables |
| **Development** | nodemon | Live development and testing |

---

## Reliability and Uptime

PageRush operates on a fault-tolerant architecture that guarantees continuous service.  
- **Mongoose** ensures data consistency and validation.  
- **MongoDB Atlas** provides built-in replication and automatic backups.  
- Redundant databases and mirrored servers eliminate single points of failure.  
- The system’s distributed architecture ensures that **PageRush cannot go down** due to a single hardware or software issue.  

All services are continuously monitored to maintain 24/7 uptime.

---

## Integration: Google Books API

PageRush integrates the **Google Books API** to expand its reach beyond local listings.  
When a search is made for a book not found in the platform’s internal catalog, the system queries the Google Books database and displays external results with preview links, author information, and cover art.  

This ensures that readers always find what they’re looking for, and PageRush remains a complete, global book discovery platform.


