FROM node:19-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g serve
RUN npm ci

# Create a non-root user and switch to it
RUN adduser --disabled-password --gecos '' appuser
USER appuser

# Change ownership of the work directory to the non-root user
USER root
RUN chown -R appuser /usr/src/app
USER appuser

COPY . .

RUN npm run build
CMD [ "serve", "-s", "build" ]