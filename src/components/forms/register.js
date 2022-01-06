import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Register = ({ showLogin }) => {
    const [formErorrs, setFormErrors] = useState('');
    const onSubmit = () => {

    }

    return <Form className='m-3' onSubmit={onSubmit}>
        <h2 className='auth-header'>Register</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name='email' placeholder="*Enter email" />
            <Form.Text className="text-muted" >
                <span className='error'></span>
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="text" name='fName' placeholder="*First Name" />
            <Form.Text className="text-muted" >
                <span className='error'></span>
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="text" name='lName' placeholder="*Last Name" />
            <Form.Text className="text-muted" >
                <span className='error'></span>
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="text" name='company' placeholder="*Company Name" />
            <Form.Text className="text-muted" >
                <span className='error'></span>
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" name='password' placeholder="*Password" />
            <Form.Text className="text-muted" >
                <span className='error'></span>
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" name='passwordMatch' placeholder="*Confirm Password" />
            <Form.Text className="text-muted" >
                <span className='error'>{formErorrs}</span>
            </Form.Text>
        </Form.Group>
        <div className='button-container'>
            <Button variant="secondary" onClick={showLogin} className='secondary-button'>
                Login
            </Button>
            <Button variant="primary" type="submit" className='primary-button'>
                Register
            </Button>
        </div>
    </Form>
}


export default Register;