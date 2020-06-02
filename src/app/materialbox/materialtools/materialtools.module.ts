import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as Material from "@angular/material";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatExpansionModule,
    Material.MatListModule,
    Material.MatSnackBarModule,
    Material.MatIconModule,
    Material.MatCardModule,
    Material.MatButtonModule,
    Material.MatFormFieldModule,
    Material.MatDialogModule
  ],

  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatListModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatExpansionModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatSnackBarModule,
    Material.MatButtonModule,
    Material.MatCardModule,
    Material.MatIconModule,
    Material.MatFormFieldModule,
    Material.MatDialogModule
  ]
})
export class MaterialtoolsModule {}
