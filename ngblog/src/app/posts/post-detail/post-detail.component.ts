import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';
import {Post} from '../post.model';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
post:Post;
editing:boolean=false;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private postservice:PostService
  ) { }

  ngOnInit() {
    this.getPosts();
  }
getPosts(){
  const id=this.route.snapshot.paramMap.get('id')
  return this.postservice.getPostData(id).subscribe(data =>this.post=data)
}
updatePost(){
  const formData={
    title:this.post.title,
    content:this.post.title

  }
  const id=this.route.snapshot.paramMap.get('id');
  this.postservice.update(id,formData);
  this.editing=false;
}
delete(id:string){
  const id1=this.route.snapshot.paramMap.get('id');
  this.postservice.delete('id1');
  this.router.navigate(['/blog'])
}
}
