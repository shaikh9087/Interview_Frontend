import { Component } from '@angular/core';
import { Topic } from '../../models/Topic';
import { Observable } from 'rxjs/internal/Observable';
import { CreateuserService } from '../../services/createuser.service';
import { Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrl: './topic-list.component.css'
})
export class TopicListComponent {

  
  public topic: Observable<Topic[]> =of([]);
  
  constructor(private service: CreateuserService,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.topic = this.service.getAllTopics();
  }


  deleteTopicById(id:number)
    {
      return this.service.deleteTopicById(id).subscribe((data)=>{
        console.log(data);
        this.getAll();
      })

    }

    getOneTopic(id: number){
      this.router.navigate(['details', id]);
    }

    updateTopic(id:number)
    {
      this.router.navigate(['update', id]);
    }
}
