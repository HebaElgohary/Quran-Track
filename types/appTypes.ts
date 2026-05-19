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
};
export type GroupFormData = Omit<Group, "id"> & {
  students?: any[];
};

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