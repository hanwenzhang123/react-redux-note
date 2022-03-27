//Adding Nested Pages
//Creating Dynamic Pages 

/pages - file based routing
        [].js   - dynamic identifier
        path.js - our-domain.com/path
        /news/details.js  - our-domain.com/news/details/
/public - public resources
/styles - styles


//NextJS suppports modern react setup, will be added befind the scene so no need import React


//Extracting Dynamic Route Data

/news/[newsID].js
domain.js/news/hello-world

import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();           //contain the parameter in the route
  // const { id } = router.query
  
  const newId = router.query.newsId;

  console.log(newId); //hello-world;
  
  //send a request to the backend API
  //to fetch the news item with newsId

  return <div>The Detail Page</div>;
}


//Linking Between Pages
import Link from "next/link"; //stay on the same page -  single page application
import { Fragment } from "react";

export default function index() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NextJS is a great framework</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

//if we just use a tag, not the link, which sends a new request to the backend, fetch a new html page, whenever the user navigates around
//we can use Link from next to stay on the same page within SPA

  
