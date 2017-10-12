# Using nginx as the server.
FROM nginx:alpine
EXPOSE 80
# Copy the built webapp to the directory nginx serves.
COPY ./dist /usr/share/nginx/html
ADD ./nginx/nginx.conf /etc/nginx/