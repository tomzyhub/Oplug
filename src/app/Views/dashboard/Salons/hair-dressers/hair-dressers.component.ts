import { Component, OnInit } from "@angular/core";
import { HairDresserService } from "../shared/hair-dresser.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-hair-dressers",
  templateUrl: "./hair-dressers.component.html",
  styleUrls: ["./hair-dressers.component.css"]
})
export class HairDressersComponent implements OnInit {
  constructor(
    private formservice: HairDresserService,
    private message: NotificationService
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (this.formservice.form.valid) {
      this.formservice.addItem(this.formservice.form.value);
      this.message.success(":: Submitted successfully");
      this.formservice.form.reset();
      this.formservice.initializeFormGroup();
    }
  }
}
