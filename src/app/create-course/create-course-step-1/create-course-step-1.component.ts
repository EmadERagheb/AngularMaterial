import { Component } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { MatCalendarCellClassFunction } from "@angular/material/datepicker";

@Component({
  selector: "create-course-step-1",
  templateUrl: "create-course-step-1.component.html",
  styleUrls: ["create-course-step-1.component.scss"],
})
export class CreateCourseStep1Component {
  dataClass: MatCalendarCellClassFunction<Date> = (cellData, view) => {
    const data = cellData.getDate();
    if (view == "month") {
      return data == 1 ? 'highlight-data' : '';
    }
    return "";
  };
  form = this.fb.group({
    title: [
      "",
      [Validators.required, Validators.minLength(5), Validators.maxLength(60)],
    ],
    releasedAt: [new Date(), Validators.required],
    category: ["BEGINNER", Validators.required],
    courseType: ["premium", Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: ["", [Validators.required, Validators.minLength(3)]],
  });

  constructor(private fb: UntypedFormBuilder) {}

  get courseTitle() {
    return this.form.controls["title"];
  }
}
