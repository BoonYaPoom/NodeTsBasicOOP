import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

// Swagger configuration options
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API documentation for your Express app',
        },
        servers: [
            {
                url: 'http://localhost:3000', // URL ของ API ของคุณ
            },
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        user_id: {
                            type: 'integer',
                            example: 1
                        },
                        username: {
                            type: 'string',
                            example: 'john_doe'
                        },
                        password: {
                            type: 'string',
                            example: 'password123'
                        },
                        status: {
                            type: 'string',
                            example: 'active'
                        },
                        date: {
                            type: 'string',
                            format: 'date',
                            example: '2024-08-07'
                        }
                    },
                    required: ['user_id', 'username', 'password', 'status', 'date']
                }
            }
        }
    },
    apis: ['./src/routes/route/*.ts'], // Path ที่มีการเขียน API documentation
};

const specs = swaggerJsdoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
