/* eslint-disable */
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const crypto = require('crypto');

type Data = {
  name: string;
};

const VERIFY_TOKEN = 'wa';
const ACCESS_TOKEN =
  'EAANZButv1TCIBO3pnr4Fn62NZC9O7ZA6ate6FTJiLBWyCo3atFSJKya9Du4fBItgZARr1JrGsVscJGA9wgZASPdodRTu6fAjzdZAhZCOA36H47PfYaBX8QGpq4u2EDyCKkZCGHCp6qPeyIMC78tDP8Yv8n0HUhAG8JYe7VJNw1ZCS7jp3ZBnNlDt0CzsOOrZBKjwoJ6Dcdb4Dk1lTI8o84QFQZDZD';
// const VERSION = 'v17.0';
// const PHONE_NUMBER_ID = '105057969351607';

function validateSignature(payload: any, receivedSignature: any) {
  const generatedSignature = crypto
    .createHmac('sha256', VERIFY_TOKEN)
    .update(JSON.stringify(payload))
    .digest('hex');

  return `sha256=${generatedSignature}` === receivedSignature;
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (typeof req.body !== 'object') {
    return res.status(400).send({ name: 'Invalid request body' });
  }

  if (req.method === 'GET') {
    if (
      req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === VERIFY_TOKEN
    ) {
      return res.status(200).send(req.query['hub.challenge'] as any);
    }
    return res.status(500).send({ name: 'Internal server error' });
  }

  if (req.method === 'POST') {
    const body = req.body;
    if (body.field !== 'messages') {
      return res.status(500).send({ name: 'Internal server error' });
    }
    const payload = req.body;
    const signature = req.headers['X-Hub-Signature-256'];

    await axios({
      method: 'post',
      url: 'https://graph.facebook.com/v17.0/105057969351607/messages',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN} `,
        'Content-Type': 'application/json',
      },
      data: {
        messaging_product: 'whatsapp',
        to: '6285281788439',
        type: 'text',
        text: {
          body: '1',
        },
      },
    });
    if (!validateSignature(payload, signature)) {
      return res.status(403).send({ name: 'Signature mismatch' });
    }
    // Here you should validate the payload signature

    await axios({
      method: 'post',
      url: 'https://graph.facebook.com/v17.0/105057969351607/messages',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN} `,
        'Content-Type': 'application/json',
      },
      data: {
        messaging_product: 'whatsapp',
        to: '6285281788439',
        type: 'text',
        text: {
          body: '2',
        },
      },
    });

    return res.status(200).send({ name: 'OK' });
  }

  // If neither GET nor POST
  return res.status(405).send({ name: 'Method not allowed' });
};
