import { Component, OnInit } from "@angular/core";
import { FurnitureService } from "../shared/furniture.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-furnitures",
  templateUrl: "./furnitures.component.html",
  styleUrls: ["./furnitures.component.css"]
})
export class FurnituresComponent implements OnInit {
  constructor(
    private formservice: FurnitureService,
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
