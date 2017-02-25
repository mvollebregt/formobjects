import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  hidden = false;
  testForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.testForm = this.fb.group({
      values: undefined
    })
  }

  onHideForm(hidden: boolean) {
    this.hidden = hidden;
  }
}
