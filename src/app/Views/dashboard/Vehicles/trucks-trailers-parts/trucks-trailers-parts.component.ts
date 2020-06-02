import { Component, OnInit } from "@angular/core";
import { TruckTrialerSparePartsService } from "../shared/truck-trialer-spare-parts.service";
import { NotificationService } from "../shared/notification.service";

@Component({
  selector: "app-trucks-trailers-parts",
  templateUrl: "./trucks-trailers-parts.component.html",
  styleUrls: ["./trucks-trailers-parts.component.css"]
})
export class TrucksTrailersPartsComponent implements OnInit {
  constructor(
    private formservice: TruckTrialerSparePartsService,
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
