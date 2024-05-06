import { Component, ViewChild, OnInit } from '@angular/core';
import { SelectButtonChangeEvent } from 'primeng/selectbutton';
import { apiMondayService } from 'src/app/services/apimonday.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnInit {




  nameGroups: any;
  espColumID: any;
  dateColumID: any;
  dateInit: any;
  items: any;
  option= 'hus';
  showH = true;
  showA =false
  labels:any;
  dataLineOne:any;
  dataLineTwo:any;

  boardID: any;
  @ViewChild('chart') chart: any;
  stateOptions: any[] = [{ label: 'Hus', value: 'hus' }, { label: 'Acts', value: 'Acts' }];
  loading: boolean = false;
  cities: City[] | undefined;
  selectgroup: any;
  groups: any;
  columns: any;
  selectESPColums: any
  selectDateColums: any
  selectedCity: City | undefined;
  show = false;
  date: any;
  documentStyle: any
  data: any;

  options: any;
ESPID: any;
DateID: any;
  subitems: any;
  constructor(
    private _apimondayservice: apiMondayService
  ) { }
  ngOnInit(): void {
    this.documentStyle = getComputedStyle(document.documentElement);
    const textColor = this.documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = this.documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = this.documentStyle.getPropertyValue('--surface-border');
    this.data = {
      labels: this.labels,
      datasets: [
        {
          label: 'BDC',
          data: this.dataLineOne,
          fill: false,
          borderColor: this.documentStyle.getPropertyValue('--pink-500'),
          tension: 0.2
        },
        {
          label: 'Puntos realizados',
          data: this.dataLineTwo,
          fill: false,
          borderColor: this.documentStyle.getPropertyValue('--blue-500'),
          tension: 0.2
        },
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

  }

  load() {
    this.loading = true;
    this.showH=true;
    this._apimondayservice.getGroups(this.boardID).subscribe(
      response => {
        this.groups = response.response.groups
        this.columns = response.response.columns
        this.loading = false;
        this.show = true;
      }
    )

    //this.show = true;
  }

  getdata() {
    this.loading = true;
    // Crear un objeto Date con la fecha original
    const dateInitf: Date = new Date(this.dateInit);
    // Extraer los componentes de la fecha (año, mes y día)
    const año: number = dateInitf.getFullYear();
    const mes: number = dateInitf.getMonth() + 1; // Se agrega 1 porque los meses van de 0 a 11 en JavaScript
    const dia: number = dateInitf.getDate();
    // Formatear la fecha en el formato deseado (YYYY-MM-DD)
    const dateInit: string = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;
   if(this.option== 'hus'){
    this._apimondayservice.getItems(this.boardID, this.selectgroup.id, this.selectDateColums.id, this.selectESPColums.id, dateInit).subscribe(
      response => {
        this.items = response.responseI
        this.changeData(this.items.labels,this.items.datasetIdeal,this.items.datasetReal)
        this.loading = false;
        this.show = true;
      });
    }
    else{
      this._apimondayservice.getSubItems(this.boardID, this.selectgroup.id, this.DateID, this.ESPID, dateInit).subscribe(
        response => {
          {
            this.subitems = response.responseSI
            this.changeData(this.subitems.labels,this.subitems.datasetIdeal,this.subitems.datasetReal)
            this.loading = false;
            this.show = true;

        }});
  }
}
  onSelectionChange(event: any) {
   if(event.value == 'hus'){
    this.showA=false;
     this.showH=true
     this.changeData(this.items.labels,this.items.datasetIdeal,this.items.datasetReal)
   }else{
    this.showH=false
    this.showA =true
    this.changeData(this.subitems.labels,this.subitems.datasetIdeal,this.subitems.datasetReal)
   }

  }
changeData(labels:any,datasetIdeal:any,datasetReal:any){

  this.data = {
    labels: labels,
    datasets: [
      {
        label: 'BDC',
        data: datasetIdeal,
        fill: false,
        borderDash: [5, 5],
        borderColor: this.documentStyle.getPropertyValue('--blue-500'),
        tension: 0.4
      },
      {
        label: 'Puntos realizados',
        data: datasetReal,
        fill: false,
        borderColor: this.documentStyle.getPropertyValue('--pink-500'),
        tension: 0.4
      },
    ]
  };


}
clear() {
this.showA=false;
this.showH=false;
this.show = false;
}
}


