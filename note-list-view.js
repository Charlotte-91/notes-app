class NoteListView {
  constructor(noteListModel) {
    this.noteListModel = noteListModel;
  }

  htmlList() {
    let firstNote;
    if (this.noteListModel.displayNotes().length > 0) {
      let notes = this.noteListModel.displayNotes();
      firstNote = notes[0].text;
    } else {
      firstNote = "";
    }
    return `<ul><li><div>${firstNote}</div></li></ul>`;
  }
}
