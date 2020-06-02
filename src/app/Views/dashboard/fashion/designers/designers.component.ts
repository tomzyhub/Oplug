import { Component, OnInit } from "@angular/core";
import { DesignersService } from "../shared/designers.service";
import { NotificationService } from "../shared/notification.service";

@Component({
  selector: "app-designers",
  templateUrl: "./designers.component.html",
  styleUrls: ["./designers.component.css"]
})
export class DesignersComponent implements OnInit {
  constructor(
    private formservice: DesignersService,
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
