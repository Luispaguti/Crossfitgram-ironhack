FROM node:18.12-alpine3.15
COPY api /opt/api
WORKDIR /opt/api

RUN npm ci--only=production
EXPOSE 3001

CMD ["npm","start"]
