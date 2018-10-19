import { Component, OnInit } from '@angular/core';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

  change(value) {
    this.stateService.change(value);
  }
}
