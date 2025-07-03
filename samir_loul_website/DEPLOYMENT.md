# Deployment Gids - Samir Loul Website

Deze gids helpt je bij het online zetten van je website op verschillende platforms.

## 🚀 Snelle Start (Lokaal testen)

1. **Download en unzip het project**
2. **Open terminal/command prompt**
3. **Navigeer naar de backend map:**
   ```bash
   cd samir_loul_website/backend
   ```
4. **Installeer dependencies:**
   ```bash
   npm install
   ```
5. **Start de server:**
   ```bash
   npm start
   ```
6. **Open je browser en ga naar:** http://localhost:3000

## 📧 Email Setup (Verplicht voor contactformulier)

### Gmail App Password instellen:
1. Ga naar [Google Account Security](https://myaccount.google.com/security)
2. Zet 2-Step Verification aan (als nog niet gedaan)
3. Ga naar "App passwords"
4. Selecteer "Mail" en genereer password
5. Kopieer het 16-karakter password

### .env bestand configureren:
Bewerk `backend/.env`:
```env
EMAIL_USER=jouw-email@gmail.com
EMAIL_PASS=jouw-16-karakter-app-password
OWNER_EMAIL=jouw-email@gmail.com
```

## 🌐 Online Deployment Opties

### Optie 1: Heroku (Gratis tier beschikbaar)

1. **Maak Heroku account:** https://heroku.com
2. **Installeer Heroku CLI**
3. **Login en maak app:**
   ```bash
   heroku login
   heroku create jouw-website-naam
   ```
4. **Configureer environment variabelen:**
   ```bash
   heroku config:set EMAIL_USER=jouw-email@gmail.com
   heroku config:set EMAIL_PASS=jouw-app-password
   heroku config:set OWNER_EMAIL=jouw-email@gmail.com
   heroku config:set NODE_ENV=production
   ```
5. **Deploy:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push heroku main
   ```

### Optie 2: Railway (Modern alternatief)

1. **Ga naar:** https://railway.app
2. **Connect je GitHub account**
3. **Upload project naar GitHub**
4. **Deploy from GitHub op Railway**
5. **Configureer environment variabelen in Railway dashboard**

### Optie 3: DigitalOcean App Platform

1. **Maak DigitalOcean account**
2. **Ga naar App Platform**
3. **Connect GitHub repository**
4. **Configureer build settings:**
   - Build Command: `cd backend && npm install`
   - Run Command: `cd backend && npm start`
5. **Voeg environment variabelen toe**

### Optie 4: Netlify + Separate Backend

**Frontend (Netlify):**
1. Upload alleen de `frontend` map naar Netlify
2. Configureer redirects voor SPA

**Backend (Railway/Heroku):**
1. Deploy alleen de `backend` map
2. Update CORS settings in server.js

## 🔧 Production Configuratie

### Environment Variabelen voor Production:
```env
NODE_ENV=production
PORT=3000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=jouw-email@gmail.com
EMAIL_PASS=jouw-app-password
OWNER_EMAIL=jouw-email@gmail.com
FRONTEND_URL=https://jouw-domain.com
```

### Server.js aanpassingen voor production:
```javascript
// Update CORS voor je domain
app.use(cors({
    origin: ['https://jouw-domain.com', 'http://localhost:3000'],
    credentials: true
}));
```

## 📱 Custom Domain Setup

### Voor Heroku:
```bash
heroku domains:add jouw-domain.com
heroku domains:add www.jouw-domain.com
```

### DNS Configuratie:
- **A Record:** Point naar je hosting IP
- **CNAME:** www → jouw-domain.com

## 🔒 SSL/HTTPS

De meeste moderne hosting platforms (Heroku, Netlify, Railway) bieden automatische SSL.

Voor custom servers:
- Gebruik Let's Encrypt (gratis)
- Configureer HTTPS redirect

## 📊 Monitoring & Analytics

### Toevoegen van Google Analytics:
Voeg toe aan alle HTML bestanden (voor `</head>`):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🐛 Troubleshooting

### Veelvoorkomende problemen:

**1. Email werkt niet in production:**
- Check environment variabelen
- Controleer Gmail App Password
- Kijk naar server logs

**2. CORS errors:**
- Update FRONTEND_URL in .env
- Check CORS configuratie in server.js

**3. Static files laden niet:**
- Controleer file paths
- Check server static file serving

**4. 404 errors op refresh:**
- Configureer server voor SPA routing
- Add catch-all route

## 📈 Performance Optimalisatie

### Voor Production:
1. **Minify CSS/JS** (optioneel)
2. **Optimize images** (gebruik WebP formaat)
3. **Enable gzip compression**
4. **Add caching headers**

### Server optimalisaties:
```javascript
// In server.js
app.use(compression()); // gzip compression
app.use(express.static('frontend', {
    maxAge: '1d' // cache static files
}));
```

## 🔄 Updates & Maintenance

### Code updates:
1. Test lokaal eerst
2. Commit changes naar Git
3. Deploy naar staging (optioneel)
4. Deploy naar production

### Backup:
- Backup je .env bestand veilig
- Keep Git repository up-to-date
- Export email templates

## 📞 Support

Voor deployment hulp:
- Check hosting platform documentatie
- Gebruik browser developer tools
- Check server logs voor errors

---

**Succes met je deployment! 🚀**

