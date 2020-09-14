class NoteListModel {
    constructor() {
        this.notes = [];
    }
    storeNotes(note){
        var newNote = new NoteModel(note);
        this.notes.push(newNote);
    }
    displayNotes(){
        return this.notes;
    }
}