
let url = 'https://dog.ceo/api/breeds/image/random';


let url2 = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single';

let btn = document.querySelector("button");
let img = document.querySelector("#img");
let h1 = document.querySelector("h1");


btn.addEventListener("click", async() => {
  let link = await getImage();
  // let jok = await ;
  img.setAttribute("src", link);
  img.classList.add("imgs");
  h1.innerHTML= await getJokes();
});


async function getJokes() {
  try {
    let res = await axios.get(url2);
    return res.data.joke

  }catch(err) {
    return "Joke no found!........"
    
  }
  
}
async function getImage() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch(err) {
    console.log("Error is:",err);
    return "Img no found!..."
  }
};