const textInput = document.querySelector("#text-input");

const checkContinent = (e) => {
    const guess = e.target.value.toLowerCase();
    const srAlert = document.querySelector("#sr-continent-alert");
    e.target.select();
    img1 = document.querySelector("#Wilde");
    img2 = document.querySelector("#Suzuki");
    img3 = document.querySelector("#Lee");
    if(guess === "picture of dorian gray" || guess==="oscar wilde" ) {
    img1.classList.remove("hidden");
    img2.classList.add("hidden");
    img3.classList.add("hidden");
    } else if(guess === "ring" || guess==="koji suzuki"){
    img1.classList.add("hidden");
    img2.classList.remove("hidden");
    img3.classList.add("hidden");
    }else if(guess === "to kill a mockingbird" || guess==="harper lee"){
    img1.classList.add("hidden");
    img2.classList.add("hidden");
    img3.classList.remove("hidden");
    }else if(guess === "reset"){
    img1.classList.remove("hidden");
    img2.classList.remove("hidden");
    img3.classList.remove("hidden");
    };
};
textInput.addEventListener('change', checkContinent);