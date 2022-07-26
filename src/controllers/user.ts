import { get as getUsers, set as setUser, update as updateUser, remove as removeUser } from '../service/User'
import express from 'express'

const router = express.Router()

// get all users
router.get('/', async (req, res, next) => {
    try {
        const users = await getUsers()
        res.send(users);
    } catch(e) {
        next(e)
    }
})

// set new user
router.post('/', async (req, res, next) => {
    try {
        const user = await setUser(req.body)
        res.status(200).send(user)
    } catch (e) {
        next(e)
    }
})

// update new user
router.put('/', async (req, res, next) => {
    try {
        const user = await updateUser(req.body)
        res.status(200).send(user)
    } catch (e) {
        next(e)
    }
})

// update new user
router.delete('/', async (req, res, next) => {
    try {
        const user = await removeUser(req.body)
        res.status(200).send(user)
    } catch (e) {
        next(e)
    }
})

export default router