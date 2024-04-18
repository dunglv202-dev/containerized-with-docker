# How to deploy

- Go to `docker` directory
- Configure for environment at `.env`
- Run `docker compose build` to build images or `docker compose build <service-name>` for specific service _(see `docker-compose.yml`)_
- Run `docker compose up -d` to start containers with detach mode
- Access [localhost](http://localhost) from browser

# Notes

- `frontend/nginx.conf` is nginx configuration file
- `docker/mongo-init.js` contains initialization scripts for MongoDB
