import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
fname=""
username=""
email=""
pass=""
conpass=""
  constructor(public http:HttpClient) { }

  ngOnInit() {
  }
validation(){
let message =""
  if(this.fname =="")
  message += "Fullname is required\n"
  if(this.username =="")
  message += "Username is required\n"
  if(this.email =="")
  message += "Email is required\n"
  if(this.pass =="")
  message += "Password is required\n"

  if(this.pass != this.conpass)
  message += "Password does not match\n"

  if(message=="")
  return true
   
  alert(message)
  return false;
  
}



addDAta(){
  let formData = new FormData();
  formData.append('username',this.username)
  formData.append('fullname',this.fname)
  formData.append('email',this.email)
  formData.append('password',this.pass)
  let url='https://webtechnologies.site/714/Bayle/api/registration.php'
  this.http.post<any>(url,formData).subscribe(
    (data:any)=>{
      console.log(data)
    }
  )
}

register(){
  if (this.validation()){
    this.addDAta()
  }
}

}
