import { Component,ViewChild } from '@angular/core';
import { NzTimePickerComponent } from 'ng-zorro-antd/time-picker';
import { AuthSerice } from '../../../shared/auth.service'

@Component({
  selector: 'app-doctorappointment',
  templateUrl: './doctorappointment.component.html',
  styleUrls: ['./doctorappointment.component.scss']
})
export class DoctorappointmentComponent {
  @ViewChild('timePicker') timePicker!: NzTimePickerComponent;
  constructor(private auth:AuthSerice) { }
  
  
  isVisible = false;
  dateFormat = 'yyyy/MM/dd';
  selectedDate:any
  selectedTime:any

  public hasOpenedTimePicker = false;
  pageIndex = 1;
  pageSize = 10;
  
  ngOnInit(): void {
    // this.DoctorList(this.pageIndex,this.pageSize)
    // Manually trigger a change event on the time picker to fix the default minutes value issue
    if (!this.hasOpenedTimePicker) {
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

  public selectTime(time: string): void {
    this.selectedTime = time;
  }

  public isSelected(time: string): boolean {
    return time === this.selectedTime;
  }
  // DoctorList(index,size){
  //    let val = {
  //     page : index,
  //     limit : size
  //    }
  // }
// getPaymentHistory(index, size) {
//     this.isTableLoading = true;
//     let val = {
//       page: index,
//       limit: size,
//       key:this.searchTxt == ''?null:this.searchTxt
//     }
//     Object.keys(val).forEach((key) => (val[key] == null ) && delete val[key]);
//     this.payment.listPaymentHistory(val).subscribe((res) => {
//       if (res['success']) {
//         this.paymentHistory = res['data']['list'];
//         this.paymentHistoryCount = res['data']['count'];
//         this.isTableLoading = false
//       }else{
//         this.isTableLoading = false
//       }
//     }, error => {
//       this.notify.error(error.error.message);
//       this.isTableLoading = false
//     })
//   }
}
