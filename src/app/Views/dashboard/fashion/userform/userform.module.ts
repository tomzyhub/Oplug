import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

interface userform {
  occupation: string;
  country: string;
  state: string;
  city: string;
  phonenumber: number;
}

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class UserformModule {}
