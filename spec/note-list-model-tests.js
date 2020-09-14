(function (exports) {
    function testStoreNotes(){
        var noteList = new NoteListModel();
        noteList.storeNotes('bla bla')

        assert.isTrue(noteList.displayNotes()[0].text === 'bla bla')

    }  
    testStoreNotes();
})(this);