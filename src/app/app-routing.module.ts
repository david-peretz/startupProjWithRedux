import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "orgs"
  },
  {
    path: "suppliers",
    loadChildren: "./modules/orgs/orgs.module#OrgsModule"
    // loadChildren: () =>
    //   import("./modules/suppliers/suppliers.module").then(
    //     m => m.SuppliersModule
    //   )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
