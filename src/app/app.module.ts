import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { TopicsComponent } from './components/topics/topics.component';
import { AddTopicComponent } from './components/add-topic/add-topic.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicDetailsComponent } from './components/topic-details/topic-details.component';
import { UpdateTopicComponent } from './components/update-topic/update-topic.component';
import { PostComponent } from './components/post/post.component';
import { CommentsdetailsComponent } from './components/commentsdetails/commentsdetails.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentsUpdateComponent } from './components/comments-update/comments-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    CommentsComponent,
    TopicsComponent,
    AddTopicComponent,
    TopicListComponent,
    TopicDetailsComponent,
    UpdateTopicComponent,
    PostComponent,
    CommentsdetailsComponent,
    CommentsListComponent,
    CommentsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
