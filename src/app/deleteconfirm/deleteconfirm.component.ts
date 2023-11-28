import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css'],
})
export class DeleteconfirmComponent {

  @Input() item: String | undefined;

  // event creation

  // EventEmitter

  @Output() onCancel=new EventEmitter()

  constructor(private ds: DataService) {  }

  cancel(){
this.onCancel.emit()
  }

}
