import { Component, OnInit } from "@angular/core";
import { BoutiqueService } from "../shared/boutique.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-boutique",
  templateUrl: "./boutique.component.html",
  styleUrls: ["./boutique.component.css"]
})
export class BoutiqueComponent implements OnInit {
  constructor(
    private formservice: BoutiqueService,
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
