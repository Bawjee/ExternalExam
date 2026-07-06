# Docker Documentation

## Pull the Docker Image

docker pull <dockerhub-username>/bmi-calculator:latest

## Run the Docker Image

docker run -d -p 3000:3000 --name bmi-calculator <dockerhub-username>/bmi-calculator:latest

## Create a Container from the Image

docker create --name bmi-calculator-container <dockerhub-username>/bmi-calculator:latest

## Start the Container

docker start bmi-calculator-container

## Stop the Running Container

docker stop bmi-calculator

## Restart the Container

docker restart bmi-calculator

## View Running Containers

docker ps

## View All Containers

docker ps -a

## View Docker Images

docker images

## Remove the Container

docker rm bmi-calculator

## Remove the Docker Image

docker rmi <dockerhub-username>/bmi-calculator:latest
