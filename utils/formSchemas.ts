import MonthlyReportForm from "@/components/organisms/MonthlyReportForm";
import { groupFields } from "@/schemas/groupFields";
import { MonthlyReportsFields } from "@/schemas/monthlyReportsFields";
import { scheduleFields } from "@/schemas/scheduleFields";
import { sessionFields } from "@/schemas/sessionfields";
import { studentFields } from "@/schemas/studentFields";


export const formSchemas = {
  Students: studentFields,
  Groups: groupFields,
  Sessions: sessionFields,
  Schedule: scheduleFields,
  MonthlyReports: MonthlyReportsFields
  
  
};