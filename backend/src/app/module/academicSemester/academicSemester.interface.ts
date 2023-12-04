


export type TMonth =   
 'January'
| 'February'
| 'March'
| 'April'
| 'May'
| 'June'
| 'July'
| 'August'
| 'September'
| 'October'
| 'November'
| 'December';


export type TAcademicSemesterName =  "Autumn" | "Summer" | "Fall"
export type TAcademicCode = "01" | "02" | "03"



 export type TAcademicSemester = {
   name: TAcademicSemesterName
   code: TAcademicCode,
   year: string,
   startMonth: TMonth,
   endMonth: TMonth
}