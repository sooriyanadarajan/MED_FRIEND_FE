import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzTimePickerComponent } from 'ng-zorro-antd/time-picker';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthSerice } from '../../../shared/auth.service';
import {HttpService} from '../../../shared/HttpService';

@Component({
  selector: 'app-uploadprescription',
  templateUrl: './uploadprescription.component.html',
  styleUrls: ['./uploadprescription.component.scss']
})
export class UploadprescriptionComponent {
  imageUrl: any;

  @ViewChild('fileInput') fileInput: any;
  @ViewChild('timePicker', { static: false }) timePicker!: NzTimePickerComponent;
  uploadpres!: FormGroup;
  constructor(private auth:AuthSerice,private http:HttpService,private formBuilder: FormBuilder,private router: Router,private message:NzMessageService) { 
  this.uploadpres = this.formBuilder.group({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    mobileno: new FormControl('',Validators.required),
  });
  }
  SubmitPres(){
   let val={
    firstname:this.uploadpres.value.firstname,
    lastname:this.uploadpres.value.lastname,
    email:this.uploadpres.value.email,
    mobileno: this.uploadpres.value.mobileno,
   }
   this.http.updatepres(val).subscribe((res:any)=>{
     if(res.success){
       res['success'] && this.message.success(res['message']);
       this.uploadpres.reset();
     }
     else{
     }
   },(error: { error: { message: string | TemplateRef<void>; }; }) => {
     this.message.error(error.error.message);
   });
   // console.log(this.slotbooking)
 }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.readFile(file);
  }

  onDragOver(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
  }

  onDragLeave(event: any): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    const file: File = event.dataTransfer.files[0] || this.fileInput.nativeElement.files[0];
    this.readFile(file);
  }

  private readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  removeImage(): void {
    this.imageUrl = null;
    this.fileInput.nativeElement.value = null;
  }
}
