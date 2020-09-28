import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TutorialsService } from '../tutorials.service';
import { Tutorial } from '../tutorial.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
 
  tutorial : Tutorial;
  selectedTutorial  = '';
  private tutorialSub: Subscription; 
  
  constructor(private tutorialService : TutorialsService, private activatedRoute: ActivatedRoute, private router : Router) { }

  /*ngOnInit() {
	this.activatedRoute.params
	.subscribe(
		(params : Params)  => {
			this.getTutorial(params['tId']);
		}
	)  
  }
  
  getTutorial(id:string){
	this.tutorialService.fetchTutorials().subscribe(
		tutorials => {
			this.selectedTutorial = tutorials.find(p => p._id === id);
		},
	  error => {
		this.error = error.message;
	  }
	)
  }*/
  
  ngOnInit() {
	this.activatedRoute.params
	.subscribe(
		(params : Params)  => {
			this.selectedTutorial = this.tutorialService.getTutorialObj(params['tId']) ? this.tutorialService.getTutorialObj(params['tId']) : null;
			
			console.log(" 46 ", this.selectedTutorial)
		}
	)

	this.tutorialSub = this.tutorialService.tutorialSub.subscribe(t => {
     this.selectedTutorial = t;
	  console.log(" 52 ",  this.selectedTutorial)
    });
	
	
  }
  
  /*getTutorial(id:string){
	this.tutorialService.fetchTutorials().subscribe(
		tutorials => {
			this.selectedTutorial = tutorials.find(p => p._id === id);
		},
	  error => {
		this.error = error.message;
	  }
	)
  }*/
}
