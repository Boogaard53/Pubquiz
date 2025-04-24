fetch('stand.csv')
  .then(response => response.text())
  .then(data => {
    const lines = data.trim().split('\n');
    const table = document.createElement('table');

    lines.forEach((line, index) => {
      const row = document.createElement('tr');
      const cells = line.split(';');
      cells.forEach(cell => {
        const cellElem = document.createElement(index === 0 ? 'th' : 'td');
        cellElem.textContent = cell;
        row.appendChild(cellElem);
      });
      table.appendChild(row);
    });

    document.getElementById('table-container').innerHTML = '';
    document.getElementById('table-container').appendChild(table);
  })
  .catch(err => {
    document.getElementById('table-container').textContent = 'Fout bij laden stand.';
    console.error(err);
  });
