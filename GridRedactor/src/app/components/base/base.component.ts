import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JsonTypeInput} from '../../models/jsonTypeInput';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  gridForm: FormGroup;
  editForm: FormGroup;

  jsonData: JsonTypeInput[] = [];
  mockData: JsonTypeInput[] = [
    {name: 'Vasya', year: '2000'},
    {name: 'Petya', year: '2012'},
    {name: 'Bob', year: '2013'},
    {name: 'Bill', year: '2014'},
    {name: 'Mark', year: '2015'},
  ];
  selectedRow: number;


  constructor() {
  }

  ngOnInit() {
    this.gridForm = new FormGroup({
      JSON: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([\{|\[]*".+"[[😐,]{1}.*[\}|\]]]?)$/),
      ])
    });
    console.log(JSON.stringify(this.mockData));
    this.editForm = new FormGroup({
      NAME: new FormControl('', []),
      YEAR: new FormControl('', []),
    });
  }

  getJsonData() {
    this.jsonData = (JSON.parse(this.gridForm.value.JSON));
    Object.keys(this.jsonData).forEach((el) => {
      console.log(el);
    });
  }


  erase(i: number) {
    this.mockData.splice(i, 1);
  }

  edit(i: number) {
    if (this.selectedRow === i) {
      this.mockData[i].name = this.editForm.value.NAME;
      this.mockData[i].year = this.editForm.value.YEAR;
      this.editForm.reset();
      this.selectedRow = undefined;
    } else {
      this.selectedRow = i;
    }
  }
}

