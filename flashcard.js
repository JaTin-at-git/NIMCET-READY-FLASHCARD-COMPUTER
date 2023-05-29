function addFunctionalityToCards(card) {

    var showAns = card.querySelector(".showAns");
    showAns.addEventListener('click', () => {
        showAns.offsetParent.offsetParent.style.transform = "rotateY(0.5turn)";
        card.querySelector(".card__face--back").style.zIndex = "0";
    });


    var showQues = card.querySelector(".showQues");
    showQues.addEventListener('click', () => {
        showQues.offsetParent.offsetParent.style.transform = "rotateY(0turn)";
        card.querySelector(".card__face--back").style.zIndex = "-1";
    });


    try {
        var nextQues = card.querySelector(".next");
        nextQues.addEventListener('click', () => {
            nextQues.offsetParent.querySelector(".showQues").click();
            nextQues.offsetParent.offsetParent.style.transform = "translate(100vw,-100vh)";
            nextQues.offsetParent.offsetParent.nextElementSibling.style.display = "initial";
            nextQues.offsetParent.offsetParent.nextElementSibling.style.transform = "rotateY(0)";
            setTimeout(() => {
                nextQues.offsetParent.offsetParent.style.display = "none"
            }, 1000);
            // nextQues.offsetParent.offsetParent.nextElementSibling.style.transform = "translate(-50%, 50%)";
        });
    }catch (e) {
        //pass
    }


    try {
        var prevQ = card.querySelector(".prev");
        prevQ.addEventListener('click', () => {
            prevQ.offsetParent.offsetParent.previousElementSibling.style.display = "initial";
            prevQ.offsetParent.offsetParent.previousElementSibling.style.transform = "rotateY(0)";
            prevQ.offsetParent.offsetParent.style.transform = "rotateY(-103deg) translateZ(calc(-200px - var(--i)*1px)) translateX(-100px)";
        });
    }catch (e) {
        //pass
    }
}