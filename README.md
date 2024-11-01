# Fastify Docker Integration with PostgreSQL and MongoDB

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributions](#contributions)
- [License](#license)

## Overview

This project demonstrates how to set up a Fastify server inside a Docker container, using Docker Compose for orchestration, and Nginx for proxying API requests and serving static files. The Fastify server integrates with both PostgreSQL and MongoDB, allowing for CRUD operations on resources stored in each database.

### Features

- **Fastify REST API**:
  - **PostgreSQL Endpoints**:
    - `GET /api/pg/resources`: Retrieve all resources from PostgreSQL.
    - `GET /api/pg/resources/:id`: Retrieve a specific resource from PostgreSQL by ID.
    - `POST /api/pg/resources`: Create a new resource in PostgreSQL.
    - `PUT /api/pg/resources/:id`: Update an existing resource in PostgreSQL.
    - `DELETE /api/pg/resources/:id`: Delete a resource from PostgreSQL by ID.

  - **MongoDB Endpoints**:
    - `GET /api/mongo/resources`: Retrieve all resources from MongoDB.
    - `GET /api/mongo/resources/:id`: Retrieve a specific resource from MongoDB by ID.
    - `POST /api/mongo/resources`: Create a new resource in MongoDB.
    - `PUT /api/mongo/resources/:id`: Update an existing resource in MongoDB.
    - `DELETE /api/mongo/resources/:id`: Delete a resource from MongoDB by ID.

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

3. **Configure Environment Variables**:
    Update the `.env` file with the correct database credentials and other configurations as needed.

4. **Run the Application**:
    - Start the services using Docker Compose:
      ```bash
      docker-compose up --build
      ```

5. **Access the Application**:
    - Visit `http://localhost` in your browser to access static files served by Nginx.
    - Use tools like Postman or curl to access the REST API endpoints:
        - **PostgreSQL**:
            - `GET http://localhost/api/pg/resources`: To get the list of all PostgreSQL resources.
            - `GET http://localhost/api/pg/resources/:id`: To fetch a specific PostgreSQL resource by ID.
            - `POST http://localhost/api/pg/resources`: To create a new PostgreSQL resource (send a JSON body).
            - `PUT http://localhost/api/pg/resources/:id`: To update a specific PostgreSQL resource (send a JSON body).
            - `DELETE http://localhost/api/pg/resources/:id`: To delete a specific PostgreSQL resource.

        - **MongoDB**:
            - `GET http://localhost/api/mongo/resources`: To get the list of all MongoDB resources.
            - `GET http://localhost/api/mongo/resources/:id`: To fetch a specific MongoDB resource by ID.
            - `POST http://localhost/api/mongo/resources`: To create a new MongoDB resource (send a JSON body).
            - `PUT http://localhost/api/mongo/resources/:id`: To update a specific MongoDB resource (send a JSON body).
            - `DELETE http://localhost/api/mongo/resources/:id`: To delete a specific MongoDB resource.

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

- **docker-compose.yml**: Docker Compose file defining services for Fastify, PostgreSQL, and MongoDB.

- **Dockerfile**: Instructions for building the Docker image for the Fastify application.

- **LICENSE**: The project license (if applicable).

- **package.json**: Node.js dependencies and project metadata.

- **README.md**: Project documentation.

## Contributions

Contributions, feedback, and suggestions are welcome. Feel free to submit a pull request or open an issue if you have any improvements or find issues.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
