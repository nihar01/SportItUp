FROM openjdk:8

<<<<<<< HEAD
COPY ./target/sportitup-0.0.1-SNAPSHOT.jar sportitup-0.0.1-SNAPSHOT.jar
=======
COPY ./target/sportitup-0.0.1-SNAPSHOT.war ./
>>>>>>> cd557e14e35a2eb374851c31381d651b64728e0f
WORKDIR ./
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "sportitup-0.0.1-SNAPSHOT.jar"]
