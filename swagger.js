/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - teamSize
 *         - budget
 *         - workload
 *       properties:
 *         id:
 *           type: integer
 *           description: The assigned id of this project
 *         title:
 *           type: string
 *           description: The title of the project
 *         teamSize:
 *           type: integer
 *           description: The size of the team assigned to this project
 *         budget:
 *           type: integer
 *           description: The monetary budget allocated to this project, in USD
 *         workload:
 *           type: string
 *           description: The t-shirt size workload for this project. One of Extra Small, Small, Medium, Large, Extra Large
 *       example:
 *         id: 6
 *         title: Create a software that translates cat meows into human language
 *         teamSize: 3
 *         budget: 50000
 *         workload: Large
 */

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /books:
 *   post:
 *     summary: Create a new book
 *     tags: [Project]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 *
 */