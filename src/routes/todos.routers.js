const Router = require ('express')
const { createNewTodo, getTodosByUserCategory, updateStatusCompleted, deleteTodos } = require('../controllers/todos.controllers')

const router = Router()

router.post('/todo', createNewTodo)
router.get('/todo/user/:id', getTodosByUserCategory)
router.put('/todo/user/:userId', updateStatusCompleted)
router.delete('/todo/:id', deleteTodos)

module.exports = router;