(function () {
    let cells = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let rows = [8, 7, 6, 5, 4, 3, 2, 1];
    let table = document.createElement('table');
    table.className = 'desc';


    for (let r of rows) {
        let tr = document.createElement('tr');
        tr.dataset.row = r;
        for (let c of cells) {
            let td = document.createElement('td');
            td.className = 'desc__cell';
            td.dataset.cell = c;
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }


    class Desc {

        constructor(node) {
            this.node = node;
            this.render();
            this.node.addEventListener('click', event => this.onClick(event));
        }

        render() {
            this.node.appendChild(table);
        }

        onClick(event) {
            let target = event.target;
            if (target.tagName !== 'TD' && target.tagName !== 'IMG') {
                return;
            }
            if (this.current) {
                this.current.classList.toggle('desc__cell_active', false);
            }

            target.classList.toggle('desc__cell_active');
            this.current = target;
        }

    }

    window.Desc = Desc;
})();