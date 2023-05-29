//The goal is to generate question page
document.querySelector("#generateQP").addEventListener('click', function () {
    generateQP();
});

//create layout
async function generateQP() {
    //add container
    var scene = document.querySelector(".scene");
    var elem = document.createElement("div");
    elem.classList.add("questionPage");
    elem.setAttribute("style", "margin: 10px; background-color: white; width: 100%;");
    scene.appendChild(elem);

    for (const topic of topicForNotes) {
        if (topic) {
            addQuestionForQuestionPage(dictionary[topic], topic);
        }
    }

}

function addQuestionForQuestionPage(topic, topic_id) {
    return new Promise((resolve) => {
        // console.log(topic)
        var qpc = document.querySelector(".questionPage");
        var element = document.createElement("div");
        element.classList.add("topic_wrapper");
        element.innerHTML = `
       <div class="sub_topic" style="font-weight: bold; font-size: 1.5rem; text-decoration: underline; margin-bottom: 1rem">
                ${topic_id}:
       </div>
    `;
        qpc.appendChild(element);

        var allQuestions = textToQuestions(topic);
        for (let i = 0; i < allQuestions.length; i++) {
            let qna = allQuestions[i];
            addQuestion(qna.question, i);
        }
        resolve(true);
    })
}

function addQuestion(qstn, index) {
    var topWrap = document.querySelector(".questionPage").lastElementChild;
    var elem = document.createElement("div");
    elem.classList.add("question");
    elem.setAttribute("style", "max-width: 50%; margin: 1rem 1rem 2rem;");
    elem.innerHTML = `
        <span class="index_qp" style="font-weight: bold">${index + 1}</span>
        <span class="question_qp">${qstn}</span>
    `;
    topWrap.appendChild(elem);
    elem = document.createElement("hr");
    topWrap.appendChild(elem);
}