import {  Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'}) //with this decorator now angular is aware of this service
export class TasksService{
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Fix authentication bugs',
      summary: 'Resolve issues with the token-based authentication system.',
      dueDate: '2025-02-10',
    },
    {
      id: 't5',
      userId: 'u4',
      title: 'Optimize database performance',
      summary:
        'Analyze slow SQL queries and improve database performance for high traffic.',
      dueDate: '2025-03-15',
    },
    {
      id: 't6',
      userId: 'u5',
      title: 'Update design system',
      summary: 'Revamp the design system to align with the latest brand guidelines.',
      dueDate: '2025-01-31',
    },
    {
      id: 't7',
      userId: 'u6',
      title: 'Test deployment process',
      summary: 'Perform end-to-end testing on the new CI/CD pipeline.',
      dueDate: '2025-02-05',
    },
    {
      id: 't8',
      userId: 'u2',
      title: 'Create marketing dashboard',
      summary: 'Develop a dashboard for tracking marketing campaign performance.',
      dueDate: '2025-04-01',
    },
    {
      id: 't9',
      userId: 'u1',
      title: 'Research TypeScript best practices',
      summary: 'Investigate TypeScript coding patterns for scalable applications.',
      dueDate: '2025-01-28',
    },
    {
      id: 't10',
      userId: 'u6',
      title: 'Prepare onboarding guide',
      summary: 'Create a comprehensive guide for new team members.',
      dueDate: '2025-03-01',
    },
  ];
  


      constructor(){
        const tasks = localStorage.getItem('tasks');

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
      }


      getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId === userId)
      }

      addTask(taskData: NewTaskData, userId: string){
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
          });
          this.saveTasks();
      }

      removeTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
      }

      private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
}