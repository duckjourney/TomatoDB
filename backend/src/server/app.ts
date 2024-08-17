import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import connectToDatabase from './server';
import getAliments from '../routes/aliments.routes.mjs';


const app = new Hono();
const port = 3000;

app.route ('/api/aliments', getAliments)

connectToDatabase();

serve({
  fetch: app.fetch,
  port,
});
