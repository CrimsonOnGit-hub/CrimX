# CrimX ⚡

**CrimX** is the dedicated player identity, authentication, presence, and dashboard service for **CrimsonFlame** (`https://crimsonflame.net`).

---

## 🌟 Features
- **Single Sign-On (SSO)**: Firebase Auth with Email/Password, Google OAuth, and password recovery.
- **4-Block Hub Layout**:
  - 👥 **Friends Block**: Real-time Firestore friend requests, player search by `@username`, accept/decline, remove friends, online presence indicator.
  - 👤 **Profile Block**: Player avatar, display name, handle, UID, verified badges, and quick-access Settings gear.
  - 🎮 **Block 3 & 4**: Dedicated feature cards for future ecosystem expansion ("Coming soon!").
- **CrimX Settings Modal**:
  - Profile customization (avatar URL, bio, display name, handle).
  - Glow Theme Engine (Crimson Dark, Midnight Blue, Cyberpunk Neon, Forest Glass, Royal Purple, Sunset Ember).
  - Account security & sign out.
- **Instant Navigation**:
  - Floating `← Back` button to cleanly return to `https://crimsonflame.net/`.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start the server
npm start
```

Visit [http://localhost:8080](http://localhost:8080) in your browser.

---

## ☁️ Deployment

### 1. Deploying to Google Cloud Run
You can deploy this repository directly using the Google Cloud CLI or Google Cloud Build:

```bash
gcloud run deploy crimx \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

### 2. Routing through Cloudflare (Subdomain)
To serve this service at `crimx.crimsonflame.net`:
1. In **Google Cloud Run**, navigate to **Custom Domains** and add `crimx.crimsonflame.net`.
2. In your **Cloudflare Dashboard** under DNS for `crimsonflame.net`:
   - Add a `CNAME` record:
     - **Name**: `crimx`
     - **Target**: `ghs.googlehosted.com` (or your Cloud Run mapped endpoint)
     - **Proxy status**: Proxied (Orange Cloud) for automatic SSL and DDoS mitigation.
3. Ensure SSL/TLS encryption mode in Cloudflare is set to **Full** or **Full (strict)**.

---

© 2026 CrimsonFlame LLC. All rights reserved.
