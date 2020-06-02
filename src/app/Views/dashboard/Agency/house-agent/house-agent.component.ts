import { Component, OnInit } from "@angular/core";

import { HouseAgentService } from "../shared/house-agent.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-house-agent",
  templateUrl: "./house-agent.component.html",
  styleUrls: ["./house-agent.component.css"]
})
export class HouseAgentComponent implements OnInit {
  constructor(
    private formservice: HouseAgentService,
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
