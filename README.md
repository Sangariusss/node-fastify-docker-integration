# Fastify Docker Integration

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributions](#contributions)
- [License](#license)

## Overview

This project demonstrates how to set up a Fastify server inside a Docker container, using Docker Compose for orchestration, and Nginx for proxying API requests and serving static files. The Fastify server includes several RESTful endpoints for managing resources, and Nginx handles traffic proxying for the `/api` routes and serves static assets.

### Features

- **Fastify REST API**:
  - `GET /api/resources`: Retrieve all resources.
  - `GET /api/resources/:id`: Retrieve a specific resource by ID.
  - `POST /api/resources`: Create a new resource.
  - `PUT /api/resources/:id`: Update an existing resource.
  - `DELETE /api/resources/:id`: Delete a resource by ID.
- **Nginx**: Serves static files and proxies API requests to the Fastify backend.
- **Docker**: The project is fully containerized with Docker and uses Docker Compose to orchestrate the services.

## Usage

### Setup and Deployment

1. **Install Docker and Docker Compose**: Ensure Docker and Docker Compose are installed on your system.

2. **Clone the Repository**:
    ```bash
    git clone https://github.com/sangariusss/node-fastify-docker-integration.git
    cd node-fastify-docker-integration
    ```

3. **Run the Application**:
    - Start the services using Docker Compose:
      ```bash
      docker-compose up --build
      ```

4. **Access the Application**:
    - Visit `http://localhost` in your browser to access static files served by Nginx.
    - Use tools like Postman or curl to access the REST API endpoints:
        - `GET http://localhost/api/resources`: To get the list of all resources.
        - `GET http://localhost/api/resources/:id`: To fetch a specific resource by ID.
        - `POST http://localhost/api/resources`: To create a new resource (send a JSON body).
        - `PUT http://localhost/api/resources/:id`: To update a specific resource (send a JSON body).
        - `DELETE http://localhost/api/resources/:id`: To delete a specific resource.

## File Structure

- **html/**: Contains the static HTML files served by Nginx.
    - `404.html`: Custom 404 error page.

- **nginx/**: Nginx configuration folder.
    - `nginx.conf`: Configuration file for setting up Nginx proxying and static file serving.

- **static/**: Static assets like images or icons.
    - `favicon.svg`: Favicon for the application.

- **.dockerignore**: Specifies files and directories to ignore in Docker builds.

- **.gitignore**: Specifies files and directories to ignore in Git.

- **app.js**: The main Fastify application file.

- **docker-compose.yml**: Docker Compose file defining services for Fastify and Nginx.

- **Dockerfile**: Instructions for building the Docker image for the Fastify application.

- **LICENSE**: The project license (if applicable).

- **package.json**: Node.js dependencies and project metadata.

- **README.md**: Project documentation.

## Contributions

Contributions, feedback, and suggestions are welcome. Feel free to submit a pull request or open an issue if you have any improvements or find issues.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
