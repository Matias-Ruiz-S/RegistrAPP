import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  user={
    usuario:"",
    password:""
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
    if (this.user.usuario != "" && this.user.password != ""){
      //Guardo en localStorage los datos del usuario
      localStorage.setItem('usuario',this.user.usuario);
      localStorage.setItem('contraseña',this.user.password);
      this.router.navigate(['/home'],navigationExtras);
    } else {
      this.presentAlert("Error", "No se pueden ingresar campos vacíos")
    }
  }
  recuperar(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(['/recovery'],navigationExtras);
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
