// api/proxy.js

const fetch = require('node-fetch');

async function handler(req, res) {
  try {
    const response = await fetch('// api/proxy.js

const fetch = require('node-fetch');

async function handler(req, res) {
  try {
    const response = await fetch('// api/proxy.js

const fetch = require('node-fetch');

async function handler(req, res) {
  try {
    const response = await fetch('https://api123node-7872415f4d8d.herokuapp.com/' + req.url, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from Haruko Node API');
    }

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = handler;
' + req.url, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from Haruko Node API');
    }

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = handler;
' + req.url, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from Haruko Node API');
    }

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = handler;
