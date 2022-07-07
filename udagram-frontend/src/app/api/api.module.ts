import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

const components = [];

@NgModule({
  imports: [HttpClientModule],
  declarations: components,
  exports: components,
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ApiModule {}
