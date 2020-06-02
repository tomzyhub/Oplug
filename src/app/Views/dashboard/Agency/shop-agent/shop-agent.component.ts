import { Component, OnInit } from "@angular/core";

import { ShopAgentService } from "../shared/shop-agent.service";
import { NotificationService } from "../shared/notification.service";

@Component({
  selector: "app-shop-agent",
  templateUrl: "./shop-agent.component.html",
  styleUrls: ["./shop-agent.component.css"]
})
export class ShopAgentComponent implements OnInit {
  constructor(
    private formservice: ShopAgentService,
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
