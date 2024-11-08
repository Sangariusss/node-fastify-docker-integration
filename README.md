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

### Products Endpoints

- **GET /api/products**: Retrieve all products.
- **GET /api/products/:id**: Retrieve a product by ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update a product by ID.
- **DELETE /api/products/:id**: Delete a product by ID.

### User Cart Endpoints

- **GET /api/user/cart**: Retrieve the user's cart.
- **POST /api/user/cart**: Add a product to the cart.
- **DELETE /api/user/cart/:id**: Remove a product from the cart.
- **POST /api/user/cart/checkout**: Checkout the cart and create a receipt.

### User Endpoints

- **GET /api/user/:id**: Retrieve a user by ID.
- **POST /api/user**: Create a new user.
- **GET /api/user/receipts**: Retrieve all receipts for the user.
- **GET /api/user/receipts/:id**: Retrieve a receipt by ID.

### Receipts Endpoints

- **GET /api/user/receipts/:id**: Retrieve a receipt by ID.
- **GET /api/user/receipts**: Retrieve a list of receipts.

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
