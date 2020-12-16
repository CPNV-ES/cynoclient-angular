import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataProvider {

    private apiurl = "http://127.0.0.1:3000";

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
    }

    public LoadAPI(route: String): Promise<any> {
        return new Promise<any>( (resolve, reject) => {
            this.http.get(this.apiurl+route).subscribe(
                response => {
                    return resolve(response);
                },
                err => {
                    console.log("API failed whit code "+err.status);
                }
            )
        })
    }

}
