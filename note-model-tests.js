(function (exports) {
    function testReturnNote(){
        var note = new NoteModel('My first note');

       assert.isTrue(note.returnNote() === 'My first note');
    };
    testReturnNote();

})(this);