import { Component, OnInit } from "@angular/core";

import { LandsurveyService } from "../shared/landsurvey.service";
import { NotificationService } from "../shared/notification.service";
@Component({
  selector: "app-land-survey",
  templateUrl: "./land-survey.component.html",
  styleUrls: ["./land-survey.component.css"]
})
export class LandSurveyComponent implements OnInit {
  constructor(
    private formservice: LandsurveyService,
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
