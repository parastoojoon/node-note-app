# Notes application

Node.js app to allow for taking notes.

## Use


## API

| route       | method | description                                                                                       |
|-------------|--------|---------------------------------------------------------------------------------------------------|
| /notes/find | GET    | search for notes by content of note. Uses query 'GET <>:<port>/notes/find?contains=<some string>' |
| /notes/:id  | GET    | fetches note by id                                                                                |
|             | PUT    | updates note by id                                                                                |
|             | DELETE | deletes note by id                                                                                |
| /notes      | GET    | lists all notes                                                                                   |
|             | POST   | inserts note                                                                                      |
