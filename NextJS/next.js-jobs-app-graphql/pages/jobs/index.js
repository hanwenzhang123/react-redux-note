import JobCard from '../../components/JobCard';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_JOBS } from '../../graphql/queries';

const Jobs = ({ jobList }) => {
  return (    
    <div className="jobs">
      {jobList.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
    </div>
  )
}

export const getStaticProps = async () => {

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({ query: GET_ALL_JOBS });

  return {
    props: {
      jobList: data.jobs
    }
  }
}

export default Jobs;
