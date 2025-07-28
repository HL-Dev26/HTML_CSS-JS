const tabl = document.getElementById('tabl')
const people = ['Mike Dev', 'John Makenzie', 'Léa Grande'];

/**
 * 
 */
people.forEach(function(item, array){
    console.log(item);
    let li = document.createElement('li');
    li.textContent = item;
    tabl.append(li);
});