const data = [
    {
        id: 1,
        name: "Elden Ring",
        img: "https://m.media-amazon.com/images/I/6110RSDn3PL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        price: 59.99,
        cat: "Adventure",
    },
    {
        id: 2,
        name: "Minecraft",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCFxYmBYsLLKDXJOmRvMSAqBRkW-4iwSuIdgND-9oJmnLEX3g5hZ84ufHhg9u-8Iw6_E&usqp=CAU",
        price: 28.99,
        cat: "Adventure"
    },
    {
        id: 3,
        name: "Red Dead Redemption 2",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxtKJMhtyQItzAghuhIpKw-v_HI2NnDXMUg&usqp=CAU",
        price: 59.99,
        cat: "Rpg"
    },
    {
        id: 4,
        name: "The Outer World",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFDwtWyiXCCnoaNa9KJYUxo7Vd5NN1-MTCeA&usqp=CAU",
        price: 59.99,
        cat: "Open World"
    },
    {
        id: 5,
        name: "Dying Light 2",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7V0yoinW2edf5BsxjFLcoU4P2QqVSs5QpQ&usqp=CAU",
        price: 59.99,
        cat: "Zombie"
    },
    {
        id: 6,
        name: " The Legend Of Zelda:<br> Tears Of The Kingdom",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlL6cI9lrHT8SyDusCK2q8oLf4aJ9ne7YVUQ&usqp=CAU",
        price: 69.99,
        cat: "Open World"
    },
    {
        id: 7,
        name: "Halo Infinite",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8XtuAAukXNSH8FNSuylXQTUM77Dr_Xgi-Ag&usqp=CAU",
        price: 39.99,
        cat: "Action"
    },
    {
        id: 8,
        name: "Dead By Daylight",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bRADrzA_i6tlPBd8RTvWRluV7TYXf26aOg&usqp=CAU",
        price: 5.99,
        cat: "Horror"
    },
    {
        id: 9,
        name: "Hades",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNxIFG_WApLPwgHOaRxbHkbv_MbsLsIaqIQ&usqp=CAU",
        price: 15.99,
        cat: "Rpg"
    },
    {
        id: 10,
        name: "Doom",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17Gntz7NqbR6ehCK4jkBuViRv_zKB-mImZw&usqp=CAU",
        price: 1.99,
        cat: "Fps"
    },
    {
        id: 11,
        name: "Bayonetta",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqX17KOAHV022H5M1uIZqGLaNh32zl13TLQ&usqp=CAU",
        price: 4.99,
        cat: "Rpg"
    },
    {
        id: 12,
        name: "Transistors",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8_gVDQLK-lNXmuepevmV30kN5OdiNf2GhQ&usqp=CAU",
        price: 6.99,
        cat: "Action"
    },
    {
        id: 13,
        name: "Crysis",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nB8Uuuncu_ce_EXtVtruvGNOkusdjbY97g&usqp=CAU",
        price: 10.99,
        cat: "Action"
    },
    {
        id: 14,
        name: "Battlefield 3",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNHYwMm3YKyb1_YR4BJZ0UfkwlKVxQ5X4Jxw&usqp=CAU",
        price: 9.99,
        cat: "Shooter"
    },
    {
        id: 15,
        name: "GTA V",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBaYC9q3-SPSmmbemG3WjYTN7bQDN21TzZGA&usqp=CAU",
        price: 15.99,
        cat: "Open World"
    },
    {
        id: 16,
        name: "Half Life",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIiOT9EyEhNMWdwDFZgEbCV8YxZj3myF9TtQ&usqp=CAU",
        price: 6.99,
        cat: "Action"
    },
    {
        id: 17,
        name: "FIFA 23",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecfSQsn7yWZokn53B_2XJXm6X0oM8ICtYVA&usqp=CAU",
        price: 55.99,
        cat: "Sport"
    },
    {
        id: 18,
        name: "Control",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx36gf8AbkFe640LxdJDLicye5hyfYPGZTKg_RjMek8fEH2lSwl7M0K5MIjx33lAL3d8A&usqp=CAU",
        price: 30.99,
        cat: "Rpg"
    },
    {
        id: 19,
        name: "Metro Exodus",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgkWMF_jVkhNkFjYgD8A0pOiSDUolfYTm56zZiY_5YZOWbji8if41u_duCdOveWhoo74&usqp=CAU",
        price: 39.99,
        cat: "Rpg"
    },
    {
        id: 20,
        name: "The Legend Of Zelda:<br> Breath Of The Wild",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RExcMiMROwbF1-i3BozvryaiNqA5d3r6eg&usqp=CAU",
        price: 29.99,
        cat: "Rpg"
    },
    {
        id: 21,
        name: "My Little Doom Guy",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS886eIVzDzSWuLSnLaeIQ1IC5mEVWBpFCHrg&usqp=CAU",
        price: 0.99,
        cat: "Romance"
    },
    {
        id: 22,
        name: "Dirt 5",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1wkYfkQrPCp-arF33DWZiCbJwjSxGW9AT53lbpcYNBrNcwfv-0-YaiV5dD8GsWHKsOA&usqp=CAU",
        price: 15.99,
        cat: "Sport"
    },
    {
        id: 23,
        name: "Need For Speed <br> Most Wanted",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhFRfYgnm_0Dak_K3Cndpn8aiDT-eVrLNTg&usqp=CAU",
        price: 4.99,
        cat: "Sport"
    },
    {
        id: 24,
        name: "The Walking Dead <br> Defenitive Series",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4gbeVoUcmnJiar3uD_MUdFbvrxPez2llAQ&usqp=CAU",
        price: 20.99,
        cat: "Rpg"
    },
    {
        id: 25,
        name: "The Sims 2",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTD3oxwFRRcbJCnDPeWJ-Bn-SiLRW7HAWG-w&usqp=CAU",
        price: 3.99,
        cat: "Simulation"
    },
    {
        id: 26,
        name: "Euro Truck Simulator 2",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dRD6mqlwK5AQzL95OtuK1AMwIh8rttdhfxskKhb7Ljbjj3Z-9dDw1JwAW0UczC4E7yM&usqp=CAU",
        price: 9.99,
        cat: "Simulation"
    },
    {
        id: 27,
        name: "Assassin's Creed <br> Black Flag",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyu9nia7rbt7-5M8sEYmJ9YrbBD39ORegSw&usqp=CAU",
        price: 8.99,
        cat: "Open World"
    },
    {
        id: 28,
        name: "Assassin's Creed <br> Valhala",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlS1OfQPOhCufO53Tw3hmIKWG8__zjEFeOQ&usqp=CAU",
        price: 49.99,
        cat: "Open World"
    },
    {
        id: 29,
        name: "Civilization V",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGLjZ5tmu0PVUBFrpdFH09PvxVfu1JYXuHg&usqp=CAU",
        price: 29.99,
        cat: "Simulation"
    },
    {
        id:30 ,
        name: "Death Stranding",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDky212OBWNphRCz1T51owxliNm5V7zDkag&usqp=CAU",
        price: 69.99,
        cat: "Rpg"
    },
    {
        id: 31,
        name: "Mafia II",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bjWlR03meW8Av_ctXBma1D4ZUKNK9aHJ7A&usqp=CAU",
        price: 10.99,
        cat: "Action"
    },
    {
        id: 32,
        name: "Medal Of Honor <br> Rising Son",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNZIKqoMfZWwytWV1iBiZHeE1DHURluhU6w&usqp=CAU",
        price: 7.99,
        cat: "Shooter"
    },
    {
        id: 33,
        name: "Prince Of Persia <br> Warrior Within",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmwgQcK4woU_KV-YTUAcffEq-i_2HzQFCqQ&usqp=CAU",
        price: 4.99,
        cat: "Adventure"
    },
    {
        id: 34,
        name: "Hogwart's Legacy",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8g44dM8Z5oXfG--7-6cjJOsoVtUzJyOJMRQ&usqp=CAU",
        price: 69.99,
        cat: "Rpg"
    },
    {
        id: 35,
        name: "Dark Souls 3",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHiJiQhDo0Et8PoHq9DMmPKfSgjnq6b417g&usqp=CAU",
        price: 49.99,
        cat: "Adventure"
    },
    {
        id: 36,
        name: "Bioshock Infinite",
        img: "https://w7.pngwing.com/pngs/54/116/png-transparent-bioshock-infinite-bioshock-the-collection-bioshock-2-video-game-cd-cover-design-game-poster-video-game-thumbnail.png",
        price: 10.99,
        cat: "Rpg"
    },
    {
        id: 37,
        name: "Final Fantasy XII",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Y9iDdFvqSxkEWRe_p82pfB43vNc9VRdgsQ&usqp=CAU",
        price: 12.99,
        cat: "Rpg"
    },
    {
        id: 38,
        name: "Portal",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_RrHV2EBV3t2bmM8XdtbpurOgWj6ZZOhOA&usqp=CAU",
        price: 19.99,
        cat: "Co Op"
    },
    {
        id: 39,
        name: "Transformers",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvEMJmeKx74Yory42UYfL2QMyw8XjZArFVRQ&usqp=CAU",
        price: 10.99,
        cat: "Action"
    },
    {
        id: 40,
        name: "Dead Space <br> Remastered",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQnpvju_vmLf-JGN9OA0SJrhp8Bh_1uUGUn73Gi3k8wd_Yhp8RUCQAg_BYlw6_z5ytQ&usqp=CAU",
        price: 69.99,
        cat: "Action"
    },
    
];

const productsContainer = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const categoriesContainer = document.querySelector(".cats")
const priceRange = document.querySelector(".priceRange")
const priceValue = document.querySelector(".priceValue")

const displayProducts = (filteredProducts) =>{
    productsContainer.innerHTML = filteredProducts.map(
     (product) =>
     `
      <div class="product">
       <img 
       src=${product.img}
       alt="" />
       <span class="name">${product.name}</span>
       <span class="priceText">${product.price}$</span>
      </div>
     `).join("")
}

displayProducts(data)

searchInput.addEventListener("keyup", (e)=>{
  const value = e.target.value.toLowerCase();
  if(value){
    displayProducts(data.filter(item=>item.name.toLowerCase().indexOf(value) !== -1))
  }else{displayProducts(data)}
})

const setCategories = () => {
    const allCats = data.map((item) => item.cat)
    const categories = ["All",...allCats.filter((item,i) => {
        return allCats.indexOf(item) === i
    }),];

    categoriesContainer.innerHTML = categories.map((cat)=>
        `
         <span class="cat">${cat}</span>
        `).join("");

        categoriesContainer.addEventListener("click", (e)=>{
            const selectedCat = e.target.textContent;

            selectedCat === "All" 
            ? displayProducts(data) 
            : displayProducts(data.filter((item)=> item.cat === selectedCat))
        })
}

const setPrices = ()=>{
    const priceList = data.map((item)=> item.price)
    const minPrice = Math.min(...priceList)
    const maxPrice = Math.max(...priceList)

    priceRange.min = minPrice
    priceRange.max = maxPrice
    priceRange.value = maxPrice
    priceValue.textContent = "$" + maxPrice

    priceRange.addEventListener("input", (e)=>{
        priceValue.textContent = "$" + e.target.value;
        displayProducts(data.filter((item)=>item.price <= e.target.value))
    })
}

setCategories()
setPrices()