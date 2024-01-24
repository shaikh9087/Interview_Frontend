import { Component } from '@angular/core';
import { CreateuserService } from '../../services/createuser.service';
import { Router } from '@angular/router';
import { Topic } from '../../models/Topic';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrl: './add-topic.component.css'
})
export class AddTopicComponent {

  constructor(private service:CreateuserService,
    private router: Router) { }
  submitted=false;
  /*comment is an obj */
  topic=new Topic();
  /*onSubmit is method .when is assign to true pointer call to addComments method*/
  onSubmit()
  {
    this.submitted=true;
    this.addTopic();
  }
  
  /*addComments is called using subscribe */
  addTopic()
  {
    this.service.createTopic(this.topic).subscribe();
  }
}
