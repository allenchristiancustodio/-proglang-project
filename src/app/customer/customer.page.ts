import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  today: number = Date.now();
  users: any = [];
  limit: number = 15;
  start: number = 0;
  fname: string;
  anggota: any;
  tag: string;

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastController: ToastController,
    private storage: Storage,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.users = [];
    this.start = 0;
    this.loadCustomer();
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.fname = this.anggota.fname;
      this.tag = this.anggota.tag;
    });
  }

  async proseslogout() {
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastController.create({
      message: 'Logout successful',
      duration: 2000
     });
    toast.present();

  }


  addCustomer() {
    this.router.navigate(['/addcustomer']);
  }

  updateCustomer(id, name, desc) {
    this.router.navigate(['/updatecustomer/' + id + '/' + name + '/' + desc]);
  }

  showCustomer(id, tag, temp ,date) {
    this.router.navigate(['/showcustomer/' + id + '/' + tag + '/' + temp +'/' + date ]);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }

  loadData(event: any) {
    this.start += this.limit;
    setTimeout(() => {
    this.loadCustomer().then(() => {
    event.target.complete();
    });
    }, 500);
  }


  delCustomer(id) {
    let body = {
        aksi: 'delete',
        id : id
      };

    this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        this.ionViewWillEnter();
      });
  }

  loadCustomer() {
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata',
        limit : this.limit,
        start : this.start,
        tag : this.tag

      };
        
      this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
        for (let user of data.result) {
          this.users.push(user);
        }
        resolve(true);
      });
    });
  }

}
