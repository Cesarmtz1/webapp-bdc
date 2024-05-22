import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/evironments/environment';
@Injectable({
  providedIn: 'root'
})
export class apiMondayService {
  public units = new BehaviorSubject([]);
  //public pw = "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI0NzMzNzAxOSwidWlkIjoxMjIzNDMwMCwiaWFkIjoiMjAyMy0wMy0yN1QyMjozMDo1Ni4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6Mjk2NTA5NiwicmduIjoidXNlMSJ9.X2cGFOIh9E8t-G4d4fl5cHZCsgt5kp5iQxJG1IuTp_Q"
  //Device GO

  constructor(private _http: HttpClient) { }


  getBoards(): Observable<any> {
    // Alternatively, use object literal notation (less readable for many headers):
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       'api-key' : environment.API_KEY
    });
  /*  const data={
      "boardID":boardID
    }*/
    return this._http.get(environment.API_URL+"/api/monday/br",  { headers: headers })

  }
  getGroups(boardID:any): Observable<any> {
    // Alternatively, use object literal notation (less readable for many headers):
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       'api-key' : environment.API_KEY
    });
    const data={
      "boardID":boardID
    }
    return this._http.post(`${environment.API_URL}/api/monday/gr`, data,  { headers: headers })

  }
  getItems(boardID: any,groupID:any,dateColumID:any,espColumID:any,dateInit:any,moscowCID:any,pyNCID:any ): Observable<any> {
    // Alternatively, use object literal notation (less readable for many headers):
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       'api-key' : environment.API_KEY
    });
    const data={
      "boardID":boardID,
      "groupID":groupID,
      "dateColumID":dateColumID,
      "espColumID":espColumID,
      "dateInit":dateInit,
      "moscowCID": moscowCID,
      "pyNCID":pyNCID
    }

    return this._http.post(`${environment.API_URL}/api/monday/items`, data, { headers: headers })

  }
  getSubItems(boardID: any,groupID:any,dateColumID:any,espColumID:any,dateInit:any,catTypeCID:any ): Observable<any> {
    // Alternatively, use object literal notation (less readable for many headers):
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
       'api-key' : environment.API_KEY
    });
    const data={
      "boardID":boardID,
      "groupID":groupID,
      "dateColumID":dateColumID,
      "espColumID":espColumID,
      "dateInit":dateInit,
      "catTypeCID":catTypeCID
    }
    return this._http.post(`${environment.API_URL}/api/monday/Subitems`, data, { headers: headers })

  }


}
