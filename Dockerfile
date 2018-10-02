From node:latest

RUN curl -o- -L https://yarnpkg.com/install.sh


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app


RUN ["yarn"]
RUN ["yarn", "install-client"]
RUN ["yarn", "build"]


EXPOSE 8080

CMD ["yarn", "start:prod"]
