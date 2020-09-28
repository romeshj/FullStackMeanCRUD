import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
	this.router.navigate(['/tutorials/lists'])
  }

}
