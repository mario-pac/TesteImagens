FROM amazoncorretto:17-alpine-jdk

# Creating a directory
WORKDIR /app

# Copying everything from the current directory to the app directory
COPY . .

# Give execute permission to the gradlew script
RUN chmod +x ./gradlew

# Building the app
RUN ./gradlew clean build -x test

# Exposing port
EXPOSE 8080

# Running the app
CMD ["java", "-jar", "./build/libs/teste-0.0.1-SNAPSHOT.jar"]
