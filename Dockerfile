FROM openjdk:8
MAINTAINER Nihar Kanwar nihar_kanwar@yahoo.co.in
COPY ./target/sportitup-0.0.1-SNAPSHOT.war ./
WORKDIR ./
CMD ["java", "-jar", "sportitup-0.0.1-SNAPSHOT.war"]
