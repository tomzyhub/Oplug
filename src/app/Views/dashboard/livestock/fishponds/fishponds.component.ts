import { Component, OnInit } from "@angular/core";
import { FishpondService } from "../shared/fishpond.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-fishponds",
  templateUrl: "./fishponds.component.html",
  styleUrls: ["./fishponds.component.css"]
})
export class FishpondsComponent implements OnInit {
  constructor(
    private formservice: FishpondService,
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
