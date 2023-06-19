const searchInput = document.getElementById("input");
const submitButon = document.getElementById("btn");
const containerForm = document.querySelector(".container");

containerForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  if(searchInput.value){
    getData(searchInput.value)
  }else{
    alert("lutfen veri giriniz")
  }
  
});

const getData = async (searchInput) =>{
    const API_KEY = "coinrankingd4a6719009d857b3ea88e7adc9317ad90c2405121b409bd0";
    const URL = `https://api.coinranking.com/v2/coins?API_KEY=${API_KEY}`;
    try {
        const response = await fetch(URL);
        // console.log(response)
        if(!response.ok){
            throw new Error ("coinsi yakalayamadım");

        }

        const data = await response.json();
            



    }
}