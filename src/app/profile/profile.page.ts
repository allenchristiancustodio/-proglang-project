import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    fname: string;
    lname: string;
    mname: string;
    tag: string;
    anggota: any;
    age: string;
    address: string;
    contact: string;
    email: string;
    img$= 'assets/user-profile.png';
  constructor(
    private postPvdr: PostProvider,
    private storage: Storage,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {

    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.fname = this.anggota.fname;
      this.lname = this.anggota.lname;
      this.mname = this.anggota.mname;
      this.address = this.anggota.address;
      this.contact = this.anggota.contact;
      this.email = this.anggota.email;
      this.age = this.anggota.age;
      this.tag = this.anggota.tag;
      
    });
  }

}
