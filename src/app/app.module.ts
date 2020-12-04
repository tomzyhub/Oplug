import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { AppRoutingModule } from "./app-routing/app-routing.module";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

import { SignupComponent } from "./authentication/signup/signup.component";

import { DashboardComponent } from "./Views/dashboard/dashboard.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { MaterialtoolsModule } from "./materialbox/materialtools/materialtools.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { BarbersComponent } from "./Views/dashboard/Salons/barbers/barbers.component";
import { MakeoverComponent } from "./Views/dashboard/Salons/makeover/makeover.component";
import { NailFixerComponent } from "./Views/dashboard/Salons/nail-fixer/nail-fixer.component";
import { HairDressersComponent } from "./Views/dashboard/Salons/hair-dressers/hair-dressers.component";
import { CarDealersComponent } from "./Views/dashboard/Vehicles/car-dealers/car-dealers.component";
import { CarSparePartsComponent } from "./Views/dashboard/Vehicles/car-spare-parts/car-spare-parts.component";
import { TrucksTrailersPartsComponent } from "./Views/dashboard/Vehicles/trucks-trailers-parts/trucks-trailers-parts.component";
import { RefridgeratorRepairsComponent } from "./Views/dashboard/Techinicians/refridgerator-repairs/refridgerator-repairs.component";
import { AirconditionRepairsComponent } from "./Views/dashboard/Techinicians/aircondition-repairs/aircondition-repairs.component";
import { PhoneComputerRepairsComponent } from "./Views/dashboard/Techinicians/phone-computer-repairs/phone-computer-repairs.component";
import { HomeAccessoryComponent } from "./Views/dashboard/Electronics/home-accessory/home-accessory.component";
import { MobilePhoneAccessoryComponent } from "./Views/dashboard/Electronics/mobile-phone-accessory/mobile-phone-accessory.component";
import { AllDesignComponent } from "./Views/dashboard/Designers/all-design/all-design.component";
import { FishpondsComponent } from "./Views/dashboard/livestock/fishponds/fishponds.component";
import { PoultryComponent } from "./Views/dashboard/livestock/poultry/poultry.component";
import { PiggeryComponent } from "./Views/dashboard/livestock/piggery/piggery.component";
import { GeneratorRepairsComponent } from "./Views/dashboard/mechanics/generator-repairs/generator-repairs.component";
import { CarsBusesRepairsComponent } from "./Views/dashboard/mechanics/cars-buses-repairs/cars-buses-repairs.component";
import { VulcanizersComponent } from "./Views/dashboard/mechanics/vulcanizers/vulcanizers.component";
import { TruckTrailerRepairComponent } from "./Views/dashboard/mechanics/truck-trailer-repair/truck-trailer-repair.component";
import { ElectricalPartsComponent } from "./Views/dashboard/Electricals/electrical-parts/electrical-parts.component";
import { ElectriciansComponent } from "./Views/dashboard/Electricals/electricians/electricians.component";
import { BoutiqueComponent } from "./Views/dashboard/fashion/boutique/boutique.component";
import { TailorsComponent } from "./Views/dashboard/fashion/tailors/tailors.component";
import { DesignersComponent } from "./Views/dashboard/fashion/designers/designers.component";
import { CosmeticsComponent } from "./Views/dashboard/fashion/cosmetics/cosmetics.component";
import { BakersComponent } from "./Views/dashboard/food/bakers/bakers.component";
import { ResturantsComponent } from "./Views/dashboard/food/resturants/resturants.component";
import { FrozenfoodComponent } from "./Views/dashboard/food/frozenfood/frozenfood.component";
import { FurnituresComponent } from "./Views/dashboard/carpentry/furnitures/furnitures.component";
import { CarpentersComponent } from "./Views/dashboard/carpentry/carpenters/carpenters.component";
import { UpholsteryComponent } from "./Views/dashboard/carpentry/upholstery/upholstery.component";
import { PlumbersComponent } from "./Views/dashboard/building-construction/plumbers/plumbers.component";
import { PaintersComponent } from "./Views/dashboard/building-construction/painters/painters.component";
import { InterioExterioDecoComponent } from "./Views/dashboard/building-construction/interio-exterio-deco/interio-exterio-deco.component";
import { LandSurveyComponent } from "./Views/dashboard/building-construction/land-survey/land-survey.component";
import { BuildingMaterialsComponent } from "./Views/dashboard/building-construction/building-materials/building-materials.component";
import { PhotographersComponent } from "./Views/dashboard/photography-videos/photographers/photographers.component";
import { HouseAgentComponent } from "./Views/dashboard/Agency/house-agent/house-agent.component";
import { ShopAgentComponent } from "./Views/dashboard/Agency/shop-agent/shop-agent.component";
import { LandAgentComponent } from "./Views/dashboard/Agency/land-agent/land-agent.component";
import { SupermarketStoresComponent } from "./Views/dashboard/supermarket-stores/supermarket-stores.component";
import { LaundryComponent } from "./Views/dashboard/laundry/laundry.component";
import { FumigationComponent } from "./Views/dashboard/fumigation/fumigation.component";
import { CarTowingComponent } from "./Views//dashboard/car-towing/car-towing.component";
import { CyberCafeComponent } from "./Views/dashboard/cyber-cafe/cyber-cafe.component";

import { PharmacyComponent } from "./Views/dashboard/pharmacy/pharmacy.component";
import { StoresComponent } from "./Views/dashboard/stores/stores.component";
import { WeldersComponent } from "./Views/dashboard/building-construction/welders/welders.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { ForgotPasswordComponent } from "./authentication/forgot-password/forgot-password.component";
import { VerifyEmailComponent } from "./authentication/verify-email/verify-email.component";
import { NgxFontAwesomeModule } from "ngx-font-awesome";
import { LoginComponent } from "./authentication/login/login.component";
import { AuthService } from "./authentication/shared/auth.service";
import { NotificationService } from "./authentication/shared/notification.service";
import { DashboardService } from "./Views/shared/dashboard.service";
import { ProfileComponent } from "./Views/profile/profile.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    BarbersComponent,
    MakeoverComponent,
    NailFixerComponent,
    HairDressersComponent,
    CarDealersComponent,
    CarSparePartsComponent,
    TrucksTrailersPartsComponent,
    RefridgeratorRepairsComponent,
    AirconditionRepairsComponent,
    PhoneComputerRepairsComponent,
    HomeAccessoryComponent,
    MobilePhoneAccessoryComponent,
    AllDesignComponent,
    FishpondsComponent,
    PoultryComponent,
    PiggeryComponent,
    GeneratorRepairsComponent,
    CarsBusesRepairsComponent,
    VulcanizersComponent,
    TruckTrailerRepairComponent,
    ElectricalPartsComponent,
    ElectriciansComponent,
    BoutiqueComponent,
    TailorsComponent,
    DesignersComponent,
    CosmeticsComponent,
    BakersComponent,
    ResturantsComponent,
    FrozenfoodComponent,
    FurnituresComponent,
    CarpentersComponent,
    UpholsteryComponent,
    PlumbersComponent,
    PaintersComponent,
    InterioExterioDecoComponent,
    LandSurveyComponent,
    BuildingMaterialsComponent,
    PhotographersComponent,
    HouseAgentComponent,
    ShopAgentComponent,
    LandAgentComponent,
    SupermarketStoresComponent,
    LaundryComponent,
    FumigationComponent,
    CarTowingComponent,
    CyberCafeComponent,
    PharmacyComponent,
    StoresComponent,
    WeldersComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ProfileComponent,
  ],
  entryComponents: [ProfileComponent],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialtoolsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxFontAwesomeModule,
    FormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({}),
    AngularFireModule.initializeApp(environment.firebase, "oplug"),
    AngularFireModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
  ],
  providers: [AuthService, NotificationService, DashboardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
