import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { FormGroup, FormControl } from '@angular/forms'
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms'; 

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  submittedValues;

  profileForm = this.fb.group({
    title : [''],
    plainText : [''],
    pinned : [false],
    checkLists : this.fb.array([
      this.fb.group({
      checkListData : [''],
      status : [false]
      })
    ]),
    labels : this.fb.array([
      this.fb.group({
        labelData: ['']
      })
    ])
    });

  constructor(private fb: FormBuilder, private _noteservice: NoteService) { }

  ngOnInit() {
  }

  get checkLists() {
    return this.profileForm.get('checkLists') as FormArray;
  }

  get labels() {
    return this.profileForm.get('labels') as FormArray;
  }

  addCheckList() {
    this.checkLists.push(this.fb.group({
      checkListData: [''],
      status: [false]
    }));
  }

  addLabel() {
    this.labels.push(this.fb.group({
      labelData: ['']
    }));
  }

  onSubmit() {
    // this.submittedValues = JSON.stringify(this.profileForm.value);
    this._noteservice.postNotes(this.profileForm.value).subscribe();
  }

}
