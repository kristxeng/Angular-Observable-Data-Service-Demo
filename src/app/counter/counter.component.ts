import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  value$: Observable<string> = this.stateService.value$;

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

}
