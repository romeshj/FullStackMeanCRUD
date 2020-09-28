import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TutorialsService } from '../tutorials.service';
import { Tutorial } from '../tutorial.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tutorial-add',
  templateUrl: './tutorial-add.component.html',
  styleUrls: ['./tutorial-add.component.css']
})
export class TutorialAddComponent implements OnInit {
  @ViewChild('tutForm', {static :  false}) tutorialForm : NgForm;
  submitted = false;
  error = null;
  tutorial : any;
  editMode = false;
  title : string ='';
  description : string ='';
  published : boolean = false;
  id : string = '';
  status : string = '';
  
  
  
  constructor(private tutorialService : TutorialsService,  private activatedRoute: ActivatedRoute, private router : Router) { }
	
  ngOnInit() {
  this.id = this.activatedRoute.snapshot.params['tId'];
  
  this.activatedRoute.params
	.subscribe(
		(params : Params)  => {
				 console.log(params['tId']);
				this.tutorialService.getTutorial(params['tId']).subscribe(
					tutorial => {
						this.tutorial = tutorial;
						this.editMode = params['tId'] !== null;
						this.title = this.tutorial.title;
						this.description = this.tutorial.description;
						this.published = this.tutorial.published;
						console.log(this.tutorial.published)
						this.status = this.tutorial.published ? "Published" : "Pending";
						
					},
					error => {
						this.error = error.message;
					}
			);		
			    
		}
	)
  }
  
  onSubmit(form){
	if(form.value){	    
		console.log(form.value);
		this.tutorialService.addTutorial(form.value).subscribe(
			tutorial => {
				console.log(tutorial);
				this.submitted = true;
			},
			error => {
				this.error = error.message;
			}
		)
	}
   	form.reset();
  }
  
  
  
  onClear(){
	this.submitted = false;
	this.tutorialForm.reset();
  }
  
  onDelete(){
	this.tutorialService.deleteTutorial(this.id).subscribe(
		tutorial => {
				console.log(tutorial);
				this.submitted = false;
				this.tutorialService.updateStatus.next(tutorial);
			},
			error => {
				this.error = error.message;
			}
	)
  }
  
  onUpdate(){
	const data = this.tutorialForm.value;
	const published = this.tutorialForm.value.published === "Published" ? true : false;
	this.tutorialService.updateTutorial(this.id, data).subscribe(
		tutorial => {
		        this.tutorial.published = this.tutorialForm.value.published;
				this.tutorialService.updateStatus.next(tutorial);
			},
			error => {
				this.error = error.message;
			}
	)
  }
  
  onUpdateStatus(s){
	this.status = s === "Published" ? "Pending" : "Published";
	this.published = this.status === "Published" ? true : false;
	//this.onUpdate();
  }
}
