FROM openjdk:17
EXPOSE 8088
ADD target/microservice-0.0.1-SNAPSHOT.jar evaluation.jar
ENTRYPOINT ["java", "-jar", "evaluation.jar"]