export default function Auth({ name, label, type, autoComplete, required }) {
    return (
      <div>
        <label className="landing_signIn_label" id={[name, 'label'].join('-')} htmlFor={[name, 'input'].join('-')} >
          {label} {required ? <span title="Required">*</span> : undefined}
        </label>
        <br />
        <input
          autoComplete={autoComplete}
          id={[name, 'input'].join('-')}
          name={name}
          required={required}
          type={type}
          className="landing_signIn_input"
        />
      </div>
    )
  }