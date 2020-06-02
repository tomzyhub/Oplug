import { Component, OnInit } from "@angular/core";
import { NailfixerService } from "../shared/nailfixer.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-nail-fixer",
  templateUrl: "./nail-fixer.component.html",
  styleUrls: ["./nail-fixer.component.css"]
})
export class NailFixerComponent implements OnInit {
  constructor(
    private formservice: NailfixerService,
    private message: NotificationService
  ) {}

  ngOnInit() {}
  onSubmit() {
    if (this.formservice.form.valid) {
      this.formservice.addItem(this.formservice.form.value);
      this.message.success(":: Submitted successfully");
      this.formservice.form.reset();
    }
  }
}
