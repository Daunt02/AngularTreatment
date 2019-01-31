import { Component, OnInit } from '@angular/core';

import { InfoForm } from '../info-form';

@Component({
  selector: 'app-cust-form',
  templateUrl: './cust-form.component.html',
  styleUrls: ['./cust-form.component.css']
})
export class CustFormComponent implements OnInit {

  model = new InfoForm(12, 'Your Name', 'Your Phone', 'Your Email', 'Start Location', 'End Location');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  newCust() {
    this.model = new InfoForm(42, '', '', '', '', '');
  }

  ngOnInit() {
  }

}
