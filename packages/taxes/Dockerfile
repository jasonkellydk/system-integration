FROM gradle:6.0.1-jdk8

USER root

WORKDIR /builder

ADD . /builder

RUN gradle build --stacktrace

CMD ["java", "-jar", "./build/libs/server-0.0.1-SNAPSHOT.war"]

EXPOSE 4000
