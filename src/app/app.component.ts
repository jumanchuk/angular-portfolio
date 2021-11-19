import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-typescript';
}

class Cajero{

    constructor(

      private cuenta:number,
      private tipoCuenta:string,
      private disponible:number

    ){}

      //metodos
    
    public depositar = (importeOperacion:number)=>{

      console.log('Depositando el importe de $' + importeOperacion);
      this.disponible = this.disponible + importeOperacion;
      
    }

    public retirar = (importeOperacion:number)=>{

      console.log('Retirando el importe de $' + importeOperacion);
      this.disponible = this.disponible - importeOperacion;

    }

    public consultar = ()=>{

      let saldoDisponible = this.disponible;
      console.log('El Saldo Dispobile es $' + saldoDisponible);

    }
}


let cliente = new Cajero(100001,'Ahorro',0);

    cliente.consultar();

    cliente.depositar(10000);
    cliente.consultar();

    cliente.retirar(100);
    cliente.consultar();
