import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComoLlegarComponent } from 'src/app/components/como-llegar/como-llegar.component';

declare var google:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnInit, AfterViewInit {

  formLogin : FormGroup;

  constructor(private fb: FormBuilder,
              private route: Router) { }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: "293498881470-338nafpcj0kno3k1flnfsehn49mak51j.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }

  
  
  handleCredentialResponse(response: any){
 
    if (response.credential) {
      // console.log('este es el token', response.credential)
      //this.router.navigate(['/home'])
      //this.routerNav.navigateByUrl("/home");
      sessionStorage.setItem("token",response.credential);
      let token = response.credential as string;
      let base64Url = token.split('.')[1];
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      let tokenJson =  JSON.parse(jsonPayload);
      
      let correoToken = tokenJson.email;
      
      console.log('este es el correo token', correoToken)
      if (correoToken == "yessica_piedrahita82181@elpoli.edu.co") {
        document.location.href = "/perfilAdmin";
      }else{
        document.location.href = "/completarRegistro";
      }
      
    }
  }

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm(){
    this.formLogin = this.fb.group({
      usuario: ["", Validators.required],
      contrasena: ["", Validators.required],
    })
  }

  submit(){
    let valoresForm = this.formLogin.value;
    console.log(valoresForm.usuario);
    if (valoresForm.usuario == "yessica_piedrahita82181@elpoli.edu.co") {
      this.route.navigate(['perfilAdmin']);
    }else{
      this.route.navigate(['completarRegistro']);
    }
    
  }

}
