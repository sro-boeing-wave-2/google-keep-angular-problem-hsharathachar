import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: Http) { }

  getNotes() {
    return this.http.get("https://localhost:44339/api/notes");
  }

  getById(id: number){
    let _url: string = "https://localhost:44339/api/notes/"+id;
    return this.http.get(_url);
  }

  postNotes(note) {
    return this.http.post("https://localhost:44339/api/notes", note);
  }

  putNote(note, id: number) {
    let _url: string = "https://localhost:44339/api/notes/"+id;
    return this.http.put(_url,note);
  }

  deleteNote(id) {
    return this.http.delete("https://localhost:44339/api/notes/" +  id);
  }
}
