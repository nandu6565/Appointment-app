import { Appointment } from './../models/appointment';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  

  newAppoinmentTitle : string = '';
newAppointmentDate : Date =new Date();
  appointments: Appointment[] = [];
  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments")
    this.appointments = savedAppointments ? JSON.parse(savedAppointments): []
  }
 
 addAppointment(){

  if(this.newAppoinmentTitle.trim().length && this.newAppointmentDate){
    let newAppointment : Appointment ={
      id:this.appointments.length+1,
      title: this.newAppoinmentTitle,
      date: this.newAppointmentDate
    }

    this.appointments.push(newAppointment);

    this.newAppoinmentTitle = '';
    this.newAppointmentDate = new Date;
    localStorage.setItem("appointments",JSON.stringify(this.appointments))
  }
 }

 deleteAppointment(id:number){
  this.appointments.splice(id,1)
  localStorage.setItem("appointments",JSON.stringify(this.appointments))

 }
}
