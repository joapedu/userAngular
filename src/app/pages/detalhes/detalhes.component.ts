import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'br-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId !== null) {
      this.loadPost(+postId);
    } else {
      console.log("erro postId");
    }
  }

  loadPost(id: number) {
    this.postService.getIdPost(id).subscribe(post => {
      this.post = post;
    });
  }
  }
