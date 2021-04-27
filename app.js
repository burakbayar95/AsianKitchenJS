const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
let menus=[...menu]
const categories=menu.map(item=>item.category)
    const uniqecate=[...new Set(categories)]// uniqe yapıyor
    uniqecate.unshift("All") // başına ekle dedik

    const btnContainer = document.querySelector(".btn-container");
    uniqecate.map(item=>btnContainer.innerHTML+=`
    <button onclick="filter('${item}')" class="btn-item"> ${item} </button>

    `)

    function filter(category)
    {
      if(category!=="All") menus=menu.filter(item=>item.category===category)

      else menus=menu
      
      
      //console.log(menus)

      rendermenu()
      


      
    }
    
const menuitems=document.querySelector(".section-center");

function rendermenu()
{
  menuitems.innerHTML=""    
  menus.map(item=>menuitems.innerHTML+=` 
    <div class="menu-items col-lg-6 col-sm-12">
    <img class="photo" src="${item.img}"/>

    
    <div class="menu-info">
      
        <h4 class="menu-title">${item.title} <span>${item.price}</span></h4>
        
      
      <p>${item.desc}</p>
    </div>

    </div>  `
    )
    console.log(menus)
}
    
rendermenu()


/*


const mainDiv = document.querySelector(".section-center");
const butonDiv = document.querySelector(".btn-container");

var butonsayac=0;

const buttonMaker = (Button) => {
  const buton = document.createElement('button');
 
 buton.classList.add("btn-item");
 buton.setAttribute("id",butonsayac);
 butonsayac++;
 buton.innerHTML=Button
 
  butonDiv.appendChild(buton);

                              }
buttonMaker("All")
buttonMaker("Korea")
buttonMaker("Japan")
buttonMaker("China")


  const mainDiv2 = document.createElement('div');
  const menuItem = document.createElement('div');
  mainDiv.appendChild(mainDiv2)

  mainDiv2.classList.add("menu-items");
 

for(var i=0;i<menu.length;i++)
// {


// --------------------------------resim ekleme
const imgMaker = (image) => {
  const img = document.createElement('img');
  
 img.classList.add("photo");
 img.src=image
 
 //mainDiv.appendChild(mainDiv2)
 
 mainDiv2.appendChild(img)
 

                              }

//---------------------------------------------


//-----------------------------------title ekleme
  const titleMaker = (title) => {
    const h2 = document.createElement('h4');
   
   h2.classList.add("menu-title");
   h2.innerHTML=title
   
    mainDiv2.appendChild(h2);
  
                                }

//-------------------------------------------         



//-----------------------------------menu info ekleme
const infoMaker = (info) => {
  const h4 = document.createElement('p');
 
 h4.classList.add("menu-info");
 h4.innerHTML=info
 
  mainDiv2.appendChild(h4);

                              }

//-------------------------------------------      



//-----------------------------------menu fiyat ekleme
const priceMaker = (price) => {
  const h4 = document.createElement('h4');
 
 h4.classList.add("menu-info");
 h4.innerHTML=price
 
  mainDiv2.appendChild(h4);

                              }

//-------------------------------------------   



//-----------------------------------buton ekleme


//-------------------------------------------   


var resim=menu[i].img; 
var fiyat=menu[i].price;
var menuyazisi=menu[i].desc;
var baslik=menu[i].title;

titleMaker(baslik);
priceMaker(fiyat);
imgMaker(resim);
infoMaker(menuyazisi)    


  
      if(menu[i].category=="Korea")
      {
        console.log(menu[i].category)
      }
      
      
     
    


//}

document.getElementById("0").onclick= yap=>
{

  const filtrele=menu.map(deger=>
    {
      if(deger.category=="China")
      {
        return deger;
      }
      
      
     
    })
    console.log(filtrele)
//}
*/




