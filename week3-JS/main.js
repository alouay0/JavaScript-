let books =[
      "The_Greek_Zorba",
      "Crime_and_Punishment",
      "All_roads_do_not_lead_to_Rome",
      "History_of_middle_East",
      "Around_the_world_in_80_days",
      "Poor_people",
      "Prison_cell",
      "Man_of_war",
      "Ephta",
      "Back_to_Haifa",

];

let information = {
    "The_Greek_Zorba": {
        "name": "The Greek Zorba ",
        "language": "English",
        "author": "	Michael Cacoyannis ",
        "image": "Img/zorba-the-greek.jpg"

    },
    "Crime_and_Punishment": {
        "name": "Crime and Punishment ",
        "language": "Arabic",
        "author": "Fyodor Dostoyevsky",
        "image": "Img/Crime-and-punishment.png"
    },
    "All_roads_do_not_lead_to_Rome": {
        "name": "All roads do not lead to Rome ",
        "language": "Arabic",
        "author": "Mouhamed Tarik",
        "image" : "Img/all-road-rome.jpg"
    },
    "History_of_middle_East": {
        "name": "History Of Middle East",
        "language": "Arabic Version ",
        "author": " Arthur Goldschmidt ",
        "image": "Img/history.jpg"
    },
    "Around_the_world_in_80_days": {
        "name": "Around the world in 80 days",
        "language": "English",
        "author": "Jules Verne",
        "image":"Img/80-days.jpg"
    },
    "Poor_people": {
        "name": "Poor Pepole",
        "language": "English",
        "author": "Fyodor Dostoyevsky",
        "image": "Img/history.jpg"
    },
    "Prison_cell": {
        "name": "Prison_cell_Arabic_version",
        "language": "Arabic version",
        "author": "Fathi Fadel",
        "image": "Img/cell.jpg"
    },
    "Man_of_war": {
        "name": " Man Of War ",
        "language": "English",
        "author": "H. Paul Honsinger",
        "image": "Img/man of war.jpg"
    },
    "Ephta": {
        "name": " Ephta 'Number 7 in Greek' ",
        "language": "Arabic",
        "author": "Mouhmad Sadek",
        "image": "Img/ephta.jpg"
    },
    "Back_to_Haifa": {
        "name": "Back to Haifa ",
        "language": "Arabic version",
        "author": "Ghassan Knfani",
        "image": "Img/back to haifa.jpg"

    }
};

var i = 0;
for (; i < books.length; i++) {
  console.log(books[i]);
  let liTag = document.createElement("li");
  liTag.innerHTML = books[i] ;
  document.getElementById('div1').append(liTag);

  let liTag2 = document.createElement("li")
  let bookId = books[i];
  liTag2.innerHTML = information[bookId].name + "<br>" +
  information[bookId].language + "<br>" +
  information[bookId].author;
  document.getElementById('div2').append(liTag2);

  let imgTag =  document.createElement('img')
  let ImgId = books[i];
  document.getElementById('div2').append(imgTag)
  imgTag.src = information[bookId].image;

}
     // Here is the function

/*var ulTag = document.createElement('ul');
document.getElementById('div2').appendChild(ulTag);
books.forEach(function(key) {
  var liTag = document.createElement('li');
  ul.appendChild(liTag);
  li.innerHTML += key;

});*/
