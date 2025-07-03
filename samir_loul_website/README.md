# Samir Loul - Personal Website

Een professionele, volledig functionele persoonlijke website voor Mohamed Samir Loul met dark/light mode, responsief design, en een werkend contactformulier met e-mailbevestiging.

## 🌟 Features

### Frontend Features
- **Multi-page website** - Home, About, Projects, CV, Contact
- **Dark/Light mode toggle** - Volledig werkende thema-schakelaar
- **Responsive design** - Werkt perfect op desktop, tablet en mobiel
- **Hamburger menu** - Voor mobiele navigatie
- **Professionele animaties** - Smooth transitions en hover effecten
- **Social media integratie** - Links naar alle sociale platforms
- **Modern design** - Clean, professioneel en aantrekkelijk

### Backend Features
- **Node.js Express server** - Professionele backend architectuur
- **Email functionaliteit** - Werkend contactformulier met Nodemailer
- **Dubbele email bevestiging** - Bezoeker krijgt bevestiging, eigenaar krijgt notificatie
- **Form validatie** - Zowel frontend als backend validatie
- **CORS ondersteuning** - Voor frontend-backend communicatie
- **Environment configuratie** - Veilige .env configuratie

## 📁 Project Structuur

```
samir_loul_website/
├── frontend/                 # Frontend bestanden
│   ├── css/
│   │   └── style.css        # Alle styling en themes
│   ├── js/
│   │   └── script.js        # Frontend JavaScript
│   ├── img/                 # Afbeeldingen en assets
│   │   ├── 21EE004C-0775-427B-BFC4-7E1D14106A04.jpeg
│   │   ├── IMG_4039.jpeg
│   │   ├── gradient-bg.jpg
│   │   ├── tech-workspace.jpg
│   │   └── geometric-bg.jpg
│   ├── index.html           # Homepage
│   ├── about.html           # Over mij pagina
│   ├── projects.html        # Projecten pagina
│   ├── cv.html             # CV pagina
│   └── contact.html        # Contact pagina
├── backend/                 # Backend server
│   ├── src/
│   │   ├── routes/
│   │   │   └── contact.js   # Contact API routes
│   │   ├── utils/
│   │   │   └── emailService.js # Email service
│   │   └── server.js        # Main server file
│   ├── .env                 # Environment variabelen
│   ├── package.json         # Node.js dependencies
│   └── package-lock.json
└── README.md               # Deze documentatie
```

## 🚀 Installatie & Setup

### Vereisten
- Node.js (versie 18 of hoger)
- npm (komt met Node.js)
- Gmail account voor email functionaliteit

### Stap 1: Dependencies installeren
```bash
cd backend
npm install
```

### Stap 2: Environment configuratie
Bewerk het `.env` bestand in de backend map:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=jouw-email@gmail.com
EMAIL_PASS=jouw-app-wachtwoord

# Website Owner Email
OWNER_EMAIL=jouw-email@gmail.com
OWNER_NAME=Jouw Naam

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

**Belangrijk:** Voor Gmail moet je een App Password gebruiken, geen gewoon wachtwoord.

### Stap 3: Server starten
```bash
cd backend
npm start
```

De website is nu beschikbaar op: http://localhost:3000

## 📧 Email Configuratie

### Gmail App Password instellen
1. Ga naar je Google Account instellingen
2. Selecteer "Security" → "2-Step Verification"
3. Scroll naar beneden naar "App passwords"
4. Genereer een nieuw app password voor "Mail"
5. Gebruik dit password in je .env bestand

### Email Templates
Het systeem stuurt automatisch twee emails:
1. **Bevestiging naar bezoeker** - Professionele bevestiging met je branding
2. **Notificatie naar eigenaar** - Gedetailleerde melding met bericht inhoud

## 🎨 Customization

### Kleuren aanpassen
Bewerk `frontend/css/style.css` en pas de CSS variabelen aan:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    /* etc... */
}
```

### Content aanpassen
- **Persoonlijke informatie**: Bewerk de HTML bestanden
- **Social media links**: Update de links in alle HTML bestanden
- **Afbeeldingen**: Vervang bestanden in `frontend/img/`

## 🌐 Deployment Opties

### Optie 1: Lokale hosting
- Start de server met `npm start`
- Toegankelijk via http://localhost:3000

### Optie 2: Cloud hosting (Heroku, DigitalOcean, etc.)
1. Upload het project naar je hosting provider
2. Configureer environment variabelen
3. Start de Node.js applicatie

### Optie 3: Statische hosting + externe API
- Host frontend op Netlify/Vercel
- Deploy backend op Heroku/Railway
- Update CORS instellingen

## 🔧 Development

### Development mode
```bash
cd backend
npm run dev  # Start met nodemon voor auto-restart
```

### Testing
- Test het contactformulier op: http://localhost:3000/contact
- Test API endpoint: http://localhost:3000/api/health

## 📱 Browser Ondersteuning

- ✅ Chrome (laatste 2 versies)
- ✅ Firefox (laatste 2 versies)
- ✅ Safari (laatste 2 versies)
- ✅ Edge (laatste 2 versies)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technische Stack

### Frontend
- **HTML5** - Semantische markup
- **CSS3** - Modern styling met CSS Grid/Flexbox
- **Vanilla JavaScript** - Geen frameworks, pure JS
- **Font Awesome** - Icons
- **Google Fonts** - Typography

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment configuration

## 🐛 Troubleshooting

### Email werkt niet
1. Controleer je Gmail App Password
2. Zorg dat 2-factor authenticatie aan staat
3. Check de .env configuratie
4. Kijk in de server logs voor errors

### Website laadt niet
1. Controleer of de server draait
2. Check de poort (standaard 3000)
3. Kijk naar browser console voor errors

### Styling problemen
1. Hard refresh (Ctrl+F5)
2. Check browser developer tools
3. Controleer CSS bestand pad

## 📞 Support

Voor vragen of problemen:
- Email: sameerloul2010@gmail.com
- Check de server logs voor technische details
- Gebruik browser developer tools voor frontend issues

## 📄 Licentie

Dit project is gemaakt voor Mohamed Samir Loul. Alle rechten voorbehouden.

---

**Gemaakt met ❤️ door Manus AI**

