export enum Category {
   Personal = 'Personal',
   Work = 'Work',
   Study = 'Study'
 } 

export interface ITask {
   name: String,
   category: Category,
   priority: Priority,
   date: Date,
   isDone: Boolean
}

export enum Priority {
   High = 'High',
   Medium = 'Medium',
   Low = 'Low'
}