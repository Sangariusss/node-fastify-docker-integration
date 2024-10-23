const fastify = require('fastify')({ logger: true });

const resources = [];
let currentId = 1;

// Schema for validating resource data
const resourceSchema = {
    type: 'object',
    required: ['name', 'description'], // Required fields for the resource
    properties: {
        name: { type: 'string' }, // Name of the resource
        description: { type: 'string' }, // Description of the resource
    },
};

// GET /api/resources
fastify.get('/api/resources', async (request, reply) => {
    return resources; // Return all resources
});

// GET /api/resources/:id
fastify.get('/api/resources/:id', async (request, reply) => {
    const resource = resources.find(r => r.id === parseInt(request.params.id));
    if (!resource) {
        return reply.status(404).send({ message: 'Resource not found' });
    }
    return resource; // Return the found resource
});

// POST /api/resources
fastify.post('/api/resources', {
    schema: {
        body: resourceSchema, // Validate request body against the schema
    },
}, async (request, reply) => {
    const newResource = { id: currentId++, ...request.body }; // Create new resource
    resources.push(newResource); // Add new resource to the list
    return reply.status(201).send(newResource); // Return 201 status and the new resource
});

// PUT /api/resources/:id
fastify.put('/api/resources/:id', {
    schema: {
        body: resourceSchema, // Validate request body against the schema
    },
}, async (request, reply) => {
    const index = resources.findIndex(r => r.id === parseInt(request.params.id));
    if (index === -1) {
        return reply.status(404).send({ message: 'Resource not found' });
    }
    resources[index] = { id: parseInt(request.params.id), ...request.body }; // Update the existing resource
    return resources[index]; // Return the updated resource
});

// DELETE /api/resources/:id
fastify.delete('/api/resources/:id', async (request, reply) => {
    const index = resources.findIndex(r => r.id === parseInt(request.params.id));
    if (index === -1) {
        return reply.status(404).send({ message: 'Resource not found' });
    }
    resources.splice(index, 1); // Remove the resource from the list
    return reply.status(204).send(); // Return 204 status indicating no content
});

// Start the server
const start = async () => {
    try {
        await fastify.listen(3000, '0.0.0.0');
        fastify.log.info(`Server listening on http://0.0.0.0:3000`); // Log server startup
    } catch (err) {
        fastify.log.error(err); // Log error if server fails to start
        process.exit(1);
    }
};

start();
