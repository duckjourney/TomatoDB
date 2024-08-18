import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import connectToDatabase from './server';
import alimentsRoutes from '../routes/aliments.routes.mjs';


const app = new Hono();
const port = 3000;

app.use('/api/aliments/*', cors({
  origin: 'http://localhost:5173'
}))

app.route ('/api/aliments', alimentsRoutes)

connectToDatabase();

serve({
  fetch: app.fetch,
  port,
});
