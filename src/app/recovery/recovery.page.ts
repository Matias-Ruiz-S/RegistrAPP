import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {
  user={
    usuario:""
  }
  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }
  ingresar(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    if (this.user.usuario != ""){
      //Guardo en localStorage los datos del usuario
      localStorage.setItem('usuario',this.user.usuario);
      this.router.navigate(['/home'],navigationExtras);
    } else {
      this.presentAlert("Error", "No se pueden ingresar campos vacíos")
    }
  }
  login(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(['/login'],navigationExtras);
  }

  async presentAlert(titulo: string, message: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
