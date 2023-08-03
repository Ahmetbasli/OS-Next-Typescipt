/* eslint-disable */
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const crypto = require('crypto');

type Data = {
  name: string;
};

function validateSignature(payload: any, receivedSignature: any) {
  const YOUR_APP_SECRET = 'wa'; // Replace with your App Secret
  const generatedSignature = crypto
    .createHmac('sha256', YOUR_APP_SECRET)
    .update(JSON.stringify(payload))
    .digest('hex');

  return `sha256=${generatedSignature}` === receivedSignature;
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'GET') {
    if (
      req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === 'wa'
    ) {
      return res.status(200).send(req.query['hub.challenge'] as any);
    } else {
      return res.status(500).send({ name: 'Internal server error' });
    }
    return res.status(500).send({ name: 'Internal server error' });
  }

  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    if (body.field !== 'messages') {
      // not from the messages webhook so dont process
      return res.status(500).send({ name: 'Internal server error' });
    }
    const payload = req.body;
    const signature = req.headers['x-hub-signature-256'];

    // Here you should validate the payload signature
    if (validateSignature(payload, signature)) {
      axios({
        method: 'post',
        url: 'https://graph.facebook.com/v17.0/105057969351607/messages',
        headers: {
          Authorization:
            'Bearer EAANZButv1TCIBOZCkW3raZC2ekxfySY072pQp9x6bCjbtB4JMx1PEo8uv56XzVRdvuyQvDJxVxFLJrTrKSzKMskZAuB9du7DZAsv2BbBr2y3AyGslhvNJR12l04ScxVKPIU5OhK4KY3ZBjhIyojGZBro9gkFexyqjiGmdDFX1IpOjjXFHPZCVKHc8WX44UZAhxg8OpttHnWl75QgIoIOh',
          'Content-Type': 'application/json',
        },
        data: {
          messaging_product: 'whatsapp',
          to: '6285281788439',
          type: 'template',
          template: {
            name: 'hello_world',
            language: {
              code: 'en_US',
            },
          },
        },
      })
        .then((response) => {
          console.log('Response:', response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      return res.status(200).send({ name: 'OK' });
    }
    return res.status(403).send({ name: 'Signature mismatch' });
  }

  // If neither GET nor POST
  return res.status(405).send({ name: 'Method not allowed' });
};
