import { Component, OnInit } from '@angular/core';
import { TutorialsService } from '../tutorials.service';
import { Tutorial } from '../tutorial.model';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-tutorial-lists',
  templateUrl: './tutorial-lists.component.html',
  styleUrls: ['./tutorial-lists.component.css']
})
export class TutorialListsComponent implements OnInit {
  
  loadedTutorials : any = []; 	
  isFetching = false;
  error = null;
  
  constructor( private tutorialService : TutorialsService) { }

  ngOnInit() {
  this.tutorialService.updateStatus.subscribe(tutorials => {
	 this.loadedTutorials = tutorials;
	 console.log(this.loadedTutorials)
	 setTimeout(() => { this.fetchAllTutorials() }, 1000)
  })
   this.fetchAllTutorials();
  }
  
  fetchAllTutorials() {
	this.isFetching = true;
	this.tutorialService.fetchTutorials().subscribe(
		tutorials => {
			this.isFetching = false;
			this.loadedTutorials = tutorials;			
			console.log( " loadedTutorials ==============  " , this.loadedTutorials);
		},
	  error => {
		this.error = error.message;
		console.log( " error ==============  " , error);
	  }
	)
  }
  
  onDeleteAll(){
	this.tutorialService.deleteAllTutorials().subscribe(
		tutorial => {
				console.log(tutorial);
				this.loadedTutorials = [];
				//this.router.navigate(['/tutorials/lists'])
			},
			error => {
				this.error = error.message;
			}
	)
  }
  
  onFindAllPublished(){
	this.tutorialService.findAllPublished().subscribe(
		tutorial => {
				console.log(tutorial);
				this.loadedTutorials = tutorial;
			},
			error => {
				this.error = error.message;
			}
	) 
  }
  onShowAll(){
	this.fetchAllTutorials();
  }
}
