# Canteen Pre-Order – Multi-Page GitHub Pages Version

## Files
All files are in ONE folder. There are no subfolders.

Student pages:
- `index.html` – home
- `login.html` – student login
- `register.html` – registration
- `menu.html` – food menu
- `cart.html` – cart and checkout
- `orders.html` – order history

Admin pages:
- `admin-login.html` – hidden admin login page
- `admin.html` – admin dashboard

Shared files:
- `data.js` – food items, image URLs and browser storage helpers
- `style.css` – student styling
- `admin.css` – admin styling
- JavaScript files for each page

## GitHub Pages
Upload all files to the same GitHub repository folder and enable GitHub Pages.

No Node.js, Python, MongoDB or Firebase is required for this version.

## Student demo
Registration/login and orders use browser `localStorage`.

## Admin
The admin page is NOT linked from the student pages.
Open `admin-login.html` directly when you need it.

Demo credentials:
- Username: `admin`
- Password: `admin123`

## Important limitation
GitHub Pages is static. Admin changes made through the dashboard are stored only in the current browser.

If you want a menu change to be visible to everyone on GitHub Pages:
1. Open `data.js`.
2. Edit the `DEFAULT_PRODUCTS` array.
3. Change the item name, price, category, availability or image URL.
4. Commit/push to GitHub.
5. Everyone will then see the updated code-based menu.

For real shared admin changes, shared orders, secure authentication and a central database, you need a backend/database such as Firebase or a Node.js + MongoDB server.

## Changing food items
In `data.js`, each product looks like:
```js
{
  id:"p13",
  name:"Burger",
  category:"Snacks",
  price:60,
  imageUrl:"https://example.com/image.jpg",
  description:"Veg burger",
  prepTime:"10 min",
  available:true
}
```

Use direct image URLs. Make sure the URL can be loaded by a browser.

## Security note
This is a static capstone/demo project. The admin credentials are in client-side JavaScript, so this is NOT secure authentication. Do not use it for real sensitive data.
