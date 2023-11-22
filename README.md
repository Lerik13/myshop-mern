Shopping app, using MERN-stack

# Online Shopping application of gift products
Client-Server app for marketing purpose
```
test user: user@gift-shop.ca, password: 12345
admin: admin@gift-shop.ca, password: 12345
```
using stack of technologies: MERN: MongoDB + express + React js + Node.js

State-management: Redux

DB Schema:<br>
![DB Schema](https://github.com/Lerik13/myshop-mern/blob/main/schema_db.jpg?raw=true "DB Schema")

### Client Functionality

1. Register User<br>
![Registration](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/0.jpg?raw=true "Registration")

2. Login/Logout (Saving JWT-token in user's Local Storage)<br>
![Authorization](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/1.jpg?raw=true "Authorization")

3.  Shop page (main-page) - Pagination + Search product by name + Slider with top rated products<br>
![Catalog_products](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/2.jpg?raw=true "Catalog")

4. Product Info page 
    - Rating of product (set authorized user's rating for product + update average rating for product and count of reviews)
    - Add device to cart
    
![Product_info](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/3.jpg?raw=true "Product Info")

5. Shopping Cart page<br>
    - Change quantity of product or delete it from Cart
    - Proceed to Checkout
    
![Cart](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/4.jpg?raw=true "Shopping Cart")

6. Payment process
      - enter Shipping address
![Cart_Shipping_address](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/5_1.jpg?raw=true "Cart - Shipping address")
      - choose Payment method (Paypal or Credit card)<br>
![Cart_Payment_method](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/5_2.jpg?raw=true "Cart - Payment method")<br>
      - Place order (make sure order is correct)
![Cart_Place_order](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/5_3.jpg?raw=true "Cart - Place_order")<br>
      - Save order & make a payment
![Cart_Save_order](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/5_4.jpg?raw=true "Cart - Save_order")<br>
      - See order after payment
![Cart_after_payment](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/5_5.jpg?raw=true "Cart - After_payment")
    
7. User Profile page
    - Update User info (name, email, password)
    - List of User's orders
    
![User_profile](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/6.jpg?raw=true "User profile") 

8. Admin panel (for user with field isAdmin='true')
    - List of Users (edit/delete/change status 'isAdmin')
    ![Admin_Users](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/7_1.jpg?raw=true "Users") 
    ![Edit_User](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/7_2.jpg?raw=true "EditUser") 
    - List of Orders (obeserve specific order)
    ![Admin_Orders](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/7_3.jpg?raw=true "Orders") 
    ![Admin_See_Order](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/7_4.jpg?raw=true "Order") 

### Developing details
#### Backend libs:
  - express -- Express-framework for creating web-app using NodeJS
  - mongoose -- mongoDB object modeling for node.js
  - bcryptjs -- create hash passwords
  - jsonwebtoken -- generate web-token for autontification in client-side
  - cookie-parser -- allows us to access request.cookie - for saving JWT-token
  - multer -- for handling uploading files

#### Frontend libs:
  - react, react-dom
  - react-router-dom -- page navigation
  - reduxjs, toolkit react-redux -- State Management
  - react-bootstrap, react-router-bootstrap -- Bootstrap CSS library
  - react-helmet -- manage all of your changes to the document head - change title of pages
  - react-toastify -- nice messages/alerts
  - react-paypal-js -- payment through PayPal
	
#### set Environment Variables:
1. MongoDB database URI (MONGO_URI)
2. JWT secret (JWT_SECRET)
3. environment (NODE_ENV = production)
4. Quantity items in one page (PAGE_SIZE)
5. PAYPAL_CLIENT_ID
