import './Error.css';

const Error = ({ errorMsg }) => {
  return (
    <div className='Error'>{ errorMsg }</div>
  )
}

export default Error