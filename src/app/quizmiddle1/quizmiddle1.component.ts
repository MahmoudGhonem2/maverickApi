import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quizmiddle1',
  templateUrl: './quizmiddle1.component.html',
  styleUrls: ['./quizmiddle1.component.css']
})
export class Quizmiddle1Component implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  constructor(
    private quizServices: QuizService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
  }
  AddMyQuiz(values) {
    this.quizServices.addquiz(values);
    this.router.navigate(['/newQuiz']);
  }
}
