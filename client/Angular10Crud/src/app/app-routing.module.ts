import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { TutorialAddComponent } from './tutorials/tutorial-add/tutorial-add.component';
import { TutorialStartComponent } from './tutorials/tutorial-start/tutorial-start.component';
import { TutorialListsComponent } from './tutorials/tutorial-lists/tutorial-lists.component';
import { TutorialDetailsComponent } from './tutorials/tutorial-details/tutorial-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {path: '', redirectTo: '/tutorials', pathMatch: 'full'},
	{ 
		path : 'tutorials', component : TutorialsComponent , children : [
			{ 
				path: 'lists', component: TutorialListsComponent, children : [
					{path : '' , component: TutorialStartComponent},
					{ path : ':tId', component: TutorialDetailsComponent },
					{ path : ':tId/edit', component: TutorialAddComponent }
				]
			},
			{ path: 'form', component: TutorialAddComponent }
		]
	},
	{path: '**',  component : NotFoundComponent, pathMatch: 'full'}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
