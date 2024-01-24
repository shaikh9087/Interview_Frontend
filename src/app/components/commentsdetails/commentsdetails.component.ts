import { Component } from '@angular/core';
import { CreateuserService } from '../../services/createuser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Comments } from '../../models/comments';

@Component({
  selector: 'app-commentsdetails',
  templateUrl: './commentsdetails.component.html',
  styleUrl: './commentsdetails.component.css'
})
export class CommentsdetailsComponent {

  commentsId: number=0;
  comments: Comments=new Comments();
  
  

  constructor(private route: ActivatedRoute,private router: Router,
    private service: CreateuserService) { }

    ngOnInit() {
      this.comments = new Comments(); 
      this. commentsId = this.route.snapshot.params['commentsId'];
      
      /*getOnePlayer contain PlayerId so go to getOnePlayer(playerService.ts) */
      this.service.getoneCommentsById(this.commentsId).subscribe((data: Comments)=>{
        console.log(data);
        this.comments=data;
      })
}
list(){
  this.router.navigate(['listofcomments']);
}
}