import { quizModel } from './quizModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
    APIURL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  addquiz(quiz: quizModel) {
    return this.http.post(this.APIURL + 'quiz', quiz).subscribe();
  }
}
