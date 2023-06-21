const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
//.class1.class2 vs. .class1 .class2 
const msgSpan = document.querySelector(".container .msg");
const coinList = document.querySelector(".ajax-section .container .coins");

//localStorage
localStorage.setItem("apiKey", EncryptStringAES("coinrankingd4a6719009d857b3ea88e7adc9317ad90c2405121b409bd0"));
form.addEventListener("submit", (e) => {
    e.preventDefault();
    getCoinDataFromApi();
    //form.reset == e.target.reset
    e.target.reset();
});

const getCoinDataFromApi = async () => {
    //alert("Get Coin Data!!");
    const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
    //console.log(apiKey);
    //!!!template literal!!!
    const url = `https://api.coinranking.com/v2/coins?search=${input.value}&limit=1`;
    const options = {
        headers: {
            'x-access-token': apiKey,
        },
    };
    //fetch vs. axios
    //   const response = await fetch(url, options)
    //   .then((response) => response.json())
    //   .then((result) => console.log(result.data.coins[0]));
    try{
        const response = await axios(url, options);
        //console.log(response.data.data.coins[0]);
        //obj. dest.
        const { price, name, change, iconUrl, symbol } = response.data.data.coins[0];
        //console.log(iconUrl);
    
        //Coin Control!!!
        const coinNameSpans = coinList.querySelectorAll("h2 span");
        //filter vs. map(array)
        if (coinNameSpans.length > 0) {
            const filteredArray = [...coinNameSpans].filter(span => span.innerText == name);
            console.log(filteredArray);
            if (filteredArray.length > 0) {
                msgSpan.innerText = `You already know the data for ${name}, Please search for another coin 😉`;
                setTimeout(() => {
                    msgSpan.innerText = "";
                }, 3000);
                return;
            }
        }

        //continue xxxx return
        const createdLi = document.createElement("li");
        createdLi.classList.add("coin");
        createdLi.innerHTML = `
            <h2 class="coin-name" data-name=${name}>
                <span>${name}</span>
                <sup>${symbol}</sup>
            </h2>
            <div class="coin-temp">$${Number(price).toFixed(6)}</div>
            <figure>
                <img class="coin-icon" src=${iconUrl}>                
                <figcaption style='color:${change < 0 ? "red" : "blue"}'>
                    <span><i class="fa-solid fa-chart-line"></i></span>
                    <span>${change}%</span>
                </figcaption>
            </figure>
            <span class="remove-icon">
                <i class="fas fa-window-close" style="color:red"></i>
            </span>`;
        //append vs. prepend
        //append vs appendChild
        coinList.prepend(createdLi);
        //remove func.
        createdLi.querySelector(".remove-icon").addEventListener("click", () => {
            createdLi.remove();
        });
    }
   catch(error){
    //error logging
    //postErrorLog("crypto.js", "getCoinDataFromApi", new Date(), error...);
    msgSpan.innerText = `Coin not found!`;
    setTimeout(() => {
        msgSpan.innerText = "";
    }, 3000);
   }

}
//http response codes
//rest api vs. soap api












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

