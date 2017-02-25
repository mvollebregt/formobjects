import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TestFormComponent} from "./form/test-form.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [TestFormComponent],
  exports: [TestFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class TestFormModule {
}
