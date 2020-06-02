import { Component, OnInit } from "@angular/core";
import { VulcanizersService } from "../shared/vulcanizers.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-vulcanizers",
  templateUrl: "./vulcanizers.component.html",
  styleUrls: ["./vulcanizers.component.css"]
})
export class VulcanizersComponent implements OnInit {
  constructor(
    private formservice: VulcanizersService,
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
