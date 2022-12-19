
PROD: docker-compose --env-file .env.prod -f docker-compose.prod.yml up
DEV:  docker-compose --env-file .env.dev -f docker-compose.dev.yml up
docker-compose -f docker-compose.dev.yml up

Stop the container(s) using the following command:
docker-compose down

1) Kill all containers
   docker kill $(docker ps -q)

2) Delete all containers using the following command:
   docker rm -f $(docker ps -a -q)

3) Delete all volumes using the following command:
   docker volume rm $(docker volume ls -q) -f

4) Delete all images
   docker rmi $(docker images -q) -f
