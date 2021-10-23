class Note {
  fields = {
    id: null,
    note: null,
  };

  fill(newFields) {
    for (var field in this.fields) {
      if (this.fields[field] !== "undefined") {
        this.fields[field] = newFields[field];
      }
    }
  }

  getId() {
    return this.fields.id;
  }

  getNote() {
    return this.fields.note;
  }
}

export default {
  Note,
};
