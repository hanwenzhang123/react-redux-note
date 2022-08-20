yarn add formik
yarn add yup  //data validation

improt {useFormik} from "useFormik"
import * as Yup from "yup"

const formik = useFormik({    //initial
  initialValues: {
    firstName:"",
    lastName:"",
    email:""
  },
  validationSchema: Yup.object({    //data validation
    firstName: Yup.string()
      .max(15, "Must be 15 character or less")    //error message
      .required("Required"),    //error message
  }),
  onSubmit: (values) => {
    console.log(values)
  }
})

<form onSubmit={formik.handleSubmit}>

<input 
  id="firstName"
  name="firstName"
  type="text"
  onChange={formik.handleChange}    //will be based on the name of the input
  value={formik.values.firstName} 
/>
{formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}   //display error

<button type="submit">Submit</button>

</form>

//we can get rid of useState for two way binding
