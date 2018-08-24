import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NoteService } from '../note.service';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  selectedId;
  note;
  noteForm = this.fb.group({
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

  formSubmittedValues;

  get checkLists() {
    return this.noteForm.get('checkLists') as FormArray;
  }

  get labels() {
    return this.noteForm.get('labels') as FormArray;
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

  constructor(private router: Router, private activatedroute: ActivatedRoute, private _noteservice: NoteService, private fb: FormBuilder) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
    });
    this.generateTheNoteWithGivenId(this.selectedId).then((data)=> {
      this.note = data;
    }
    );
  }

  generateTheNoteWithGivenId(id: number) {
    return new Promise((resolve, reject) => {
      this._noteservice.getById(id).subscribe(data => resolve(data))
    });
  }

  preProcessData(jsonObject) {
    console.log(this.note);
    let copy = jsonObject;
    if(copy["title"] == ""){
      copy["title"]=this.note['title'];
    }
    if(copy["plainText"] == ""){
      copy["plainText"]=this.note['plainText'];
    }
    if(copy["status"] == false){
      delete copy["status"];
    }
    if(copy['checkLists'][0]['checkListData'] == ""){
      delete copy['checkLists'];
    }
    if(copy['labels'][0]['labelData'] == ""){
      delete copy['labels'];
    }
    
    return copy;
  }
  onSubmit() {
    this.noteForm.value['id']=this.selectedId;
    this.formSubmittedValues = JSON.stringify(this.noteForm.value);
    let copy = this.preProcessData(this.noteForm.value);
    this._noteservice.putNote(copy, copy['id']).subscribe(x => this.router.navigate(["/notes"]));
  }
}


