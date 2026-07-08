export interface Student {
  id: number;
  nameAr: string;
  nameEn: string;
  level: string;
  notes: string;
  sessions?: Session[];
  groupId?: number; // Add groupId
}
export type StudentFormData = Omit<Student, "id" | "groupId">;

export type Group = {
  id: number;
  nameAr: string;
  nameEn: string;
  color: string;
  notes: string;
  students: Student[];
};
export type GroupFormData = Omit<Group, "id">;

export type TeacherProfile = {
  nameAr: string;
  nameEn: string;
};
export type Session = {
  id: number;
  studentId: number;
  date: string;
  surah: string;
  grade: string;
  notes: string;
  from: number;
  to: number;
  new: string;
  revision: string;
  tajweed: string;
  //enFields
  newEn?: string;
  revisionEn?: string;
  tajweedEn?: string;
  notesEn?: string;
};

export type SessionFormData = Omit<Session, "id">;
export type Schedule = {
  id: number;
  studentId: number;
  dateTime: Date;
  duration: number;
  notes: string;
  notificationId?: string;
};

export type ScheduleFormData = Omit<Schedule, "id">; // Omit id from Schedule
export type MonthlyReports = {
  id: number;
  studentId: number;
  month: string;
  year: string;
};
export type MonthlyReportsFormData = Omit<MonthlyReports, "id">;

export type Report = {
  id: number;
  studentId: number;
  note: string;
};

export type FormName = "Students" | "Groups" | "Sessions" | "Schedule";

export type FormData = Student[] | Group[];

export type FieldSource = "students" | "groups";
// | "sessions"
// | "reports"
// | "schedule";
export type SourceOption<T = unknown> = {
  id: number;
  name: string;
  value: number | string;
  checked?: boolean;
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
    | "number"
    | "date"
    | "time"
    | "password";

  source?: FieldSource;

  data?: any[];
}
