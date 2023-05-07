import React, { FormEvent } from 'react';

//Add prevent deafulat property to prevent te default behaviour of the form
const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
