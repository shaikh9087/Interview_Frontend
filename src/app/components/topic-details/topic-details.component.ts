import { Component } from '@angular/core';
import { CreateuserService } from '../../services/createuser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from '../../models/Topic';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrl: './topic-details.component.css'
})
export class TopicDetailsComponent {

  
  topicId: number=0;
  topic: Topic=new Topic();
  
  

  constructor(private route: ActivatedRoute,private router: Router,
    private service: CreateuserService) { }

    ngOnInit() {
      this.topic = new Topic(); 
      this. topicId = this.route.snapshot.params['topicId'];
      
      this.service.getOneTopic(this.topicId).subscribe((data: Topic)=>{
        console.log(data);
        this.topic=data;
      })
    
}

list(){
  this.router.navigate(['tList']);
}
}
