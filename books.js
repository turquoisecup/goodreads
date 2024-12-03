const textInput = document.querySelector("#text-input");

const checkContinent = (e) => {
    const guess = e.target.value.toLowerCase();
    const srAlert = document.querySelector("#sr-continent-alert");
    e.target.select();
    img1 = document.querySelector("#Wilde");
    img2 = document.querySelector("#Suzuki");
    img3 = document.querySelector("#Lee");
    img4 = document.querySelector("#Orwell");
    img5 = document.querySelector("#Fitzgerald");
    img6 = document.querySelector("#Kafka");
    if(guess === "picture of dorian gray" || guess==="oscar wilde" ) {
    img1.classList.remove("hidden");
    img2.classList.add("hidden");
    img3.classList.add("hidden");
    img4.classList.add("hidden");
    img5.classList.add("hidden");
    img6.classList.add("hidden");
    } else if(guess === "ring" || guess==="koji suzuki"){
    img1.classList.add("hidden");
    img2.classList.remove("hidden");
    img3.classList.add("hidden");
    img4.classList.add("hidden");
    img5.classList.add("hidden");
    img6.classList.add("hidden");
    }else if(guess === "to kill a mockingbird" || guess==="harper lee"){
    img1.classList.add("hidden");
    img2.classList.add("hidden");
    img3.classList.remove("hidden");
    img4.classList.add("hidden");
    img5.classList.add("hidden");
    img6.classList.add("hidden");
    }else if(guess === "1984" || guess==="geaorge orwell"){
    img1.classList.add("hidden");
    img2.classList.add("hidden");
    img3.classList.add("hidden");
    img4.classList.remove("hidden");
    img5.classList.add("hidden");
    img6.classList.add("hidden");
}else if(guess === "the great gatsby" || guess==="f. scott fitzgerlad"){
    img1.classList.add("hidden");
    img2.classList.add("hidden");
    img3.classList.add("hidden");
    img4.classList.add("hidden");
    img5.classList.remove("hidden");
    img6.classList.add("hidden");
    }else if(guess === "metamorphosis" || guess==="franz kafka"){
    img1.classList.add("hidden");
    img2.classList.add("hidden");
    img3.classList.add("hidden");
    img4.classList.add("hidden");
    img5.classList.add("hidden");
    img6.classList.remove("hidden");
    }else if(guess === "reset"){
        img1.classList.remove("hidden");
        img2.classList.remove("hidden");
        img3.classList.remove("hidden");
        img4.classList.remove("hidden");
        img5.classList.remove("hidden");
        img6.classList.remove("hidden");

};}
textInput.addEventListener('change', checkContinent);