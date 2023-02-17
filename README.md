# Online Shopping application of gift products
Client-Server app for selling products online.
On the main page, customer can see all products or search by name of the product (+ pagination).
Authorized customer can buy a product (adding the product to the shopping cart) if the product's status is not "out of stock" and also leave one review with star-rating.
There are 4 steps of the Payment process: Sign-In, fill up Shipping information, choose a Payment method, and Place an order.
On the Profile page user can overlook his orders by clicking on a particular order.
In the admin dashboard there are two main functions: working with a list of users and observing all orders with the possibility to change the status for an order (delivered)

```
test user: user@gift-shop.ca, password: 12345
admin: admin@gift-shop.ca, password: 12345
```
using stack of technologies: MERN: MongoDB + express + React js + Node.js

State-management: Redux

Database Schema:<br>
![DB Schema](https://github.com/Lerik13/myshop-mern/blob/main/schema_db.jpg?raw=true "DB Schema")

### Client Functionality

1. Register User<br>

2. Login/Logout (Saving JWT-token in user's Local Storage)<br>
![Registration](https://github.com/Lerik13/myshop-mern/blob/main/screenshots/0.jpg?raw=true "Registration")
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

8. Admin dashboard for user with admin role (field isAdmin='true')
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
  - express-async-handler -- simple middleware for handling exceptions inside of async express routes and passing them to your express error handler
  - multer -- for handling uploading files
  - morgan -- http-request logger middleware for node.js
  - nodemon (dependency) -- constantly watch server.js, so we don't need to restart server

#### Frontend libs:
  - react, react-dom
  - react-router-dom -- page navigation
  - redux, react-redux, redux-thunk, redux-devtools-extension -- State Management
  - axios --  http-library to make http-requests to backEnd
  - react-bootstrap, react-router-bootstrap -- CSS library
  - react-paypal-js -- payment through PayPal
  - react-helmet -- manage all of your changes to the document head - change tittle of pages

### Deploying
#### set Environment Variables:
1. MongoDB database URI (MONGO_URI)
2. JWT secret (JWT_SECRET)
3. environment (NODE_ENV = production)
4. Quantity items in one page (PAGE_SIZE)
5. PAYPAL_CLIENT_ID
