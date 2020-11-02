import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  formGroup: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder) {

                this.formGroup = this.formBuilder.group({
                  nome: ['Joaquim',[Validators.required, Validators.minLength(5),Validators.maxLength(120)]],
                  email: ['joaquim@gmail.com',[Validators.required, Validators.email]],
                  tipo: ['1',[Validators.required]],
                  cpfOuCnpj: ['10057482411',[Validators.required,Validators.minLength(11),Validators.maxLength(14)]],
                  senha: ['123',[Validators.required]],
                  logradouro: ['rua via',[Validators.required]],
                  numero: ['25',[Validators.required]],
                  complemento: ['casa',[]],
                  bairro: ['bancarios',[]],
                  cep: ['58052210',[Validators.required]],
                  telefone1: ['999885544',[Validators.required]],
                  telefone2: ['',[]],
                  telefone3: ['',[]],
                  estadoId: [null,[Validators.required]],
                  cidadeId: [null,[Validators.required]]
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  SignupUser(){
    console.log("enviou o paranaue");
  }

  updateCidades(){
    
  }

}
