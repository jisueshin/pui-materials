class Notecard{
    constructor(imageURL, title, body, elementID){
        this.noteImageURL = imageURL;
        this.noteTitle = title;
        this.noteBody = body;
        this.element = document.querySelector(elementID);

        this.updateElement()

        const btnDelete = this.element.querySelector('.icon-delete');
        btnDelete.onclick = this.deleteNote.bind(this);
    }

    updateElement(){
        //const element = document.querySelector("#notecard-one");
        const noteTitleElement = this.element.querySelector('.note-title');
        noteTitleElement.innerText = this.noteTitle;

        const noteImageElement = this.element.querySelector('.notecard-thumbnail');
        noteImageElement.src = this.noteImageURL;

        const noteBodyElement = this.element.querySelector('.note-body');
        noteBodyElement.innerText = this.noteBody;
    }

    deleteNote(){
        this.element.remove();
    }
}

const notecardOne = new Notecard(
    'assets/warhol-frog.png',
    'This is the First Note',
    'Here is some body text for the first note.',
    '#notecard-one'
);

const notecardTwo = new Notecard(
    'assets/warhol-orangutan.png',
    'This is the Second Note',
    'And here is some body text for the second note! What could be next?',
    '#notecard-two'
);
  
  const notecardThree = new Notecard(
    'assets/warhol-eagle.png',
    'This is the Third Note',
    'Yep, you guessed it, here is some body text for the third note.',
    '#notecard-three'
);

/*class notecard{
    noteTitle;
    noteBody;
    noteImageURL;

    constructor(imageURL, title, body, elementID){
        this.noteImageURL = imageURL;
        this.noteTitle = title;
        this.noteBody = body;
        this.element = document.querySelector(elementID);

        const btnDelete = this.element.querySelector(".icon-delete");

        btnDelete.onclick = this.removeNote.bind(this);

        this.updateElement();
    }

    updateElement(){
        const noteImageElement = this.element.querySelector(".notecard-thumbnail");
        noteImageElement.src = this.noteImageURL;
    }

    removeNote(){
        this.element.remove();
    }
}

const notecardOne = new notecard("assets/warhol-frog.png", "Frog", 
    "Something about frog", "#notecard-one");*/

