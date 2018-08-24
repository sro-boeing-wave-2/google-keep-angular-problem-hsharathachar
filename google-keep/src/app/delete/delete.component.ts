import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  noteid;

  constructor(private _noteService: NoteService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.noteid = id;
    this._noteService.deleteNote(this.noteid).subscribe();
  }

}
