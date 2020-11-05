import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  forbid=['Anna','Chris'];
  signupForm:FormGroup;
  ngOnInit(){
    this.signupForm=new FormGroup({
      'userdata':new FormGroup({
      'username':new FormControl(null,[Validators.required,this.forbiddenUser.bind(this)]),
      'email':new FormControl(null,[Validators.required,Validators.email]) }),
      'gender':new FormControl('male'),
      'hobbies':new FormArray([])
    });
                                                 //this.signupForm.valueChanges.subscribe(
                                                // (value)=>{console.log(value);}
                                                  // );
                                           // this.signupForm.setValue({
                                           //  userdata:{
                                           //   'username':"Alpha",
                                           //    'email':"ululu@gmail.com"
                                           //  },
                                           //  'gender':'male',
                                           //  'hobbies':[]
                                          // });
  }
  onSubmit()
  {
    console.log(this.signupForm);
    this.signupForm.reset();


  }
  onAdd(){
    const control=new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  forbiddenUser(control:FormControl):{[s:string]:boolean}{
    if(this.forbid.indexOf(control.value)!=-1)
    {
      return {'nameIsForbidden':true};
    }
    return null;

  }
}
