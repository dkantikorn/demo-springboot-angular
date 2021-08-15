# Docker tutorial

## How to build 
* build for the docker file *
```bash
$ docker build -t spring-boot-docker .
$ docker image ls
```

## How to run docker
* run the docker after you build completed *
```bash
$ docker run -p 9000:8080 spring-boot-docker
$ docker container ls
```

## How to stop docker container
```bash
$ docker container stop cf08936afdc6
```

## You can use Dockerfile Maven
![spotify / dockerfile-maven](https://github.com/spotify/dockerfile-maven)

## Official Maven Docker image
![Official Maven Docker image](https://hub.docker.com/_/maven/)