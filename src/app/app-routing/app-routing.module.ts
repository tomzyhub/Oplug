import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
//just giving space
import { ForgotPasswordComponent } from "../authentication/forgot-password/forgot-password.component";
import { VerifyEmailComponent } from "../authentication/verify-email/verify-email.component";

import { LoginComponent } from "../authentication/login/login.component";

import { SignupComponent } from "../authentication/signup/signup.component";
import { DashboardComponent } from "../Views/dashboard/dashboard.component";
import { BarbersComponent } from "../Views/dashboard/Salons/barbers/barbers.component";
import { MakeoverComponent } from "../Views/dashboard/Salons/makeover/makeover.component";
import { NailFixerComponent } from "../Views/dashboard/Salons/nail-fixer/nail-fixer.component";
import { HairDressersComponent } from "../Views/dashboard/Salons/hair-dressers/hair-dressers.component";
import { CarDealersComponent } from "../Views/dashboard/Vehicles/car-dealers/car-dealers.component";
import { CarSparePartsComponent } from "../Views/dashboard/Vehicles/car-spare-parts/car-spare-parts.component";
import { TrucksTrailersPartsComponent } from "../Views/dashboard/Vehicles/trucks-trailers-parts/trucks-trailers-parts.component";
import { RefridgeratorRepairsComponent } from "../Views/dashboard/Techinicians/refridgerator-repairs/refridgerator-repairs.component";
import { AirconditionRepairsComponent } from "../Views/dashboard/Techinicians/aircondition-repairs/aircondition-repairs.component";
import { PhoneComputerRepairsComponent } from "../Views/dashboard/Techinicians/phone-computer-repairs/phone-computer-repairs.component";
import { HomeAccessoryComponent } from "../Views/dashboard/Electronics/home-accessory/home-accessory.component";
import { MobilePhoneAccessoryComponent } from "../Views/dashboard/Electronics/mobile-phone-accessory/mobile-phone-accessory.component";
import { AllDesignComponent } from "../Views/dashboard/Designers/all-design/all-design.component";
import { FishpondsComponent } from "../Views/dashboard/livestock/fishponds/fishponds.component";
import { PoultryComponent } from "../Views/dashboard/livestock/poultry/poultry.component";
import { PiggeryComponent } from "../Views/dashboard/livestock/piggery/piggery.component";
import { GeneratorRepairsComponent } from "../Views/dashboard/mechanics/generator-repairs/generator-repairs.component";
import { CarsBusesRepairsComponent } from "../Views/dashboard/mechanics/cars-buses-repairs/cars-buses-repairs.component";
import { VulcanizersComponent } from "../Views/dashboard/mechanics/vulcanizers/vulcanizers.component";
import { TruckTrailerRepairComponent } from "../Views/dashboard/mechanics/truck-trailer-repair/truck-trailer-repair.component";
import { ElectricalPartsComponent } from "../Views/dashboard/Electricals/electrical-parts/electrical-parts.component";
import { ElectriciansComponent } from "../Views/dashboard/Electricals/electricians/electricians.component";
import { BoutiqueComponent } from "../Views/dashboard/fashion/boutique/boutique.component";
import { TailorsComponent } from "../Views/dashboard/fashion/tailors/tailors.component";
import { DesignersComponent } from "../Views/dashboard/fashion/designers/designers.component";
import { CosmeticsComponent } from "../Views/dashboard/fashion/cosmetics/cosmetics.component";
import { BakersComponent } from "../Views/dashboard/food/bakers/bakers.component";
import { ResturantsComponent } from "../Views/dashboard/food/resturants/resturants.component";
import { FrozenfoodComponent } from "../Views/dashboard/food/frozenfood/frozenfood.component";
import { FurnituresComponent } from "../Views/dashboard/carpentry/furnitures/furnitures.component";
import { CarpentersComponent } from "../Views/dashboard/carpentry/carpenters/carpenters.component";
import { UpholsteryComponent } from "../Views/dashboard/carpentry/upholstery/upholstery.component";
import { PlumbersComponent } from "../Views/dashboard/building-construction/plumbers/plumbers.component";
import { PaintersComponent } from "../Views/dashboard/building-construction/painters/painters.component";
import { InterioExterioDecoComponent } from "../Views/dashboard/building-construction/interio-exterio-deco/interio-exterio-deco.component";
import { LandSurveyComponent } from "../Views/dashboard/building-construction/land-survey/land-survey.component";
import { BuildingMaterialsComponent } from "../Views/dashboard/building-construction/building-materials/building-materials.component";
import { PhotographersComponent } from "../Views/dashboard/photography-videos/photographers/photographers.component";
import { HouseAgentComponent } from "../Views/dashboard/Agency/house-agent/house-agent.component";
import { ShopAgentComponent } from "../Views/dashboard/Agency/shop-agent/shop-agent.component";
import { LandAgentComponent } from "../Views/dashboard/Agency/land-agent/land-agent.component";
import { SupermarketStoresComponent } from "../Views/dashboard/supermarket-stores/supermarket-stores.component";
import { LaundryComponent } from "../Views/dashboard/laundry/laundry.component";
import { FumigationComponent } from "../Views/dashboard/fumigation/fumigation.component";
import { CarTowingComponent } from "../Views/dashboard/car-towing/car-towing.component";
import { CyberCafeComponent } from "../Views/dashboard/cyber-cafe/cyber-cafe.component";
import { PharmacyComponent } from "../Views/dashboard/pharmacy/pharmacy.component";
import { StoresComponent } from "../Views/dashboard/stores/stores.component";
import { WeldersComponent } from "../Views/dashboard/building-construction/welders/welders.component";
import { GuardGuard } from "../authentication/shared/guard.guard";
import { SecureInnerPageGuard } from "../authentication/shared/secure-inner-page.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [SecureInnerPageGuard]
  },
  {
    path: "about",
    component: AboutComponent,
    canActivate: [SecureInnerPageGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [SecureInnerPageGuard]
  },
  {
    path: "signup",
    component: SignupComponent,
    canActivate: [SecureInnerPageGuard]
  },

  {
    path: "dashboard",
    component: DashboardComponent,

    children: [
      { path: "barber", component: BarbersComponent },
      { path: "makeover", component: MakeoverComponent },
      { path: "nailfixer", component: NailFixerComponent },
      { path: "hairdresser", component: HairDressersComponent },
      { path: "car-dealer", component: CarDealersComponent },
      { path: "car-spare-parts", component: CarSparePartsComponent },
      { path: "truck-trialers-parts", component: TrucksTrailersPartsComponent },
      {
        path: "Refridgerator-repair",
        component: RefridgeratorRepairsComponent
      },
      { path: "airconditon-repair", component: AirconditionRepairsComponent },
      {
        path: "phone-computer-repair",
        component: PhoneComputerRepairsComponent
      },
      { path: "home-accessory", component: HomeAccessoryComponent },
      {
        path: "mobile-phone-accessory",
        component: MobilePhoneAccessoryComponent
      },
      { path: "all-design-work", component: AllDesignComponent },
      { path: "fish-pond", component: FishpondsComponent },
      { path: "poultry", component: PoultryComponent },
      { path: "piggery", component: PiggeryComponent },
      { path: "generator-repair", component: GeneratorRepairsComponent },
      { path: "cars-buses-repair", component: CarsBusesRepairsComponent },
      { path: "vulcanizers", component: VulcanizersComponent },
      { path: "truck-trailer-repair", component: TruckTrailerRepairComponent },
      { path: "electrical-parts", component: ElectricalPartsComponent },
      { path: "electricians", component: ElectriciansComponent },
      { path: "boutique", component: BoutiqueComponent },
      { path: "Tailors", component: TailorsComponent },
      { path: "designers", component: DesignersComponent },
      { path: "cosmetics", component: CosmeticsComponent },
      { path: "Bakers ", component: BakersComponent },
      { path: "Resturants", component: ResturantsComponent },
      { path: "frozen-foods", component: FrozenfoodComponent },
      { path: "furnitures", component: FurnituresComponent },
      { path: "carpenters", component: CarpentersComponent },
      { path: "Upholstery", component: UpholsteryComponent },
      { path: "Plumbers", component: PlumbersComponent },
      { path: "welders", component: WeldersComponent },
      { path: "Painters", component: PaintersComponent },
      {
        path: "interio-exterio-decorations",
        component: InterioExterioDecoComponent
      },
      { path: "land-survey", component: LandSurveyComponent },
      { path: " building-materials", component: BuildingMaterialsComponent },
      { path: "photographers", component: PhotographersComponent },
      { path: "house-agent", component: HouseAgentComponent },
      { path: "shop-agent", component: ShopAgentComponent },
      { path: "land-agent", component: LandAgentComponent },
      { path: "supermarkets", component: SupermarketStoresComponent },
      { path: "laundry", component: LaundryComponent },
      { path: "fumigation", component: FumigationComponent },
      { path: "Car-towing", component: CarTowingComponent },
      { path: "Cyber-Cafe", component: CyberCafeComponent },
      { path: "pharmacy", component: PharmacyComponent },
      { path: "stores", component: StoresComponent }
    ],
    canActivate: [GuardGuard]
  },

  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    canActivate: [SecureInnerPageGuard]
  },
  {
    path: "verify-email",
    component: VerifyEmailComponent,
    canActivate: [SecureInnerPageGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
