import { Component } from '@angular/core';
import { Comments } from '../../models/comments';
import { CreateuserService } from '../../services/createuser.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comments-update',
  templateUrl: './comments-update.component.html',
  styleUrl: './comments-update.component.css'
})
export class CommentsUpdateComponent {

  commentsId: number=0;
  comments: Comments=new Comments();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: CreateuserService) { }


    ngOnInit() {
      this.comments = new Comments();
  
      this. commentsId = this.route.snapshot.params['commentsId'];
      
      
      this.service.
      getoneCommentsById(this.commentsId).subscribe((data: Comments)=>{
        console.log(data);
        this.comments=data;
      })
            
    }

    onSubmit(){
      this. updateComments();
    }

    updateComments()
    {
      this.service.updateComments(this.comments).subscribe((data: any)=>{
        console.log(data);
        this.comments= new Comments();
        this.gotoList();
      })
    }

    gotoList(){
      this.router.navigate(['listofcomments']);
    }

}
