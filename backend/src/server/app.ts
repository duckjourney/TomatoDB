import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import connectToDatabase from './server';


const app = new Hono();
const port = 3000;

connectToDatabase();

serve({
  fetch: app.fetch,
  port,
});
