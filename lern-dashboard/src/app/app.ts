
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  studentName = 'Mein Dashboard';
  studyMode = false;

  subjects = [
    {
      name: 'Informatik',
      description: 'Programmieren und Projekte',
      progress: 75,
      color: 'purple',
      symbol: '</>'
    },
    {
      name: 'Mathematik',
      description: 'Übungen und Theorie',
      progress: 45,
      color: 'blue',
      symbol: 'π'
    },
    {
      name: 'Englisch',
      description: 'Wortschatz und Grammatik',
      progress: 60,
      color: 'orange',
      symbol: 'A+'
    }
  ];

  tasks = [
    { title: 'Angular wiederholen', done: true },
    { title: 'Mathematik üben', done: false },
    { title: 'Englisch Vokabeln lernen', done: false }
  ];

  get completedTasks(): number {
    return this.tasks.filter(task => task.done).length;
  }

  toggleTask(index: number): void {
    this.tasks[index].done = !this.tasks[index].done;
  }

  toggleStudyMode(): void {
    this.studyMode = !this.studyMode;
  }
}
