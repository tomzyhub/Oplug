import { Component, OnInit } from "@angular/core";

import { BuildingMatrialService } from "../shared/building-matrial.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-building-materials",
  templateUrl: "./building-materials.component.html",
  styleUrls: ["./building-materials.component.css"]
})
export class BuildingMaterialsComponent implements OnInit {
  constructor(
    private formservice: BuildingMatrialService,
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
