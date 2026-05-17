export interface Student {
  id: string;
  nameAr: string;
  nameEn: string;
    level: string;
    notes: string;
     groupId?: string; // Add groupId 

}



 export type Group = {
  id: string;
  nameAr: string;
  nameEn: string;
  color: string;
};

 export type Session = {
  id: string;
  groupId: string;
  date: string;
};

 export type Report = {
  id: string;
  studentId: string;
  note: string;
};