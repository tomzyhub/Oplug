import { Component, OnInit } from "@angular/core";
import { FrozenfoodService } from "../shared/frozenfood.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-frozenfood",
  templateUrl: "./frozenfood.component.html",
  styleUrls: ["./frozenfood.component.css"]
})
export class FrozenfoodComponent implements OnInit {
  constructor(
    private formservice: FrozenfoodService,
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
