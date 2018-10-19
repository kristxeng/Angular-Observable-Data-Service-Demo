import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  value$: Observable<string> = this.stateService.value$;

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

}
