const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Security & Caching headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// Health check endpoint for Cloud Run & Cloudflare
app.get('/healthz', (req, res) => {
    res.status(200).json({ status: 'healthy', service: 'CrimX', timestamp: new Date().toISOString() });
});

app.get('/api/status', (req, res) => {
    res.status(200).json({
        service: 'CrimX Account System',
        status: 'online',
        uptime: process.uptime(),
        subdomain: 'crimx.crimsonflame.net'
    });
});

// Serve static assets with proper MIME types
app.use(express.static(path.join(__dirname), {
    extensions: ['html', 'htm'],
    maxAge: '1h'
}));

// SPA Fallback to index.html for dashboard routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`[CrimX] Server running on http://0.0.0.0:${PORT}`);
});
