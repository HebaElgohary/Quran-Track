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
  students?: Student[];
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

export type FieldSource =
  | "students"
  | "groups"
  // | "sessions"
  // | "reports"
  // | "schedule";
export type SourceOption<T = unknown> = {
  id: number;
  name: string;
  value: number | string;
  checked: boolean;
  data?: T;
};
export type SourcesMap = {
  students: SourceOption[];
  groups: SourceOption[];
};

export interface FormFieldSchema {
  name: string;
  label: string;
  type:
    | "text"
    | "textarea"
    | "radio"
    | "checkbox"
    | "select"
    | "number";

  source?: FieldSource;

  data?: any[];
}