const express = require('express');
const fs = require('fs/promises');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const config = require('./config.json');
require ('dotenv').config();

//Create the mongo client to use
const client = new MongoClient(config.finalUrl);

const app = express();
const port = process.env.PORT;

app.use(express.static('public'));
app.use(bodyParser.json());

//Root route
app.get('/', (req, res) => {
    res.status(300).redirect('/index.html');
});

// Return all comments from the database
app.get('/comments', async (req, res) =>{

    try{
        //connect to the db
        await client.connect();

        //retrieve the comments collection data
        const colli = client.db('Web2Werkstuk').collection('Comments');
        const bgs = await colli.find({}).toArray();

        //Send back the data with the response
        res.status(200).send(bgs);
    }catch(error){
        console.log(error)
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    }finally {
        await client.close();
    }
});

// /comments?id=1234
app.get('/comments', async (req,res) => {
    //id is located in the query: req.query.id
    try{
        //connect to the db
        await client.connect();

        //retrieve the comments collection data
        const colli = client.db('Web2Werkstuk').collection('Comments');

        //only look for a bg with this ID
        const query = { cmtid: req.query.id };

        const comments = await colli.findOne(query);

        if(comments){
            //Send back the file
            res.status(200).send(comments);
            return;
        }else{
            res.status(400).send('Comments could not be found with id: ' + req.query.id);
        }
      
    }catch(error){
        console.log(error);
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    }finally {
        await client.close();
    }
});


// save a comments
app.post('/saveComments', async (req, res) => {

    if(!req.body.cmtid || !req.body.name || !req.body.comments){
        res.status(400).send('Bad request: missing id, name or comments');
        return;
    }

    try{
        //connect to the db
        await client.connect();

        //retrieve the comments collection data
        const colli = client.db('Web2Werkstuk').collection('Comments');

        // Validation for double comments
        const cmnts = await colli.findOne({cmtid: req.body.cmtid});
        if(cmnts){
            res.status(400).send('Bad request: Comments already exists with cmtid ' + req.body.cmtid);
            return;
        } 
        // Create the new Comments object
        let newComment = {
            cmtid: req.body.cmtid,
            name: req.body.name,
            comments: req.body.comments
        }
        
        // Insert into the database
        let insertResult = await colli.insertOne(newComment);

        //Send back successmessage
        res.status(201).send(`Comments succesfully saved with id ${req.body.cmtid}`);
        return;
    }catch(error){
        console.log(error);
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    }finally {
        await client.close();
    }
});

// delete a comments
app.delete('/comments/:id', async (req, res) => {
    try{
        //connect to the db
        await client.connect();

        //retrieve the comments collection data
        const colli = client.db('Web2Werkstuk').collection('Comments');

        const query = {
            _id: ObjectId(req.params.id)
        };

        await collection.deleteOne(query)
        res.status(200).json({
            succes: 'Succesfully deleted!'
        });

    }catch(error){
        console.log(error)
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    }finally {
        await client.close();
    }
});


// update a comments
app.put('/comments/:id', async (req, res) => {

    if(!req.body.cmtid || !req.body.name || !req.body.comments){
        res.status(400).send('Bad request: missing id, name or comments');
        return;
    }

    try{
        //connect to the db
        await client.connect();

        //retrieve the comments collection data
        const colli = client.db('Web2Werkstuk').collection('Comments');

        const query = {
            _id: ObjectId(req.params.id)
        };
 
        // Create the new Comments object
        let updateComment = {
            $set:{
            cmtid: req.body.cmtid,
            name: req.body.name,
            comments: req.body.comments
            }
        }

        const updating = await collection.updateOne(query, updateComment)

        if(updating){
            res.status(201).send(`Comments succesfully saved with id ${req.body.cmtid}`);
            return;
        }else{
            res.status(400).send(`Comments NO succesfully work with id ${req.body.cmtid}`);
            return;
        }
    }catch(error){
        console.log(error);
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    }finally {
        await client.close();
    }
    
    
});

//Universities
app.get('/universities', async (req, res) =>{

    try{
        //connect to the db
        await client.connect();

        //retrieve the universities collection data
        const colli = client.db('Web2Werkstuk').collection('Universities');
        const bgs = await colli.find({}).toArray();

        //Send back the data with the response
        res.status(200).send(bgs);
    }catch(error){
        console.log(error)
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    }finally {
        await client.close();
    }
});

// /Universities?id=1234
app.get('/universities', async (req,res) => {
    //id is located in the query: req.query.id
    try{
        //connect to the db
        await client.connect();

        //retrieve the university collection data
        const colli = client.db('Web2Werkstuk').collection('Universities');

        //only look for a bg with this ID
        const query = { univid: req.query.id };

        const university = await colli.findOne(query);

        if(university){
            //Send back the file
            res.status(200).send(university);
            return;
        }else{
            res.status(400).send('University could not be found with id: ' + req.query.id);
        }
      
    }catch(error){
        console.log(error);
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    }finally {
        await client.close();
    }
});


// save a universities
app.post('/saveUniv', async (req, res) => {

    if(!req.body.univid || !req.body.state-province || !req.body.country || !req.body.web_pages || !req.body.name || !req.body.alpha_two_code || !req.body.domains){
        res.status(400).send('Bad request: missing id, name or universities');
        return;
    }

    try{
        //connect to the db
        await client.connect();

        //retrieve the universities collection data
        const colli = client.db('Web2Werkstuk').collection('Universities');

        // Validation for double universities
        const univ = await colli.findOne({univid: req.body.univid});
        if(univ){
            res.status(400).send('Bad request: universities already exists with univid ' + req.body.univid);
            return;
        } 
        // Create the new Comments object
        let newUniversities = {
            univid: req.body.univid,
            stateprovince: req.body.state-province,
            country: req.body.country,
            webpages: req.body.web_pages,
            name: req.body.name,
            alpha2code: req.body.alpha_two_code,
            domains: req.body.domains
        }
        
        // Insert into the database
        let insertResult = await colli.insertOne(newUniversities);

        //Send back successmessage
        res.status(201).send(`Comments succesfully saved with id ${req.body.univid}`);
        return;
    }catch(error){
        console.log(error);
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    }finally {
        await client.close();
    }
});

// delete a university
app.delete('/university/:id', async (req, res) => {
    try{
        //connect to the db
        await client.connect();

        //retrieve the comments collection data
        const colli = client.db('Web2Werkstuk').collection('Universities');

        const query = {
            _id: ObjectId(req.params.id)
        };

        await collection.deleteOne(query)
        res.status(200).json({
            succes: 'Succesfully deleted!'
        });

    }catch(error){
        console.log(error)
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    }finally {
        await client.close();
    }
});


// update a university
app.put('/university/:id', async (req, res) => {

    if(!req.body.univid || !req.body.state-province || !req.body.country || !req.body.web_pages || !req.body.name || !req.body.alpha_two_code || !req.body.domains){
        res.status(400).send('Bad request: missing id, name or university');
        return;
    }

    try{
        //connect to the db
        await client.connect();

        //retrieve the university collection data
        const colli = client.db('Web2Werkstuk').collection('Universities');

        const query = {
            _id: ObjectId(req.params.id)
        };
 
        // Create the new university object
        let updateComment = {
            $set:{
            univid: req.body.univid,
            stateprovince: req.body.state-province,
            country: req.body.country,
            webpages: req.body.web_pages,
            name: req.body.name,
            alpha2code: req.body.alpha_two_code,
            domains: req.body.domains,
            }
        }

        const updating = await collection.updateOne(query, updateComment)

        if(updating){
            res.status(201).send(`Comments succesfully saved with id ${req.body.univid}`);
            return;
        }else{
            res.status(400).send(`Comments NO succesfully work with id ${req.body.univid}`);
            return;
        }
    }catch(error){
        console.log(error);
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    }finally {
        await client.close();
    }
    
    
});


//Wishlist
app.post('/saveWishlist', async (req, res) => {

    if(!req.body.univid){
        res.status(400).send('Bad request: missing id, name or university');
        return;
    }

    try{
        //connect to the db
        await client.connect();

        //retrieve the university collection data
        const colli = client.db('Web2Werkstuk').collection('Universities');

        // Validation for double university
        const isWishlist = await colli.findOne({univid: req.body.univid});

        if(isWishlist){
            res.status(400).send('Bad request: University already exists with cmtid ' + req.body.univid);
            return;
        } 
        // Create the new Comments object
        let univWishlist = {
            univid: req.body.univid,
            wishlist:true,
        };

        await colli.insertOne(univWishlist);
        
        const query = {
            univid: req.body.univid,
        }

        const university = await colli.find(query).toArray();
        res.status(200).send(university);

        //Send back successmessage
        res.status(201).send(`Comments succesfully saved with id ${req.body.cmtid}`);
        return;
    }catch(error){
        console.log(error);
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    }finally {
        await client.close();
    }
});

app.delete('/wishlist/:id', async (req, res) => {
    try{
        //connect to the db
        await client.connect();

        //retrieve the comments collection data
        const colli = client.db('Web2Werkstuk').collection('Universities');

        const query = {
            _id: ObjectId(req.params.id)
        };

        await collection.deleteOne(query)
        res.status(200).json({
            succes: 'Succesfully deleted!'
        });

    }catch(error){
        console.log(error)
        res.status(500).send({
            error: 'Something went wrong',
            value: error
        });
    }finally {
        await client.close();
    }
});

app.get('/wishlist', async (req, res) => {
    try {
        await client.connect();
        const colli = client.db('Web2Werkstuk').collection('Universities');
        const wishlist = await colli.find({}).toArray();
        res.status(200).send(wishlist);

    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: 'Something went wrong!',
            value: error
        });

    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
})
