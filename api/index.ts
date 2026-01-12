import type { VercelRequest, VercelResponse } from '@vercel/node';
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import { z } from 'zod';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const db = drizzle(pool);

const subscriberSchema = z.object({
  email: z.string().email('Invalid email address'),
});

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const path = req.url?.replace('/api', '') || '';

  try {
    if (path === '/subscribers' && req.method === 'POST') {
      const input = subscriberSchema.parse(req.body);
      const result = await pool.query(
        'INSERT INTO subscribers (email) VALUES ($1) ON CONFLICT (email) DO NOTHING RETURNING *',
        [input.email]
      );
      
      if (result.rows.length === 0) {
        return res.status(409).json({ message: 'Email already subscribed' });
      }
      
      return res.status(201).json(result.rows[0]);
    }

    if (path === '/contact' && req.method === 'POST') {
      const input = contactSchema.parse(req.body);
      const result = await pool.query(
        'INSERT INTO contact_messages (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *',
        [input.name, input.email, input.subject, input.message]
      );
      
      return res.status(201).json(result.rows[0]);
    }

    if (path === '/health' && req.method === 'GET') {
      return res.status(200).json({ status: 'ok' });
    }

    return res.status(404).json({ message: 'Not found' });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: err.errors[0].message,
        field: err.errors[0].path.join('.'),
      });
    }
    
    console.error('API Error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
