import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({

  imports: [MatSidenavModule,MatExpansionModule,MatFormFieldModule,MatInputModule],
  exports: [MatSidenavModule,MatExpansionModule,MatFormFieldModule,MatInputModule]
})
export class MaterialModule { }
