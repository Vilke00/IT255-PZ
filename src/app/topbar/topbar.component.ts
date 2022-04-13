import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public movieService:MovieService, private router:Router) { }

  ngOnInit(): void {
  }

  searchText = "";

  isPaused = false;

  handleKeyUp(){
    this.movieService.searchMovies(this.searchText).then((res:any)=>{
      console.log(res);
      this.movieService.movies = res.results
    }).catch(err=>{
      console.error(err);
    })
  }

  leaveReview(){
    this.router.navigate(['/review']);
  }

  home(){
    this.router.navigate(['/home']);
  }

}
