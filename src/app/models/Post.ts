import { Comments } from "./comments";

export class Post{

    postId:number;
    content:string;
   comments:Comments[];


    constructor(){
        this.postId=0;
        this.content="";
        this.comments=[];
    }
}