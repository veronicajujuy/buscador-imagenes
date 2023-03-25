import {Formik, Form, Field} from 'formik'
import { useGlobalStates } from '../Context/GlobalContext'


const Formulario = () => {
    const {fetchImage} = useGlobalStates()

    return (
     <div>
      <header>
        <Formik
          initialValues={{search:""}}
          onSubmit={(values) =>
            fetchImage(values)
          }
        >
          <Form>
            <label>Busqueda: </label>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
      
     </div>
    )
}

export default Formulario
