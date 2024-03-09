import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

type Issue = { id: string; title: string; description: string };

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  selector: 'sitemate-issues-app-root',
  template: `<h1>Issues</h1>
    <form class="flex" [formGroup]="form" (ngSubmit)="saveIssue()">
      <div>
        <label for="id">ID</label>
        <input
          type="text"
          formControlName="id"
          class="border border-sky-600 px-4 py-2 rounded mx-4"
        />
      </div>
      <div>
        <label for="id">Title</label>
        <input
          type="text"
          formControlName="title"
          class="border border-sky-600 px-4 py-2 rounded mx-4"
        />
      </div>
      <div>
        <label for="id">Description</label>
        <input
          type="text"
          formControlName="description"
          class="border border-sky-600 px-4 py-2 rounded mx-4"
        />
      </div>
      <button class="p-2 rounded bg-sky-500 text-white" type="submit">
        Save
      </button>
    </form>
    <div class="p-8 grid grid-cols-4 gap-4">
      @for(issue of issues; track issue.id) {
      <div
        class="rounded bg-white flex flex-col p-4 border border-gray-300 mb-3"
      >
        <h3>Issue {{ issue.id }}: {{ issue.title }}</h3>
        <p>{{ issue.description }}</p>
        <button
          class="p-2 rounded bg-red-500 text-white mb-4"
          (click)="deleteIssue(issue.id)"
        >
          Delete
        </button>
        <button
          class="p-2 rounded bg-green-500 text-white"
          (click)="editIssue(issue)"
        >
          Edit
        </button>
      </div>
      }
    </div> `,
  styles: ``,
})
export class AppComponent implements OnInit {
  title = 'client';
  issues: Issue[] = [];
  updateId = '';
  http = inject(HttpClient);
  ngOnInit(): void {
    this.getIssues();
  }

  form = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
  });

  public getIssues() {
    this.http.get<Issue[]>('http://localhost:3000/api').subscribe({
      next: (issues) => {
        this.issues = issues;
      },
      error: (err) => console.log(err),
    });
  }

  saveIssue() {
    if (this.updateId) {
      this.http
        .patch<Issue[]>(
          `http://localhost:3000/api/${this.updateId}`,
          this.form.getRawValue()
        )
        .subscribe({ next: (res) => (this.issues = res) });
      this.updateId = '';
      return;
    }

    this.http
      .post<Issue[]>('http://localhost:3000/api', this.form.getRawValue())
      .subscribe({ next: (res) => (this.issues = res) });
  }

  editIssue(issue: Issue) {
    this.form.patchValue(issue);
    this.updateId = issue.id;
  }

  deleteIssue(id: string) {
    this.http
      .delete<{ id: string; title: string; description: string }[]>(
        `http://localhost:3000/api/${id}`
      )
      .subscribe({ next: (res) => (this.issues = res) });
  }
}
