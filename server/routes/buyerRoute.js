const express = require('express');
const buyer = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verifyToken');
const { ObjectId } = require('mongodb');

// Register buyer
buyer.post('/register', async (req, res) => {
    let userObj = req.body;
    const buyer = req.app.get('buyer');
    const user = await buyer.findOne({ email: userObj.email });
    if (user === null) {
        userObj.password = await bcrypt.hash(userObj.password, 10);
        await buyer.insertOne(userObj);
        res.status(200).send({ message: 'User Registered Successfully!' });
    } else {
        res.status(201).send({ message: 'User Already Exists!' });
    }
});

// Login buyer
buyer.post('/login', async (req, res) => {
    let userObj = req.body;
    const buyer = req.app.get('buyer');
    const user = await buyer.findOne({ email: userObj.email });
    if (user === null) {
        res.status(201).send({ message: 'User is not Registered' });
    } else {
        let isPass = await bcrypt.compare(userObj.password, user.password);
        if (isPass) {
            let token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '360000000' });
            res.status(200).send({ message: 'User Logged in Successfully!', token, payload: user });
        } else {
            res.status(201).send({ message: 'Password is Incorrect' });
        }
    }
});

// Rents
buyer.get('/rents', verifyToken, async (req, res) => {
    const housesCollection = req.app.get('houses');
    const houses = await housesCollection.find({}).toArray();
    res.status(200).send({ message: 'Rents fetched successfully', payload: houses });
});

// Seller Details by ID
buyer.get('/sellerDetails/:id', verifyToken, async (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send({ message: 'Invalid ID format' });
    }
    const sellerCollection = req.app.get('seller');
    const seller = await sellerCollection.findOne({ _id: new ObjectId(id) });
    if (!seller) {
        return res.status(404).send({ message: 'Seller not found' });
    }
    res.status(200).send({ message: 'Seller details fetched successfully', payload: seller });
});

// Profile
buyer.get('/profile', verifyToken, async (req, res) => {
    const buyer = req.app.get('buyer');
    const email = req.res.locals.decode.email;
    const user = await buyer.findOne({ email });
    res.status(200).send({ message: 'User Profile', payload: user });
});

module.exports = buyer;
