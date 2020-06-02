import { Component, OnInit } from "@angular/core";
import { TruckTrailersRepairService } from "../shared/truck-trailers-repair.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-truck-trailer-repair",
  templateUrl: "./truck-trailer-repair.component.html",
  styleUrls: ["./truck-trailer-repair.component.css"]
})
export class TruckTrailerRepairComponent implements OnInit {
  constructor(
    private formservice: TruckTrailersRepairService,
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
