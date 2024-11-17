# Fastify Docker Integration with PostgreSQL and MongoDB

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Endpoints](#endpoints)
- [Contributions](#contributions)
- [License](#license)

## Overview

This project provides a scalable and modular Node.js application using Fastify, integrated with PostgreSQL and MongoDB databases. It includes REST API endpoints for user authentication, product management, cart operations, and receipt generation, all while leveraging Docker and Nginx for deployment.

### Features

- **Modular Architecture**: Domain-driven design with clear separation of concerns.
- **Authentication & Authorization**: JWT-based secure authentication.
- **CRUD Operations**: Full support for CRUD on products, users, and carts.
- **Swagger Documentation**: API documentation with restricted access.
- **Dockerized Deployment**: Fastify, PostgreSQL, MongoDB, and Nginx in Docker containers.
- **Development Tools**: Pre-configured ESLint, Prettier, and Husky for linting and code formatting.
- **Testing**: Unit tests for domain services and performance testing using Autocannon.

## Usage

### Setup and Deployment

1. **Install Dependencies**:
   Ensure Docker, Docker Compose, and PNPM are installed.

2. **Clone the Repository**:

   ```bash
   git clone https://github.com/sangariusss/node-fastify-docker-integration.git
   cd node-fastify-docker-integration
   ```

3. **Configure Environment Variables**: Copy `example.env` to `.env` and configure necessary variables.

4. **Run the Application**:

   ```bash
   docker-compose up --build
   ```

5. **Access the Application**:

   - https://localhost: Serves the static site.
   - https://localhost/api: REST API.
   - https://localhost/api/docs: Swagger documentation.

## File Structure

### Root Structure

```plaintext
.husky/                 # Git hooks for pre-commit checks
.vscode/                # VSCode configuration
html/                   # Static HTML files for Nginx
nginx/                  # Nginx configuration and SSL setup
node_modules/           # Dependencies
src/                    # Source code (modular structure)
static/                 # Static assets (e.g., favicon)
.dockerignore           # Files to ignore in Docker context
.editorconfig           # Editor configuration
.env                    # Environment variables
.prettierrc             # Prettier configuration
package.json            # Node.js dependencies and scripts
README.md               # Project documentation
```

### `src/` Structure

```plaintext
src/
  app/                  # Core application logic
    actions/            # Business logic (grouped by domain)
    context.js          # Application-wide context
    global.d.ts         # Global TypeScript definitions
  domain/               # Domain models and interfaces
    entities/           # Entity definitions
    repositories/       # Repository interfaces
    services/           # Domain services
  infra/                # Infrastructure layer
    database/           # Database configuration
    repositories/       # Implementations of repository interfaces
  presentation/         # Presentation layer (routes, middleware, etc.)
    auth/               # Authentication-related logic
    routes/             # Route handlers
    docs/               # Swagger API documentation
    context/            # Request/response context utilities
  static/               # Static assets
```

### Key Files

- `app.js`: Main Fastify application file.
- `docker-compose.yaml`: Service definitions for Docker.
- `Dockerfile`: Fastify application Docker build file.
- `config.js`: Application configuration.
- `server.js`: Server entry point.

## Endpoints

### Authentication

- `POST /api/auth/sign-up`: Register a new user.
- `POST /api/auth/sign-in`: Authenticate a user.
- `POST /api/auth/refresh`: Refresh an authentication token.
- `POST /api/auth/log-out`: Log out a user.

### Products

- `GET /api/products`: List all products.
- `POST /api/products`: Create a product.
- `PUT /api/products/{id}`: Update a product.
- `DELETE /api/products/{id}`: Delete a product.

### Cart

- `GET /api/user/cart`: View cart contents.
- `POST /api/user/cart`: Add a product to the cart.
- `DELETE /api/user/cart/{productId}`: Remove a product from the cart.
- `POST /api/user/cart/checkout`: Checkout the cart.

### Receipts

- `GET /api/user/receipts`: List user receipts.
- `GET /api/user/receipts/{receiptId}`: View a specific receipt.

## Load Testing

The project includes a load testing script using Autocannon. The following routes are tested:

### Test Configurations

- **Login Test**:

  - URL: `POST /api/auth/sign-in`
  - Payload: `{ username: 'testuser', password: 'password123' }`
  - Connections: 100
  - Duration: 30 seconds

- **Registration Test**:

  - URL: `POST /api/auth/sign-up`
  - Payload: `{ username: 'newuser', password: 'password123' }`
  - Connections: 100
  - Duration: 30 seconds

- **Protected Route Test**:

  - URL: `POST /api/auth/log-out`
  - Connections: 100
  - Duration: 30 seconds

- **Static Route Test**:
  - URL: `GET /index.html`
  - Connections: 50
  - Duration: 15 seconds

### Running Load Tests

To run the load tests, execute the following script:

```bash
node tests/load/authRoutes.js
```

This will initiate load tests for all the configured routes and log the results to the console.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request to suggest improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
