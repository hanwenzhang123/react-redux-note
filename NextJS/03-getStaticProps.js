page pre-rendering

request - /some-route - return pre-rendered page - good for SEO
                        - hydrate with react code once loaded - page/app is interactive

two forms of pre-rendering
- static-site generation
- server-side rendering

when developer build site for production
when you build for production run the npm run build script

only component files in the pages folder
//write any code that normally only runs in the server
//will not execute on the client site
//will contain full html code that is good for seo during the build process

//data fetching for pre-rendering
export async function getStaticProps(){
  //do something like
  //fetch data from an API / database
  //securely connect to a database - will not reach to the client
  //fetch data from a database via http request
  //return {};    //always need to return an object at the end
  return {
    props: {    //has to a props property that receives via props
      meetups: DUMMY_MEETUPS    //get the data through props, during the build process
    }
    revalidate: 10 //incremental static generation - when data change frequently
              //number of seconds nextJS will wait until regenerate the page for an incoming reuqest
  }
}
