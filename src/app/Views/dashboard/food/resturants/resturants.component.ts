import { Component, OnInit } from "@angular/core";
import { ResturantsService } from "../shared/resturants.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-resturants",
  templateUrl: "./resturants.component.html",
  styleUrls: ["./resturants.component.css"]
})
export class ResturantsComponent implements OnInit {
  constructor(
    private formservice: ResturantsService,
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
