## Required:

* Node.JS
* Redis

## How to run

1. Start Redis on your computer. Can be done with docker
```
docker pull redis

docker run -p 6380:6380 --name redis-momentum -d redis
```

2. Rename .env.sample to .env and set all environment variables in this file

3. Run with `npm start` or `npm run dev` 