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
  const router = useRouter();
  
  const newId = router.query.newsId;

  console.log(newId); //hello-world;
  
  //send a request to the backend API
  //to fetch the news item with newsId

  return <div>The Detail Page</div>;
}
