# Pi Network Demo App - Complete Setup

यह एक complete Node.js + Express Demo Application है जो Pi Network validation के लिए तैयार है।

## ✨ Features

✅ Express.js Server  
✅ CORS Support  
✅ Environment Variables (.env)  
✅ Validation Key Management  
✅ Multiple API Endpoints  
✅ Error Handling  
✅ Health Check  
✅ Demo App Ready  

---

## 🚀 Installation & Setup

### Step 1: Repository Download करें
```bash
git clone https://github.com/Pravinkanoje/validation-key.git
cd validation-key
```

### Step 2: Dependencies Install करें
```bash
npm install
```

### Step 3: App Run करें
```bash
npm start
```

या development mode में:
```bash
npm run dev
```

**Output:**
```
🚀 Pi Network Demo App running on http://localhost:3000
✅ Validation Key: Configured
```

---

## 📡 API Endpoints

### 1️⃣ Home Page
```
GET http://localhost:3000/
```
**Response:**
```json
{
  "message": "Welcome to Pi Network Demo App",
  "status": "running",
  "validationKey": "Set"
}
```

### 2️⃣ Get Validation Key
```
GET http://localhost:3000/api/validation-key
```
**Response:**
```json
{
  "validationKey": "856198b2304aa5163d65ea95f4bbb8e59d9bb4b64158d3c054f55ea6d346cbe53c2f49b1b1c408f238b3a7bea067bd4159cd1f8de3a211411d3c891aa5b966d2",
  "status": "valid"
}
```

### 3️⃣ Verify Validation Key
```
POST http://localhost:3000/api/verify
Content-Type: application/json

{
  "key": "856198b2304aa5163d65ea95f4bbb8e59d9bb4b64158d3c054f55ea6d346cbe53c2f49b1b1c408f238b3a7bea067bd4159cd1f8de3a211411d3c891aa5b966d2"
}
```

**Success Response:**
```json
{
  "status": "verified",
  "message": "Validation key is correct!",
  "timestamp": "2026-09-10T15:30:56.000Z"
}
```

### 4️⃣ App Info
```
GET http://localhost:3000/api/info
```
**Response:**
```json
{
  "appName": "My Tube - Pi Network",
  "version": "1.0.0",
  "validationStatus": "Configured",
  "environment": "development"
}
```

### 5️⃣ Health Check
```
GET http://localhost:3000/api/health
```
**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-09-10T15:30:56.000Z",
  "uptime": 123.456
}
```

### 6️⃣ Validation Key File
```
GET http://localhost:3000/validation-key.txt
```
**Response:** Plain text validation key

---

## 🔐 Environment Variables

`.env` file में automatically configured है:
```
VALIDATION_KEY=856198b2304aa5163d65ea95f4bbb8e59d9bb4b64158d3c054f55ea6d346cbe53c2f49b1b1c408f238b3a7bea067bd4159cd1f8de3a211411d3c891aa5b966d2
```

---

## 🧪 Testing

### Browser में Test करें:
- Home: http://localhost:3000
- Validation Key: http://localhost:3000/api/validation-key
- Health: http://localhost:3000/api/health
- Info: http://localhost:3000/api/info

### cURL से Test करें:
```bash
# Home
curl http://localhost:3000

# Validation Key प्राप्त करें
curl http://localhost:3000/api/validation-key

# Verify करें
curl -X POST http://localhost:3000/api/verify \
  -H "Content-Type: application/json" \
  -d '{"key":"856198b2304aa5163d65ea95f4bbb8e59d9bb4b64158d3c054f55ea6d346cbe53c2f49b1b1c408f238b3a7bea067bd4159cd1f8de3a211411d3c891aa5b966d2"}'

# Health Check
curl http://localhost:3000/api/health

# App Info
curl http://localhost:3000/api/info
```

---

## 🌐 Pi Network Integration

### Demo App Setup:
1. ✅ `.env` file में validation key configured है
2. ✅ App को start करें: `npm start`
3. ✅ Pi Network dashboard में **"Verify"** button दबाएं
4. ✅ Done! ✨

### Production Setup:
1. App को deploy करें (Heroku, Railway, Vercel, etc.)
2. Domain को Pi Network में add करें
3. Verify करें

---

## 📦 Project Structure

```
validation-key/
├── .env                    # Environment variables (Validation Key)
├── .gitignore              # Git ignore file
├── server.js               # Main Express server
├── package.json            # Dependencies
├── validation-key.txt      # Validation key text file
└── README.md               # This file
```

---

## 🚢 Deployment Options

### Heroku पर Deploy करें:
```bash
heroku login
heroku create your-app-name
git push heroku main
```

### Railway पर Deploy करें:
1. railway.app पर जाएं
2. GitHub repository connect करें
3. Environment variables add करें
4. Deploy करें

### Render पर Deploy करें:
1. render.com पर जाएं
2. New Web Service बनाएं
3. GitHub connect करें
4. Deploy करें

---

## 🆘 Troubleshooting

### Port already in use?
```bash
# अलग port पर चलाएं
PORT=4000 npm start
```

### Dependencies install में error?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Validation key नहीं मिल रही?
- Check करें `.env` file में `VALIDATION_KEY` है या नहीं
- Server को restart करें

---

## 📞 Support

कोई problem हो तो:
1. GitHub Issues में report करें
2. Documentation फिर से पढ़ें
3. Logs check करें

---

## 📄 License

MIT License - सभी को freely use कर सकते हो

---

**Happy Coding!** 🎉✨

Your Pi Network App is ready! 🚀
