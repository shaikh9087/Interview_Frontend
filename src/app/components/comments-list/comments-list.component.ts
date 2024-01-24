import { Component } from '@angular/core';
import { Comments } from '../../models/comments';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { CreateuserService } from '../../services/createuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent {

  comment : Comments = new Comments;
  public Comments: Observable<Comments[]> =of([]);
  comments: any;
  // comments: any;
  
  constructor(private service: CreateuserService,
    private router: Router) {
      
    }

    ngOnInit() {
      this.getAll();
    }
  
    getAll() {
      this.comments = this.service.getAllComments();
    }
  
  
    deleteCommentsById(id:number)
      {
        return this.service.deleteCommentsById(id).subscribe((data)=>{
          console.log(data);
          this.getAll();
        })
  
      }
  
      getoneCommentsById(id: number){
        this.router.navigate(['detailscomments', id]);
      }
  
      updateComments(id:number)
      {
        this.router.navigate(['updatecomments', id]);
      }

}
