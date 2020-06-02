import { Component, OnInit } from "@angular/core";
import { CosmeticsService } from "../shared/cosmetics.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-cosmetics",
  templateUrl: "./cosmetics.component.html",
  styleUrls: ["./cosmetics.component.css"]
})
export class CosmeticsComponent implements OnInit {
  constructor(
    private formservice: CosmeticsService,
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
