let col = prompt("zadej sloupce");
let row = prompt("zadej radky");
let table = '';

for ( let i = 0; i < row; i++){
    table += '<tr>'; 
    for( let j = 0; j < col; j++) {

        table += '<td>' + '</td>';
    }

    table += '</tr>';
   
}
document.write('<table>' + table + '</table>');