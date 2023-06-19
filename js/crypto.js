const form = document.querySelector(".top-banner form");
const input = document.querySelector(" input");
// .class1.class2 vs. .class1 .class2
const msgSpan = document.querySelector(".container .msg");
const coinList = document.querySelector(".ajax-section .container .coins");
//localStorage
localStorage.setItem("apiKey", EncryptStringAES("coinrankingd4a6719009d857b3ea88e7adc9317ad90c2405121b409bd0"));
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  getCoinDataFromApi();
  //form.reset == e.target.reset
  e.target.removeEventListener();
})
const getCoinDataFromApi = () =>{
  // alert("Get Coin Data!!");
  const apiKey = localStorage.getItem("apiKey");
  console.log(apiKey)
}
const url = `https://api.coinranking.com/v2/coins?search=${input.value}&limit=1`
 const options = {
  headers: { 
    `x-access-token`: apiKey,
  },
 };
 //fetch vs. axios
const response = await axios(url, options);
console.log(response.data.data.coins[0]);
const { price, nane, change, iconUrl, symbol} = response.data.data.coins[0];
// consol.log(iconUrl);

try {
  
} catch (error) {
  
}

  













// const searchInput = document.getElementById("input");
// const submitButon = document.getElementById("btn");
// const containerForm = document.querySelector(".container");

// containerForm.addEventListener("submit", (e) => {
//   //   e.preventDefault();
//   if(searchInput.value){
//     getData(searchInput.value)
//   }else{
//     alert("lutfen veri giriniz")
//   }
  
// });

// const getData = async (searchInput) =>{
//     const API_KEY = "coinrankingd4a6719009d857b3ea88e7adc9317ad90c2405121b409bd0";
//     const URL = `https://api.coinranking.com/v2/coins?API_KEY=${API_KEY}`;
//     try {
//         const response = await fetch(URL);
//         // console.log(response)
//         if (!response.ok){
//             throw new Error ("coinsi yakalayamadım");

//         }

//         const data = await response.json();
//         // console.log(data.data.coins)
            
// data.data.coins.forEach((item) => {
//     const { change, coinrankingUrl, color, name, price, type, symbol } = item;
//     console.log(item);
  
// });
// writeDom();
//     } catch (error) {
//         console.log(error);
//     }


//     }
// const writeDom = async () => {
//     const li = document. createElement("li")
//     li.innerHTML = document.createElement ("span")}

