import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ArgumentOutOfRangeError, Subject } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado: string = "0";
  primeiro_elemento: string = "";
  segundo_elemento: string = "";
  operando: string = "";
  operador_selecionado: boolean = false;
  decimal_selecionado: boolean = false;

  constructor() {}

  digito(valor: string) {
    if (this.operador_selecionado == false){
      if (this.resultado == "0") {
        if(valor == '.' && this.decimal_selecionado == true){
          return;
        } else if(valor == '.' && this.decimal_selecionado == false){
          this.resultado += valor;
          this.decimal_selecionado = true;
        } else{
          this.resultado = valor;
        }
        
        
      }else {
        if(valor == '.' && this.decimal_selecionado == true){
          return;
        } else if(valor == '.' && this.decimal_selecionado == false){
          this.resultado += valor;
          this.decimal_selecionado = true;
        } else{
          this.resultado += valor;
        }
        }
      } else{
    
      
      
      if (valor === "." && this.decimal_selecionado) {
        return;
      } else if(valor === '.' && this.decimal_selecionado == false){
        this.decimal_selecionado = true;
        this.segundo_elemento = this.segundo_elemento += valor;
        this.resultado = this.resultado += valor;
      } 
      
      
      else{
        this.segundo_elemento = this.segundo_elemento += valor;
        this.resultado = this.resultado += valor;
      }
      
      
      
      
      

      }
    
  }
  



  operador(valor: string) {
    this.decimal_selecionado = false;
    if(this.operador_selecionado == false){
      this.primeiro_elemento = this.resultado;
      console.log(valor)
      this.resultado = this.resultado + valor;
      this.operador_selecionado = true;
      this.operando = valor;
      } else{
        console.log("Um operador ja foi selecionado");
      }
  } 

  calcular(){
    
    if(this.operando == "+") {
      this.resultado = (parseFloat(this.primeiro_elemento) + parseFloat(this.segundo_elemento)).toString();
    } else if(this.operando == "-"){
      this.resultado = (parseFloat(this.primeiro_elemento) - parseFloat(this.segundo_elemento)).toString();
    } else if(this.operando == "*"){
      this.resultado = (parseFloat(this.primeiro_elemento) * parseFloat(this.segundo_elemento)).toString();
    } else if(this.operando == "/"){
      this.resultado = (parseFloat(this.primeiro_elemento) / parseFloat(this.segundo_elemento)).toString();
    } else if(this.operando == "^"){
      this.resultado = Math.pow(parseFloat(this.primeiro_elemento),parseFloat(this.segundo_elemento)).toString(); 
    }

  }

  redefinir(){
    this.resultado = "0";
    this.resultado = "0";
    this.primeiro_elemento = "";
    this.segundo_elemento = "";
    this.operando = "";
    this.operador_selecionado = false;
    this.decimal_selecionado = false;
  }

  porcentagem(){
    this.resultado = (parseFloat(this.resultado)/100).toString();
  }



  raiz(){
    if(this.operador_selecionado == false){
      this.primeiro_elemento = this.resultado;
      this.operador_selecionado = true;
      this.resultado = Math.sqrt(parseFloat(this.primeiro_elemento)).toString();

    } else{
      console.log("Um operador ja foi selecionado")
    }
  }

  

  apagar(){
    if(this.operador_selecionado == false){
      this.primeiro_elemento = this.resultado;
      this.resultado = this.primeiro_elemento.slice(0,-1);
      if (this.resultado.endsWith(".")) {
        this.decimal_selecionado = false; 
      }
      
    } else if(this.operador_selecionado == true && this.segundo_elemento == ""){
      
      this.resultado = this.primeiro_elemento;
      this.operando = "";
      this.operador_selecionado = false;
      this.decimal_selecionado = false; 

  } else if(this.operador_selecionado == true && this.segundo_elemento != ""){
    if(this.resultado.endsWith('.')){
      this.resultado = this.resultado.slice(0,-1)
    } else{
      this.segundo_elemento = this.segundo_elemento.slice(0,-1);
      this.resultado = this.resultado.slice(0,-1)
    }
    
  }                                                                         
  }

}

