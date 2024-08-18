import { Hono } from 'hono';
import { aliment, fieldsToInclude } from '../models/aliments.model.mjs';

const alimentsRoutes = new Hono()
  .get('/', async (c) => {
    try {
      const alimentsData = await aliment.find({}, fieldsToInclude);
      return c.json(alimentsData);
    } catch (error) {
      return c.json({ error: 'Unable to retrieve aliments from the database' }, 500);
    }
  })
  .get('/:aliment', async (c) => {
    try {
      const alimentURL = c.req.param('aliment');
      const alimentData = await aliment.find(
        { 'Food description': { $regex: alimentURL, $options: 'i' } },
        fieldsToInclude
      );
      if (alimentData.length === 0) {
        return c.json(
          {
            error:
              'This aliment does not exist in the database, please check spelling.',
          },
          500
        );
      }
      return c.json(alimentData);
    } catch (error) {
      return c.json(
        { error: 'Unable to find the aliment in the database.' },
        500
      );
    }
  });

export default alimentsRoutes;
