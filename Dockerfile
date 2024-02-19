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
COPY tier-gesundheitszentrum.crt /etc/ssl/private/
COPY tier-gesundheitszentrum.key /etc/ssl/private/

RUN rm /etc/nginx/conf.d/default.conf

# Nginx-Konfigurationsdatei kopieren
COPY nginx.conf /etc/nginx/nginx.conf

# Vue.js-Build aus dem vorherigen Build-Stage kopieren
COPY --from=build-stage /app/dist /app

# Port 443 für HTTPS freigeben
EXPOSE 443

# Nginx starten
CMD ["nginx", "-g", "daemon off;"]
