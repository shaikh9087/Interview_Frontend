import { Component } from '@angular/core';
import { Topic } from '../../models/Topic';
import { CreateuserService } from '../../services/createuser.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-topic',
  templateUrl: './update-topic.component.html',
  styleUrl: './update-topic.component.css'
})
export class UpdateTopicComponent {

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

    onSubmit(){
      this. updateTopic();
    }
  
  updateTopic()
    {
      this.service.updateTopic(this.topic).subscribe((data: any)=>{
        console.log(data);
        this.topic= new Topic();
      })
    }

    list(){
      this.router.navigate(['tList']);
    }

}
