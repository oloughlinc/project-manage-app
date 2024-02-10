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
 *          
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - comments
 *         - completed
 *         - personAssigned
 *         - dueDate
 *         - size
 *         - project
 *       properties:
 *         title:
 *           type: string
 *           description: The title of this project
 *         comments:
 *           type: string
 *           description: Any comments attached to the task
 *         completed:
 *           type: boolean
 *           description: True if completed
 *         personAssigned:
 *           type: string
 *           description: The person assigned to this project
 *         dueDate:
 *           type: string
 *           description: Task due date
 *         size:
 *           type: integer
 *           description: Fibonacci story size for this task
 *         project:
 *           type: integer
 *           description: The project this task is assigned to
 *       example:
 *         title: Eat more pizza
 *         comments: anything
 *         completed: false
 *         personAssigned: Debbie Downer
 *         dueDate: 2024-03-06
 *         size: 13
 *         project: 1
 *         
 *          
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - username
 *         - password
 *         - role
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user.
 *         username:
 *           type: string
 *           description: The username of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 *         role:
 *           type: string
 *           description: The role of the user.
 *       example:
 *         name: Alice Smith
 *         username: Alice@wanderers.com
 *         password: deadduck
 *         role: worker
 */

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: API endpoints for managing projects
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: API endpoints for managing tasks
 */

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: API endpoints for managing authentication
 */

/**
 * @swagger
 * /api/projects:
 *   get:
 *     tags: [Projects]
 *     summary: Get all projects
 *     responses:
 *       200:
 *         description: An array of projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     tags: [Projects]
 *     summary: Get a project by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the project to get
 *     responses:
 *       200:
 *         description: A single project
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Project not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Project not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /api/projects:
 *   post:
 *     tags: [Projects]
 *     summary: Create a new project
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       200:
 *         description: The created project
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier for the project.
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     tags: [Tasks]
 *     summary: Get all tasks
 *     responses:
 *       200:
 *         description: An array of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     tags: [Tasks]
 *     summary: Get a task by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the task to get
 *     responses:
 *       200:
 *         description: A single task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Task not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Task not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     tags: [Tasks]
 *     summary: Create a new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the task.
 *               description:
 *                 type: string
 *                 description: The description of the task.
 *               completed:
 *                 type: boolean
 *                 description: Indicates whether the task is completed.
 *               personAssigned:
 *                 type: string
 *                 description: The person assigned to the task.
 *               dueDate:
 *                 type: string
 *                 format: date
 *                 description: The due date of the task in ISO format (e.g., "2024-02-28T00:00:00.000Z").
 *               size:
 *                 type: number
 *                 description: The size of the task.
 *               project:
 *                 type: number
 *                 description: The ID of the project associated with the task.
 *           example:
 *             title: Example Task
 *             description: This is an example task.
 *             completed: false
 *             personAssigned: John Doe
 *             dueDate: 2024-02-28T00:00:00.000Z
 *             size: 3
 *             project: 1
 *     responses:
 *       200:
 *         description: The created task
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier for the task.
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /api/tasks:
 *   put:
 *     tags: [Tasks]
 *     summary: Update a task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The unique identifier for the task to be updated.
 *               update:
 *                 type: object
 *                 description: The fields to be updated for the task.
 *           example:
 *             id: 12345
 *             update:
 *               title: Updated Title
 *               description: Updated description
 *               completed: true
 *     responses:
 *       200:
 *         description: The updated task
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier for the task.
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Authentication]
 *     summary: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password of the user.
 *           example:
 *             username: exampleUser
 *             password: examplePassword
 *     responses:
 *       200:
 *         description: User authenticated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       403:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid Credentials
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */