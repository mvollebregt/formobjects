import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Value} from "./form/shared/value-type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  hidden = false;
  testForm: FormGroup;

  Value = Value;

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

  onChange() {
    console.log(Value.byValue(this.testForm.value.values.firstValue));
    console.log(Value.byValue(this.testForm.value.values.secondValue));
  }
}
