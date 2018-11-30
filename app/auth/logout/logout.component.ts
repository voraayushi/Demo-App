import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  returnUrl:String;
  constructor(
    private router: ActivatedRoute,
    public route : Router,
  ) { }

  ngOnInit() {
    localStorage.clear();
    this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '/';
    this.route.navigate([this.returnUrl]);
  }

}
