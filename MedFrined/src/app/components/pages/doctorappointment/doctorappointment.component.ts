import { Component,ViewChild ,TemplateRef} from '@angular/core';
import { NzTimePickerComponent } from 'ng-zorro-antd/time-picker';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthSerice } from '../../../shared/auth.service';
import {HttpService} from '../../../shared/HttpService';

@Component({
  selector: 'app-doctorappointment',
  templateUrl: './doctorappointment.component.html',
  styleUrls: ['./doctorappointment.component.scss']
})
export class DoctorappointmentComponent {
  // @ViewChild('timePicker') timePicker!: NzTimePickerComponent;
  @ViewChild('timePicker', { static: false }) timePicker!: NzTimePickerComponent;

  constructor(private auth:AuthSerice,private http:HttpService,private formBuilder: FormBuilder,private router: Router,private message:NzMessageService) { 
    //slotbooking
  this.slotbooking = this.formBuilder.group({
    name: new FormControl('',Validators.required),
    date: new FormControl('', [Validators.required]),
    time: new FormControl(this.selectedTime,Validators.required),
    doctor_id: new FormControl('',Validators.required),
    purpose_id: new FormControl('',Validators.required),
  });
  }
  
  slotbooking: FormGroup;
  isVisible = false;
  dateFormat = 'yyyy/MM/dd';
  selectedDate:any
  selectedTime:any

  public hasOpenedTimePicker = false;
  
  
  ngOnInit(): void {
    this.GetDoctor();
    this.GetPurpose();
    // Manually trigger a change event on the time picker to fix the default minutes value issue
    if (this.timePicker) {
      this.timePicker.writeValue(this.selectedTime);
      this.hasOpenedTimePicker = true;
    }
  }
  

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.SubitSlot()
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  onChange(): void {

  }
  

  public times: string[] = [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
  ];

  // public selectTime(time: string): void {
  //   this.selectedTime = time;
  //   this.slotbooking.get('time').setValue(time);
  // }
  public selectTime(time: string): void {
    this.selectedTime = time;
    const timeControl = this.slotbooking.get('time');
    if (timeControl) {
      timeControl.setValue(time);
    }
  }
  
  

  public isSelected(time: string): boolean {
    return time === this.selectedTime;
  }
  doctors:any
  GetDoctor(){
    this.http.getdoctor().subscribe((res:any)=>{
      if(res.success){
      this.doctors= res['data'];
      console.log(this.doctors)
      }
    })
  }
  purposeofdoct:any
  GetPurpose(){
    this.http.purpose().subscribe((res:any)=>{
      if(res.success){
      this.purposeofdoct= res['data'];
      console.log(this.purposeofdoct)
      }
    })
  }
  SubitSlot(){
    let val={
      name:this.slotbooking.value.name,
      date:this.slotbooking.value.date,
      time:this.slotbooking.value.time,
      doctor_id: this.slotbooking.value.doctor_id,
      purpose_id: this.slotbooking.value.purpose_id,
    }
    console.log(this.slotbooking)
    this.http.slotbook(val).subscribe((res:any)=>{
      if(res.success){
        res['success'] && this.message.success(res['message']);
        this.isVisible = false;
        this.slotbooking.reset();
      }
      else{
        // console.log(this.slotbooking)
        this.isVisible = true;
      }
    },(error: { error: { message: string | TemplateRef<void>; }; }) => {
      this.message.error(error.error.message);
    });
    // console.log(this.slotbooking)
  }
 
}
