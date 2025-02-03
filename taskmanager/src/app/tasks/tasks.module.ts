import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { CardComponent } from "../shared/card/card.component";
import { TasksComponent } from "./tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../shared/card/shared.module";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports: [TasksComponent],
    imports: [CommonModule, FormsModule, SharedModule]
})

export class TasksModule {

}