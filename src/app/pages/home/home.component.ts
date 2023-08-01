import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import {Router} from "@angular/router";

@Component({
  selector: 'br-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  posts: any[] =[];
  filteredPosts: any[] = [];
  currentPage = 1;
  pageSize = 5;
  searchText = '';

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.searchPosts();
    });
  }

  searchPosts() {
    if (!this.searchText) {
      this.filteredPosts = this.posts;
    } else {
      const postId = Number(this.searchText);
      const foundPost = this.posts.find(post => post.id === postId);
      this.filteredPosts = foundPost ? [foundPost] : [{ title: 'Post não encontrado', body: '' }];
    }
  }


  viewPostDetails(postId: number) {
    this.router.navigate(['/post', postId]);
  }
}
