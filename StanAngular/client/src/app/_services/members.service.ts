import { environment } from './../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../_models/member';
import { Apartment,ApartmentClass } from '../_models/apartment';
import { IAdress,Adress } from '../_models/adress';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer' + JSON.parse(localStorage.getItem('user'))
  })
}

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  formData:Adress= new Adress();
  reApformData:ApartmentClass= new ApartmentClass();
  apformData:ApartmentClass= new ApartmentClass();

  constructor(private http: HttpClient) { }
  getApartments(){
    return this.http.get<Apartment[]>(this.baseUrl + 'users/apartments', httpOptions);
  }
  
  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users', httpOptions);
  }
  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username, httpOptions);
    
  }
  getApartmentsById(username : string)
  {
    return this.http.get<Apartment[]>(this.baseUrl + 'users/' + username, httpOptions);
  }
  postAdress(){
    return this.http.post(`https://localhost:44329/api/Users/ApartmentAdress/`,this.formData)
  }
  postApartment(){
    return this.http.post(`https://localhost:44329/api/Users/OwnedApartment/`,this.apformData)
  }
  rentApartment(){
    return this.http.post(`https://localhost:44329/api/Users/RentedApartments/`,this.reApformData)
  }
}

