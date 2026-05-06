
import React from 'react'
import StudentForm  from '../StudentForm';
import GroupsForm  from '../GroupForm';
import SessionForm  from '../SessionForm';
import ScheduleForm from '../ScheduleForm';

export default function (FormName: string,setOpen: any,open:boolean) {
        switch (FormName) {
      case "Students":
        return <StudentForm setOpen={setOpen} open={open}/> ;
          case "Groups":
        return <GroupsForm setOpen={setOpen} open={open}/> ;
          case "Sessions":
        return <SessionForm setOpen={setOpen} open={open} /> ;
   case "Schedule":
        return <ScheduleForm setOpen={setOpen} open={open} /> ;

  
}}
