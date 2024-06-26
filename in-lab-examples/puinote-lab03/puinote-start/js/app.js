// Todo: try console.log

// Todo: create an updateElement() function that can modify HTML elements
const notecard = {
    noteTitle: 'This is the Title of the Note!',
    noteBody: 'And here is the body of the note.',
    noteImageURL: 'assets/warhol-frog.png',
};

notecard.element = document.querySelector('#notecard-one');

function updateElement(){
    const noteImageElement =notecard.element.querySelector(".notecard-thumbnail");
    noteImageElement.src = notecard.noteImageURL;

    const noteTitleElement = notecard.element.querySelector('.note-title');
    noteTitleElement.innerText = notecard.noteTitle;

    const noteBodyElement = notecard.element.querySelector('.note-body');
    noteBodyElement.innerText = notecard.noteBody;
}

function submitNote(){
    const editorTitleElement = document.querySelector('#note-editor-title');
    const editorBodyElement = document.querySelector('#note-editor-body');
    notecard.noteBody = editorBodyElement.value;
    notecard.noteTitle = editorTitleElement.value;
    updateElement();
}

const btnSubmit = document.querySelector('#btn-submit');
btnSubmit.onclick = submitNote
// Todo: create a submitNote() function to grab user input and update notecard

// Todo: create an object

// Todo: grab a specific notecard element

// Todo: add a click event


// Todo: try console.log
//console.log("start implementation");

// Todo: create an updateElement() function that can modify HTML elements
/*function updateElement(){
    const noteImageElement = notecard.element.querySelector(".notecard-thumbnail");
    const noteTitleElement = notecard.element.querySelector(".note-title");
    const noteBodyElement = notecard.element.querySelector(".note-body");

    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody;
    
    //noteTitleElement.innerText = "Write whatever you want here!";

    //noteImageElement.src = 'assets/warhol-frog.png';
   // console.log(noteImageElement);
}

// Todo: create a submitNote() function to grab user input and update notecard
function submitNote(){
    const editorTitleElement = document.querySelector("#note-editor-title");
    const editorBodyElement = document.querySelector("#note-editor-body");
    
    notecard.noteTitle = editorTitleElement.value;
    notecard.noteBody = editorBodyElement.value;

    updateElement();
}


// Todo: create an object
let notecard = {
    noteTitle: "This is the Title of the Note!",
    noteBody: "And here is the body of the note.",
    noteImageURL: "assets/warhol-frog.png",
};
//shouldn't we define this earlier? are the things inside properties?

// Todo: grab a specific notecard element
notecard.element = document.querySelector("#notecard-one");

// Todo: add a click event
const btnSubmit = document.querySelector('#btn-submit');
btnSubmit.onclick = submitNote; 
*/