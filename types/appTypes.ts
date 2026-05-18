export interface Student {
  id: number;
  nameAr: string;
  nameEn: string;
    level: string;
    notes: string;
     groupId?: number; // Add groupId 

}



 export type Group = {
  id: number;
  nameAr: string;
  nameEn: string;
  color: string;
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