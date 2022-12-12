const FormRow = ({ type, name, value, handleChange, labelText,min,max }) => {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className='form-input'
          min={Number(min)}
          max={Number(max)}
        />
      </div>
    )
  }
  
  export default FormRow