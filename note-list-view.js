class NoteListView {
  constructor(noteListModel) {
    this.noteListModel = noteListModel;
  }

  htmlList() {
  
    let notes;
    if (this.noteListModel.displayNotes().length > 0) {
    notes = this.noteListModel.displayNotes().map(note =>{
        return `<li><div>${note.text}</div></li>`
        })
    } else {
      notes = [""];
    }

   return `<ul>${notes.join("")}</ul>`;
  }
}
