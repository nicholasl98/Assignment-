let mode_btn = document.getElementById('mode')
mode_btn.addEventListener('click',changemode)

function changemode(){
    if (mode_btn.innerHTML == 'Dark'){
        document.body.style.backgroundColor= '#656565'
        mode_btn.style.backgroundColor = '#ECE8E8'
        mode_btn.style.color = 'black'
        document.querySelector('nav').style.backgroundColor='#656565'
        document.querySelector('section').style.backgroundColor='#3A3A3A'
        mode_btn.innerHTML = 'Light'
    }
    else{
        mode_btn.innerHTML = 'Dark'
        document.body.style.backgroundColor = '#ECE8E8'
        mode_btn.style.color = 'white'
        mode_btn.style.backgroundColor= '#656565'
        document.querySelector('nav').style.backgroundColor='grey'
        document.querySelector('section').style.backgroundColor='#C4C4C4'
    }
}

let new_btn = document.getElementById('newnote')
new_btn.addEventListener('click',newnote)


function newnote(){
        var x = document.getElementById("boxbutton");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
}

let cancel_btn = document.getElementById('Cancel')
cancel_btn.addEventListener('click', removeelement)

function removeelement(){
    var x = document.getElementById("boxbutton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const notesArray = [

    {title: "note one", body: "note 1"},

    {title: "note two", body: "hello sir"}, ];

let save_btn = document.getElementById('save')
save_btn.addEventListener('click',savenote)

function savenote(){
    var note = {
        title: "new note",
        body: document.getElementById('myTextBox').value
    }
        var text = document.createTextNode(`${note}`);
        text.appendChild(text);
        var element = document.getElementById("nav");
        element.appendChild(tag);
}

// Not sure how to append the userinput from the textbox into the "My Notes" section.