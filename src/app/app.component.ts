import { Component, ViewChild , OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router ,ActivatedRoute} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../providers/post-provider';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  @ViewChild('content') nav: NavController;
  rootPage: any;
  ctime: any;
  cdate: any;
  temp: any;
  id: any;
  tag: any;
  fname: any;
  mname: any;
  lname: any;
  fullname: any;
  anggota: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private storage: Storage,
    private router: Router,
    private statusBar: StatusBar,
    public toastController: ToastController,
    private postPvdr: PostProvider,
    private actRoute: ActivatedRoute
  ) {
    this.initializeApp();
  }
  

  initializeApp() {
    
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });

      this.storage.get('session_storage').then((res) => {
      if (res == null) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/customer']);
      }
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

  refresh(): void {
    window.location.reload();
}
}
