import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {Subject, throwError } from 'rxjs';
import { Tutorial } from './tutorial.model';


@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

 url = 'http://localhost:7777/api/tutorials';
 updateStatus = new Subject();
 error = null;
  constructor(private http : HttpClient) { }
  
  /*fetchTutorials() {  
	return this.http.get(this.url)
	.pipe(
		map(responseData => {
			return responseData;
		}),
		catchError(errorRes => {
			return throwError(errorRes);
		})
	)  
  }*/
  
  fetchTutorials() {  
	return this.http.get(`${this.url}`)
  }
  
  getTutorial(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  
  addTutorial(data) {
    return this.http.post(this.url, data);
  }
  
  deleteAllTutorials() {
    return this.http.delete(this.url);
  }
  
  deleteTutorial(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  
  findAllPublished(){
	 return this.http.get(`${this.url}/published`);
  }
  
  updateTutorial(id, data){
	return this.http.put(`${this.url}/${id}`, data);
  }
}
