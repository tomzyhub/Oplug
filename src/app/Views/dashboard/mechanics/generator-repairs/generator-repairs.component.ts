import { Component, OnInit } from "@angular/core";
import { GeneratorRepairsService } from "../shared/generator-repairs.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-generator-repairs",
  templateUrl: "./generator-repairs.component.html",
  styleUrls: ["./generator-repairs.component.css"]
})
export class GeneratorRepairsComponent implements OnInit {
  constructor(
    private formservice: GeneratorRepairsService,
    private message: NotificationService
  ) {}

  ngOnInit() {}
  onSubmit() {
    if (this.formservice.form.valid) {
      this.formservice.addItem(this.formservice.form.value);
      this.message.success("Form Submitted successfully ");
      this.formservice.form.reset();
      this.formservice.initializeFormGroup();
    }
  }
}
