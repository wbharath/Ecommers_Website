const FormCheckbox = ({label, name, defaultValue, size}) => {
  return (
    <>
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer item flex flex-col items-center">
      <span className="label-text capitalize">{label}</span>
      <input 
      type="checkbox"
      name={name}
      defaultChecked={defaultValue}
      className={`checkbox checkbox-primary mt-2 ${size}`} />
      </label>
    </div>
    </>
  )
}
export default FormCheckbox
