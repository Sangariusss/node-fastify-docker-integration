# Fastify Docker Integration with PostgreSQL and MongoDB

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Endpoints](#endpoints)
- [Contributions](#contributions)
- [License](#license)

## Overview

This project sets up a Fastify server within a Docker container, using Docker Compose for service orchestration and Nginx for API proxying and static file serving. The Fastify server integrates with both PostgreSQL and MongoDB, supporting CRUD operations on resources in each database and includes Swagger documentation.

### Features

- **Fastify REST API** with CRUD functionality for PostgreSQL and MongoDB.
- **Swagger Documentation** available at `/api/docs`, with Basic Authentication enabled for restricted access.
- **Nginx**: Serves static files and proxies API requests to the Fastify backend, caching static files for improved performance.
- **Docker**: Containerized deployment with Docker Compose for seamless service orchestration.

## Usage

### Setup and Deployment

1. **Install Docker and Docker Compose**: Ensure they are installed on your system.

2. **Clone the Repository**:

   ```bash
   git clone https://github.com/sangariusss/node-fastify-docker-integration.git
   cd node-fastify-docker-integration
   ```

3. **Configure Environment Variables**:
   Update the `.env` file with the database credentials and any other configurations needed.

4. **Run the Application**:

   ```bash
   docker-compose up --build
   ```

5. **Access the Application**:
   - Visit `http://localhost` for static files served by Nginx.
   - Use `http://localhost/api` for the REST API endpoints (details below).
   - Access Swagger documentation at `http://localhost/api/docs` (requires Basic Authentication).

## File Structure

- **html/**: Contains static HTML files served by Nginx.

  - `404.html`: Custom 404 error page.

- **nginx/**: Nginx configuration folder.

  - `nginx.conf`: Configures Nginx proxying and static file handling.

- **static/**: Static assets (e.g., favicon).

  - `favicon.svg`: Favicon for the application.

- **app.js**: The main Fastify application file.
- **docker-compose.yml**: Defines services for Fastify, PostgreSQL, and MongoDB.
- **Dockerfile**: Docker instructions for building the Fastify app image.
- **LICENSE**: Project license.
- **package.json**: Node.js dependencies and metadata.

## Endpoints

### PostgreSQL Endpoints

- **GET /api/pg/resources**: Retrieve all resources.
- **GET /api/pg/resources/:id**: Retrieve a resource by ID.
- **POST /api/pg/resources**: Create a new resource.
- **PUT /api/pg/resources/:id**: Update a resource by ID.
- **DELETE /api/pg/resources/:id**: Delete a resource by ID.

### MongoDB Endpoints

- **GET /api/mongo/resources**: Retrieve all resources.
- **GET /api/mongo/resources/:id**: Retrieve a resource by ID.
- **POST /api/mongo/resources**: Create a new resource.
- **PUT /api/mongo/resources/:id**: Update a resource by ID.
- **DELETE /api/mongo/resources/:id**: Delete a resource by ID.

### Additional Endpoints

- **Swagger Documentation**: Available at `/api/docs` (requires Basic Authentication).
- **Static Files**:
  - **Root `/`**: Serves `index.html` and other HTML files.
  - **/static/**: Caches static assets for 7 days.

## Nginx Configuration Highlights

- **API Proxying**: `/api` is proxied to the Fastify server, stripping the `/api` prefix.
- **Swagger Documentation**: `/api/docs` endpoint is protected with Basic Authentication.
- **Static Caching**: Files served from `/docs/static/` are cached for 7 days.

## Contributions

Contributions, feedback, and suggestions are welcome. Please submit a pull request or open an issue for any improvements or issues.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
