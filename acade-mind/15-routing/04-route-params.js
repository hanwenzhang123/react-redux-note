//Adding Dynamic Routes with Params
//App.js
<Route path="/product-detail/:productId">
    <ProductDetail />
</Route>

 : is a dynamic path segments.
It tell React Router that the overall path for which this page should be loaded will be something like this:
our-domain.com/product-detail/{anything}
After the colon can be any value, it is a placeholder.

//Extracting Route Params
//pages/ProductDetail.js
import { useParams } from 'react-router-dom';   //import the custom hook "useParams"

const ProductDetail = () => {
  const params = useParams();  //call it and store it to the params

  console.log(params.productId);  //We used ":productId" as the key for the dynamic path segment, so it will prints out the value in URL

// <Route path="/product-detail/:productId"> <ProductDetail> </Route> - the path we have in App.js
    
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
