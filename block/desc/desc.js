export default  class Desc {

    constructor(node) {
        this.node = node;
        this.render();
    }

    render() {
        let table = this.generateTable();
        this.node.appendChild(table);
    }


    generateTable() {

        let cells = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        let rows = [8, 7, 6, 5, 4, 3, 2, 1];
        let table = document.createElement('table');
        table.className = 'desc';
        let even = true;

        function swapEven(){
            even ? even = false : even = true;
        }

        for (let r of rows) {
            let tr = document.createElement('tr');
            tr.dataset.row = r;
            for (let c of cells) {
                let td = document.createElement('td');
                td.classList.add('desc__cell');
                td.dataset.cell = c;
                //odd or even? making black or white fields
                even ? td.classList.add('white-field') : td.classList.add('black-field');
                if (r === 1) {
                    let lettersSpan = document.createElement('span');
                    lettersSpan.innerText = c;
                    lettersSpan.className = 'index index-bottom';
                    td.appendChild(lettersSpan);
                }
                if (c === 'a') {
                    let numbersSpan = document.createElement('span');
                    numbersSpan.innerText = r;
                    numbersSpan.className = 'index index-left';
                    td.appendChild(numbersSpan);
                }
                tr.appendChild(td);
                swapEven();
            }
            swapEven();
            table.appendChild(tr);

        }
        return table;
    }



}
