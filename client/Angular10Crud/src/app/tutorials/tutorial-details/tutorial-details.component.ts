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
 
  currentTutorial : any = [];
  error = null;
  
  constructor(private tutorialService : TutorialsService, private activatedRoute: ActivatedRoute, private router : Router) { }
  
  ngOnInit() {  
	this.activatedRoute.params
	.subscribe(
		(params : Params)  => {
			this.tutorialService.getTutorial(params['tId']).subscribe(
				tutorial => {
					this.currentTutorial = tutorial
				},
				  error => {
					this.error = error.message;
				  }
			);		
			console.log(this.currentTutorial);
		}
	)	
  }
  
  onEdit(){
	this.router.navigate(['edit'], {relativeTo : this.activatedRoute});
  }
  
}
