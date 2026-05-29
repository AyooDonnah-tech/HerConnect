FROM tomcat:10.1-jdk21-temurin-jammy
# Remove default webapps
RUN rm -rf /usr/local/tomcat/webapps/*
# Copy the WAR as ROOT.war so it serves at /
COPY target/herconnect.war /usr/local/tomcat/webapps/ROOT.war

# Configure Tomcat port binding (Render default port 8080 or environment variable PORT)
ENV PORT=8080
RUN sed -i 's/<Server port="8005"/<Server port="-1"/' /usr/local/tomcat/conf/server.xml

CMD ["/bin/sh", "-c", "sed -i \"s/port=\\\"8080\\\"/port=\\\"$PORT\\\"/g\" /usr/local/tomcat/conf/server.xml && catalina.sh run"]
