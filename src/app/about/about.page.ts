import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    public _user: PostProvider
  ) { }

  ngOnInit() {
  }

}
