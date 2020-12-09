function loadForm() {
    let list = [
        "Alles kits?",
        "Heeft problemen met Blackboard",
        "Wordt boos omdat niemand reageert",
        "Stelt een onduidelijke vraag",
        "Testament",
        "Vertroetelt Owen of Lenny",
        "Kleurt zijn PowerPoint vol",
        "\"Goede middag !  Hoe gaat het ?\"",
        "Is alles duidelijk?",
        "Begrijpt iedereen dat?",
        "You make my day!"
    ];
    let newList = [];
    for (let i = 0; i < 9; i++) {
        newList.push(list.splice(Math.floor((Math.random() * list.length)), 1)[0]);
    }
    generateForm(newList);
}

function generateForm(list) {
    const formElt = document.querySelector('#tbody');

    formElt.innerHTML = `
    <tr class="row">
        <td class="data">${list[0]}</td>
        <td class="data">${list[1]}</td>
        <td class="data">${list[2]}</td>
    </tr>
    <tr>
        <td class="data">${list[3]}</td>
        <td class="data">${list[4]}</td>
        <td class="data">${list[5]}</td>
    </tr>
    <tr>
        <td class="data">${list[6]}</td>
        <td class="data">${list[7]}</td>
        <td class="data">${list[8]}</td>
    </tr>
    `;
}

document.querySelector('#new').addEventListener('click', loadForm)
document.querySelector('#print').addEventListener('click', () => {
    document.querySelector('#actions').classList.toggle('hidden');
    print();
})

loadForm();