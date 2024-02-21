document.addEventListener("DOMContentLoaded", function() {
    let cards = this.querySelectorAll(".card");

    const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const arrayEmbaralhado = keys.sort(() => Math.random() -0.5);

    cards.forEach((card) => {
        const sort1 = arrayEmbaralhado.pop();
        const sort2 = arrayEmbaralhado.pop();

        card.innerHTML = `${sort1} ou ${sort2}`
    })
})