(function (exports) {
  function emptyView() {
    console.log("First test");
    let noteListModel = new NoteListModel();
    let view = new NoteListView(noteListModel);

    let expected = "<ul><li><div></div></li></ul>";

    assert.isTrue(view.htmlList() === expected);
  }

  function oneNoteView() {
    console.log("Second test");
    let noteListModel = new NoteListModel();
    noteListModel.storeNotes("Favourite food: pesto");

    let view = new NoteListView(noteListModel);

    let expected = "<ul><li><div>Favourite food: pesto</div></li></ul>";

    assert.isTrue(view.htmlList() === expected);
  }

  function twoNoteView() {
    console.log("Third Test");
    let noteListModel = new NoteListModel();

    noteListModel.storeNotes("Favourite food: pesto");
    noteListModel.storeNotes("Favourite drink: seltzer");

    let view = new NoteListView(noteListModel);

    let expected =
      "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>";

    assert.isTrue(view.htmlList === expected);
  }
  emptyView();
  oneNoteView();
  twoNoteView();
})(this);
