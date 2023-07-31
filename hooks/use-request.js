import axios from "axios";
import { useState } from "react";


const UseRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    setErrors(null);
    try {
      const { data } = await axios[method](url, body);

      if (onSuccess) onSuccess(data);

      return data;
    } catch (error) {
      setErrors(
        <div className='alert alert-danger'>
          <h4>Ooops...</h4>
          <ul className='my-0'>
            {error.response.data.errors.map(err => <li key={err.message}>{err.message}</li>)}
          </ul>
        </div>
      )
    }
  };


  return { doRequest, errors }
}

export default UseRequest;

