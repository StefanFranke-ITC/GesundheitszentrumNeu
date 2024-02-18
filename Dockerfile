# Basis-Image: Node.js
FROM node:14 as build-stage

# Arbeitsverzeichnis im Container erstellen
WORKDIR /app

# Abhängigkeiten kopieren und installieren
COPY package*.json ./
RUN npm install

# Projektdateien kopieren
COPY . .

# Build durchführen
RUN npm run build

# Nginx-Image für die Bereitstellung verwenden
FROM nginx:stable-alpine as production-stage

# SSL-Zertifikat und Schlüssel in das Container-Image kopieren
COPY /etc/letsencrypt/live/tier-gesundheitszentrum.com/fullchain.pem /etc/nginx/ssl/tier-gesundheitszentrum.com_fullchain.pem
COPY /etc/letsencrypt/live/tier-gesundheitszentrum.com/privkey.pem /etc/nginx/ssl/tier-gesundheitszentrum.com_privkey.pem

RUN rm /etc/nginx/conf.d/default.conf

# Nginx-Konfigurationsdatei kopieren
COPY config/nginx.conf /etc/nginx/nginx.conf

# Vue.js-Build aus dem vorherigen Build-Stage kopieren
COPY --from=build-stage /app/dist /app

# Nginx starten
CMD ["nginx", "-g", "daemon off;"]
