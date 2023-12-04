import { Schema } from "mongoose";
import { TAcademicCode, TAcademicSemester, TAcademicSemesterName, TMonth } from "./academicSemester.interface";

const Month: TMonth[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Code: TAcademicCode[] = [
    "01", "02", "03"
]


const Name: TAcademicSemesterName[] = [
    "Autumn","Fall","Summer"
]

const academicSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: Name
    },

    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      enum: Month,
      required: true,
    },
    code: {
      type: String,
      enum: Code,
      required: true,
    },
    endMonth: {
      type: String,
      enum: Month,
      required: true,
    },
  },
  { timestamps: true }
);
