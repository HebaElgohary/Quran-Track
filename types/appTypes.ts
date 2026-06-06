export interface Student {
  id: number;
  nameAr: string;
  nameEn: string;
    level: string;
    notes: string;
     groupId?: number; // Add groupId 

}
export type StudentFormData = Omit<Student, "id" | "groupId">;



 export type Group = {
  id: number;
  nameAr: string;
  nameEn: string;
  color: string;
  notes: string;
  data?: Student[];
};
export type GroupFormData = Omit<Group, "id"> 

 export type Session = {
  id: number;
  groupId: string;
  date: string;
};

 export type Report = {
  id: number;
  studentId: string;
  note: string;
};

export type FormName="Students" | "Groups" | "Sessions" | "Schedule" 

export type FormData = Student[] | Group[]