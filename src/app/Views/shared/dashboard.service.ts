import { Injectable } from "@angular/core";
import { AuthService } from "../../authentication/shared/auth.service";
import { NotificationService } from "../../authentication/shared/notification.service";
@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(public message: NotificationService, public auth: AuthService) {}
}
