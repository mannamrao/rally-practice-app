import React, { useRef, MutableRefObject, FormEvent, useContext, useEffect } from 'react';
import './signin.css';
import useForm from '../../hooks/useForm';
import { post } from '../../services/http';
import { AppContext } from '../../contexts/app.context';
import { useHistory } from 'react-router-dom';

const Signin = () => {
  const history = useHistory();
  const appContext = useContext(AppContext);
  const formRef: MutableRefObject<HTMLFormElement|null> = useRef(null);
  const {form, updateForm} = useForm({});

  useEffect(() => {
    if (appContext.user) {
      history.push('/medicos');
    }
  }, []);

  const register = (event: FormEvent) => {
    event.preventDefault();

    const formElement = formRef.current;
    if (formElement) {
      post('signin', {...form}).then((res: {}) => {        
        appContext.update('user', res);
        const user = btoa(JSON.stringify(res));
        localStorage.setItem('user', user);
        history.push('/medicos');
        
      });
    } else {
      alert('Entered datails are not valid.')
    }
  };

  return <div className="main">
      <p className="sign">LOGIN</p>
      <form ref={formRef} className="form1">
          <input onInput={updateForm} className="tb" type="text" name="firstName"  placeholder="Name" />
          <input onInput={updateForm} className="tb" type="text"  name="email"  placeholder="Email" />
          <input onInput={updateForm} className="tb" type="password"  name="password"  placeholder="Password" />
          <a onClick={register} className="submit">Signin</a>
      </form>
    </div>
};

export default Signin;
