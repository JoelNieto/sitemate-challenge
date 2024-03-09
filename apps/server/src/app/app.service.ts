import { Injectable, Logger } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

@Injectable()
export class AppService {
  getData(): { id: string; title: string; description: string }[] {
    const file = readFileSync(
      path.join(process.cwd(), 'apps/issues.json'),
      'utf-8'
    );
    Logger.log(file);
    return JSON.parse(file).issues;
  }

  createIssue(request: { id: string; title: string; description: string }) {
    let issues = this.getData();
    issues = [...issues, request];
    writeFileSync(
      path.join(process.cwd(), 'apps/issues.json'),
      JSON.stringify({ issues: issues })
    );
    return this.getData();
  }
  deleteIssue(id: string) {
    let issues = this.getData();
    issues = issues.filter((x) => x.id !== id);
    writeFileSync(
      path.join(process.cwd(), 'apps/issues.json'),
      JSON.stringify({ issues: issues })
    );
    return this.getData();
  }

  updateIssue(
    id: string,
    request: { id: string; title: string; description: string }
  ) {
    let issues = this.getData();
    issues = issues.map((x) => (x.id !== id ? x : request));
    writeFileSync(
      path.join(process.cwd(), 'apps/issues.json'),
      JSON.stringify({ issues: issues })
    );
    return this.getData();
  }
}
