class notecard{
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
    "Something about frog", "#notecard-one");

