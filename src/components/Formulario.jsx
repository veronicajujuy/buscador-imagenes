import {Formik, Form, Field} from 'formik'
import { useGlobalStates } from '../Context/GlobalContext'


const Formulario = () => {
    const {imagen, fetchImage} = useGlobalStates()
    
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
            <Field name="search" />
          </Form>
        </Formik>
      </header>
      {imagen && imagen.map(item =>
        <div key={item.id}>{item.id}</div>
      )}
     </div>
    )
}

export default Formulario
