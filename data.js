const SITE_SETTINGS_DEFAULT={collegeName:"Nehru College of Engineering",logo:"🍽️"};
const DEFAULT_PRODUCTS=[
{id:"p1",name:"Chai",category:"Drinks",price:10,imageUrl:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",description:"Hot Indian tea",prepTime:"5 min",available:true},
{id:"p2",name:"Coffee",category:"Drinks",price:15,imageUrl:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",description:"Freshly brewed coffee",prepTime:"5 min",available:true},
{id:"p3",name:"Samosa",category:"Snacks",price:12,imageUrl:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",description:"Crispy potato samosa",prepTime:"8 min",available:true},
{id:"p4",name:"Veg Sandwich",category:"Snacks",price:40,imageUrl:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",description:"Fresh vegetable sandwich",prepTime:"10 min",available:true},
{id:"p5",name:"Masala Dosa",category:"Meals",price:50,imageUrl:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80",description:"Crispy dosa with chutney",prepTime:"15 min",available:true},
{id:"p6",name:"Idli",category:"Meals",price:30,imageUrl:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80",description:"Soft idli with chutney",prepTime:"10 min",available:true},
{id:"p7",name:"Veg Fried Rice",category:"Meals",price:70,imageUrl:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",description:"Vegetable fried rice",prepTime:"15 min",available:true},
{id:"p8",name:"Chicken Roll",category:"Snacks",price:60,imageUrl:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",description:"Spicy chicken roll",prepTime:"12 min",available:true},
{id:"p9",name:"Lime Juice",category:"Drinks",price:20,imageUrl:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80",description:"Refreshing lime drink",prepTime:"3 min",available:true},
{id:"p10",name:"Noodles",category:"Meals",price:60,imageUrl:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80",description:"Vegetable noodles",prepTime:"12 min",available:true},
{id:"p11",name:"Cutlet",category:"Snacks",price:20,imageUrl:"https://images.unsplash.com/photo-1626776876729-bab436d4a2e6?auto=format&fit=crop&w=900&q=80",description:"Crispy vegetable cutlet",prepTime:"8 min",available:true},
{id:"p12",name:"Parotta",category:"Meals",price:25,imageUrl:"https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=900&q=80",description:"Layered Kerala parotta",prepTime:"10 min",available:true}
];
const SITE_SETTINGS=JSON.parse(localStorage.getItem("canteenSettings")||"null")||SITE_SETTINGS_DEFAULT;
function getProducts(){return JSON.parse(localStorage.getItem("canteenProducts")||"null")||DEFAULT_PRODUCTS;}
function saveProducts(v){localStorage.setItem("canteenProducts",JSON.stringify(v));}
function getCart(){return JSON.parse(localStorage.getItem("canteenCart")||"[]");}
function saveCart(v){localStorage.setItem("canteenCart",JSON.stringify(v));}
function getUsers(){return JSON.parse(localStorage.getItem("canteenUsers")||"[]");}
function saveUsers(v){localStorage.setItem("canteenUsers",JSON.stringify(v));}
function getOrders(){return JSON.parse(localStorage.getItem("canteenOrders")||"[]");}
function saveOrders(v){localStorage.setItem("canteenOrders",JSON.stringify(v));}
function currentUser(){return JSON.parse(localStorage.getItem("canteenUser")||"null");}
function money(n){return "₹"+Number(n).toFixed(0);}
function updateHeader(){document.querySelectorAll("#collegeName").forEach(e=>e.textContent=SITE_SETTINGS.collegeName);document.querySelectorAll("#footerCollege").forEach(e=>e.textContent=SITE_SETTINGS.collegeName);const c=getCart().reduce((s,x)=>s+x.qty,0);document.querySelectorAll("#cartCount").forEach(e=>e.textContent=c);const u=currentUser();const a=document.getElementById("authLink");if(a){a.textContent=u?"Logout":"Login";if(u)a.href="#";a.onclick=u?()=>{localStorage.removeItem("canteenUser");location.reload()}:null;}}
document.addEventListener("DOMContentLoaded",updateHeader);
