import { Component, OnInit } from "@angular/core";

import { InterioExterioDecoService } from "../shared/interio-exterio-deco.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-interio-exterio-deco",
  templateUrl: "./interio-exterio-deco.component.html",
  styleUrls: ["./interio-exterio-deco.component.css"]
})
export class InterioExterioDecoComponent implements OnInit {
  constructor(
    private formservice: InterioExterioDecoService,
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
