import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {AuthService} from '../../core/auth.service';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';
@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
title:String
image:string = null
content:string
buttontext:string
  constructor(private postservice :PostService,private authservice:AuthService) { }

  ngOnInit() {
  }
createPost(){
  const data={
    author:this.auth.authState.displayName || this.auth.authState.email,
    authorId:this.auth.currentUserId,
    content:this.content,
    image:this.image,
    published:new Date(),
    title:this.title
  }
this.postservice.create(data);
  this.title='';
  this.content='';
this.buttontext='Post Created';
    setTimeout(()=>(this.buttontext='create post'),3000);
}
}
