import { Injectable } from '@angular/core';
import { AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument} from 'angularfire2/firestore';
import {Post} from './post.model';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class PostService {
postsCollection:AngularFirestoreCollection<Post>
postdoc:AngularFirestoreDocument<Post>
  constructor(private afs:AngularFirestore) {
this.postsCollection=this.afs.collection('posts',ref=>
ref.orderBy('published','desc'))
  }
  getPosts(){
    return this.postsCollection.snapshotChanges().map(actions=>{
      return actions.map(a=>{
        const data=a.payload.doc.data() as Post
        const id=a.payload.doc.id
        return {id,...data}
      })
    })
  }
  getPostData(){
    this.postdoc=this.afs.doc<Post>('posts/${id}')
    return this.postdoc.valuechanges();
  }
  create(data:Post){
    this.postsCollection.add(data);
  }
  delete(id:string){
    return this.getPost(id).delete();
  }
  update(id:string,formData){
    return this.getPost(id).update(formData);
  }
}
