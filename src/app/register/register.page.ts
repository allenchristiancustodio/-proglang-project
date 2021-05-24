import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { async } from 'q';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

 fname: string = '';
 mname: string = '';
 lname: string = '';
 address: string = '';
 age: string = '';
 contact: string = '';
 email: string = '';
 password: string = '';
 confirm_password: string = '';

  constructor(
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProvider,
    ) { }

  ngOnInit() {

  }

  formLogin() {
    this.router.navigate(['/login']);
  }

  async addRegister() {
    if (this.fname == '') {
      const toast = await this.toastController.create({
      message: 'Fullname is required',
      duration: 2000
      });
      toast.present();
    } else if (this.mname  == '') {
      const toast = await this.toastController.create({
        message: 'Middle Name is required',
        duration: 2000
        });
      toast.present();
    } else if (this.lname == '') {
      const toast = await this.toastController.create({
        message: 'Phone number is required',
        duration: 2000
        });
      toast.present();
    } else if (this.address == '') {
      const toast = await this.toastController.create({
        message: 'Address is required',
        duration: 2000
        });
      toast.present();
    }
    else if (this.age == '') {
      const toast = await this.toastController.create({
        message: 'Age is required',
        duration: 2000
        });
      toast.present();
    }
    else if (this.contact == '') {
      const toast = await this.toastController.create({
        message: 'Phone number is required',
        duration: 2000
        });
      toast.present();
    } else if (this.email == '') {
      const toast = await this.toastController.create({
        message: 'email is required',
        duration: 2000
        });
      toast.present();

    } else if (this.password == '') {
      const toast = await this.toastController.create({
        message: 'Password is required',
        duration: 2000
        });
      toast.present();

    } else if (this.password != this.confirm_password) {
      const toast = await this.toastController.create({
        message: 'Password does not match',
        duration: 2000
        });
      toast.present();
    } else {
      let body = {
        lname: this.lname,
        fname: this.fname,
        mname: this.mname,
        address: this.address,
        contact: this.contact,
        age : this.age,
        password: this.password,
        email: this.email,
        aksi: 'add_register'
      };
      this.postPvdr.postData(body, 'file_aksi.php').subscribe(async data => {
       var alertpesan = data.msg;
       if (data.success) {
         this.router.navigate(['/login']);
         const toast = await this.toastController.create({
          message: 'Register successfully',
          duration: 2000
         });
         toast.present();
       } else {
         const toast = await this.toastController.create({
           message: alertpesan,
           duration: 2000
         });
       }
     });

    }
  }

}
