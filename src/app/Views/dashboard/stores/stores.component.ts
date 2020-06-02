import { Component, OnInit } from "@angular/core";
import { StoresService } from "../shared/stores.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-stores",
  templateUrl: "./stores.component.html",
  styleUrls: ["./stores.component.css"]
})
export class StoresComponent implements OnInit {
  constructor(
    private formservice: StoresService,
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
