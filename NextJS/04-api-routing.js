API routes
- do not return html code but which are instead about accepting incoming http reuqests
- also post put delete request whatever you need with json data attached to them
- do things you need like return storing data in database or return json data

API routes allows you to build your own API endpoints
endpoints that can be targeted by requests, receive json and return json

/pages/api  -> folder name has to be api, and folder has to be in pages
file name need to be the path segments in the url, where will defind function for backend code

/pages/api/new-meetup.js
import { MongoClient } from "mongodb";  //the object that allows us to connect

async function handler(req, res) {  //usually called handler
  //req.method //find out what kind of request
  if(req.method === "POST") {
     const data = req.body;
    
     const {title, image, address, description} = data; //no need the destructuring
    
    //mongodb setup
    const client = await MongoClient.connect("{string}");
    const db = client.db;
    
    const meetupCollection = db.collection("meetups");
    
    const result = await meetupsCollection.insertOne(data);
    
    client.close();
    
    res.status(201).json({message: "meetup inserted"}); //return the response message when 201 success
    
   }
}

export default handler;

/pages/new-meetup.js
//our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

function NewMeetupPage() {
  useRouter();
  
  async function addMeetupHandler(enteredMeetupData){
    const response = await fetch("/api/new-meetup", {    //usually fetch the http url api, here just absolute path without file extension
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      header: {
        "content-type": "application/json"
      }
    });
    
    const data = await response.json();
    
    console.log(data);
    
    router.push("/");   //push to the home page after adding the meetup
  }
  
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;



