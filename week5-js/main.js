let page   = document.getElementById('mainDiv');
let h2Tag  = document.createElement('h2');
let btnTag = document.createElement('button')
let url    = 'https://api.github.com/repos/SocialHackersCodeSchool/';
let pargh = document.createElement('p');
btnTag.innerHTML = 'click me';
btnTag.className = 'btnclass';
h2Tag.innerHTML  = ' Welcome To My page  ';
h2Tag.className  = 'h2class';
page.appendChild(h2Tag);
page.appendChild(btnTag);
btnTag.addEventListener('click',function(){
  console.log('why you clicked me now ? I trying to sleep lol ');
   fetchDataAPI(); // here is the function for the click button
});
//----------step 3
function fetchDataAPI(){
  fetch('https://api.github.com/orgs/SocialHackersCodeSchool/repos')
  .then(function(res){
    return res.json();
      //console.log(res);
      })
  .then(function(jsonData){
       console.log(jsonData); // just for check if the function works
       // page.innerHTML = JSON.stringify(jsonData)
       let divTag = document.createElement('div');
       page.appendChild(divTag);
         divTag.className = 'divTag';  // the data API
          for (var i = 0; i < jsonData.length; i++) {
            let btnTag2 = document.createElement('button');
            btnTag2.className = ' btnclass';  // for Loop with all rules
            let dataName = jsonData[i].name ;
            btnTag2.innerHTML = dataName ;
            divTag.appendChild(btnTag2);
            btnTag2.addEventListener('click', function(){
              getRepository(dataName,);
            })
          }
     });
}

function getRepository(name){
  console.log(url + name);
  fetch(url + name)
  .then(function(responser){
    return responser.json();
  })
  .then(function(Data){
    pargh.innerHTML = JSON.stringify(Data);
     console.log(Data);
     page.appendChild(pargh);
  })
}
