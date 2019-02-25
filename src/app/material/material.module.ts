import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardTitle, MatCheckboxModule, MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule
  ],
})
export class MaterialModule {
}
