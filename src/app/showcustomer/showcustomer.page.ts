import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.page.html',
  styleUrls: ['./showcustomer.page.scss'],
})
export class ShowcustomerPage implements OnInit {
  ctime: any;
  cdate: any;
  temp: any;
  id: any;
  tag: any;


    constructor(
    private router: Router,
    private postPvdr: PostProvider,
    private actRoute: ActivatedRoute
  ) { }

   ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
    this.id = data.id;
    // this.name_customer = data.name;
    // this.desc_customer = data.desc;
      this.cdate = data.date;
      this.ctime = data.time;
      this.temp = data.temp;
      this.tag = data.tag;
      console.log(data);

    });
  }

}
