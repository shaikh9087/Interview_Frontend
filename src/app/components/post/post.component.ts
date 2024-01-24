import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostserviceService } from '../../services/postservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent  {
  // posts: Post[] = [];
  // selectedPost: Post = new Post();

  // constructor(private postService: PostserviceService 
  //   ) {}

  // ngOnInit(): void {
  //   this.loadPosts();
  // }

  // loadPosts() {
  //   this.postService.getAllPosts().subscribe((data) => {
  //     this.posts = data;
  //   });
  // }

  // addPost() {
  //   this.postService.addPost(this.selectedPost).subscribe(() => {
  //     this.loadPosts();
  //     this.selectedPost = new Post();
  //   });
  // }

  // updatePost() {
  //   this.postService.updatePost(this.selectedPost).subscribe(() => {
  //     this.loadPosts();
  //     this.selectedPost = new Post();
  //   });
  // }

  // getPostById(id: number) {
  //   this.postService.getPostById(id).subscribe((post) => {
  //     this.selectedPost = post;
  //   });
  // }

  // deletePostById(id: number) {
  //   this.postService.deletePostById(id).subscribe(() => {
  //     this.loadPosts();
  //     this.selectedPost = new Post();
  //   });
  // }
}