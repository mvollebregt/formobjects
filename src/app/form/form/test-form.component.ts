import {Component, OnInit, forwardRef} from "@angular/core";
import {Value, Selectable} from "../shared/value-type";
import {FormGroup, FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-test-form',
  templateUrl: 'test-form.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestFormComponent),
      multi: true
    }
  ]
})
export class TestFormComponent implements OnInit, ControlValueAccessor {

  // 3. De Values worden steeds opnieuw ingeladen. Er komen steeds nieuwe json-objecten uit.
  // options: Value[] = [{value: 1, displayValue: 'first'}, {value: 2, displayValue: 'second'}];

  // 4. Dit is een manier om er toch voor te zorgen dat je json-objecten in een [(ng)value] kunt stoppen en dat bij
  // herladen dezelfde waarden verschijnen. De VALUES moeten wel in het geheugen blijven. Naar mijn idee een wat
  // fragiele oplossing.
  // options: Value[] = VALUES;

  // 5. Met een class ipv een interface.
  options: Selectable<Value>[] = Value.values;

  testForm: FormGroup;
  propagateChange = (_: any) => {
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.writeValue(null);
  }

  onChange(): void {
    this.propagateChange(this.testForm.value);
  }

  writeValue(obj: any): void {
    this.testForm = this.fb.group({
      firstValue: obj ? obj.firstValue : null,
      secondValue: obj ? obj.secondValue : null,
      text: obj ? obj.text : null
    })
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

}
