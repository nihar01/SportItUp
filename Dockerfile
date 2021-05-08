FROM openjdk:8

COPY ./target/sportitup-0.0.1-SNAPSHOT.war ./
WORKDIR ./
EXPOSE 8081
CMD ["java", "-jar", "sportitup-0.0.1-SNAPSHOT.war"]
