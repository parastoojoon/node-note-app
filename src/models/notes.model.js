class Note {
  constructor(id, title, note) {
    this.id = id;
    this.note = note;
    this.title = title;
  }

  fill(newFields) {
    for (var field in this.fields) {
      if (this.fields[field] !== "undefined") {
        this.fields[field] = newFields[field];
      }
    }
  }
}

export { Note };
