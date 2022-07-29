FROM node:lts-buster
RUN yarn install --no-audit
RUN npm install supervisor -g
CMD ["node", "app.js"]
