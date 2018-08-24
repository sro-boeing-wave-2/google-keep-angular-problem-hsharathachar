import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  notes;
  constructor(private _noteService: NoteService, private route: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this._noteService.getNotes().subscribe(data => this.notes = data.json());
  }

  onClickDelete(note) {
    this.route.navigate(['/delete', note.id]);
  }

  editNote(id: string) {
    this.route.navigate(['/edit',id]);
  }
}
