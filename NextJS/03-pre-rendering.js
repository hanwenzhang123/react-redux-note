Page Pre-rendering
//data fetching for pre-rendering

request - /some-route - return pre-rendered page - good for SEO
                        - hydrate with react code once loaded - page/app is interactive

two forms of pre-rendering
- static-site generation: getStaticProps()
- server-side rendering: getServerSideProps() 

when developer build site for production
when you build for production run the npm run build script

only component files in the pages folder
//write any code that normally only runs in the server
//will not execute on the client site
//will contain full html code that is good for seo during the build process


1. getStaticProps(){}
//when you do not have data that change multiple times every second
//and no needs access to request object like authentication
export async function getStaticProps(){
  //do something like
  //fetch data from an API / database
  //securely connect to a database - will not reach to the client
  //fetch data from a database via http request
  //return {};    //always need to return an object at the end
  
  return {     //about getting the props for this page component
    props: {    //has to a props property that receives via props
      meetups: DUMMY_MEETUPS    //get the data through props, during the build process
    }
    revalidate: 10 //incremental static generation - when data change frequently
              //number of seconds nextJS will wait until regenerate the page for an incoming reuqest
  }
}


2. getServerSideProps(){}
//pre-generated for every incoming request
//will not run building, but instead always on the server after deployment
//only run server, not run on the client
export async function getServerSideProps(context){  //context parameter that you will receive
  const req = context.req;
  const res = context.res;
  
  //do something like fetch data from an API / database
  
  return {
    props: {   //about getting the props for this page component
      meetups: DUMMY_MEETUPS 
    }
     //runs for every incoming request anyway so no needs for revalidate
  }
}
 
 
3. getStaticPaths(){} 
//only needs when use getStaticProps
export async function getStaticPaths(){
  return {
    fallback: false , //boolean, false: contain all supported path, or true: some pre-generated pages
    path: [
      {params: {  //params is must
         
      }}  //one object per version of this dynamic page
       //if you have multiple dynamic segments, then you would have multiple keys in this nested object
    ]
  }
} 

export async function getStaticProps(context){ //context parameter will not hold req and res
  //fetch data for a single meetup
  //context.params => an object
  //identifiers between square brackets will be properties
  //values will be the actual values encoded in the url
  
  const meetupId = context.params.meetupId; //pre-generated during the build process
  
  return({
    props: {
      meetupData: {
        
      }
    }
  })
}
