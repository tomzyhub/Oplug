import { Component, OnInit } from "@angular/core";

import { LandAgentService } from "../shared/land-agent.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-land-agent",
  templateUrl: "./land-agent.component.html",
  styleUrls: ["./land-agent.component.css"]
})
export class LandAgentComponent implements OnInit {
  constructor(
    private formservice: LandAgentService,
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
