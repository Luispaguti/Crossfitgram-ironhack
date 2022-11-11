FROM node:18.12-alpine3.15
COPY Api /opt/Api
WORKDIR /opt/Api

RUN npm ci--only=production
EXPOSE 3001

CMD ["npm","start"]
