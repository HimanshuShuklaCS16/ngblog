import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostsModule } from './posts/posts.module';
const routes:Routes=[
  {path:'',redirectTo:'/blog',pathMatch:'full'},
  {path:'',loadChildren:'./posts/posts.module#PostsModule'}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    ,BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CoreModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
