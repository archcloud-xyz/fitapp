import { exec, ExecException } from 'child_process';
import { Express, Request, Response } from 'express'; // Adjust if not using TypeScript

export function addWebhook(app: Express) {
  app.post('/webhook', (req: Request, res: Response) => {
    // (Optionally verify secret, branch, etc. here)

    exec(
      'cd /home/ubuntu/fitapp && git pull && npm install && npm run build && pm2 restart fitapp',
      (error: ExecException | null, stdout: string, stderr: string) => {
        if (error) {
          console.error(`Error: ${error}`);
          return res.status(500).send('Deployment Failed');
        }
        console.log(`Deployment Output:\n${stdout}`);
        res.status(200).send('Deployment Succeeded');
      }
    );
  });
}