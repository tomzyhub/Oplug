import { Component, OnInit } from "@angular/core";
import { SupermarketsService } from "../shared/supermarkets.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-supermarket-stores",
  templateUrl: "./supermarket-stores.component.html",
  styleUrls: ["./supermarket-stores.component.css"]
})
export class SupermarketStoresComponent implements OnInit {
  constructor(
    private formservice: SupermarketsService,
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
