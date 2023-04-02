import React, { useEffect } from 'react';
import '../styles/Form.css';
import { FormFields } from '../FormsLayout';

interface UserListProps {
  addToUsersList: (form: FormFields) => void;
}
const Form = ({addToUsersList}: UserListProps) => {

  useEffect (() => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
        event.preventDefault();
        const form = event.currentTarget;
        try {
          props.addToUsersList(form);
        } catch (error) {
          alert(error);
        }
        form.reset();
      };
  }, [])




    return (
      <div className="form__container">
        <form className="form" onSubmit={() => handleSubmit}>
          <div className="form__group">
            <label htmlFor="firstName">
              First Name:
              <input type="text" name="firstName" id="firstName" required />
            </label>
          </div>
          <div className="form__group">
            <label htmlFor="lastName">
              Last Name:
              <input type="text" name="lastName" id="lastName" required />
            </label>
          </div>
          <div className="form__group">
            <label htmlFor="phoneNumber">
              Phone number:
              <input type="number" name="phoneNumber" id="phoneNumber" required />
            </label>
          </div>
          <div className="form__group">
            <label htmlFor="email">
              Email:
              <input type="email" name="email" id="email" required />
            </label>
          </div>
          <div className="form__group">
            <label htmlFor="birthday">
              Birth date:
              <input type="date" name="birthday" id="birthday" required />
            </label>
          </div>
          <div className="form__group">
            <label htmlFor="country">
              Country:
              <select
                className="form__group--country"
                name="country"
                id="country"
                defaultValue="Switzerland"
              >
                <option value="Belgium">Belgium</option>
                <option value="France">France</option>
                <option value="Switzerland">Switzerland</option>
              </select>
            </label>
          </div>
          <div className="form__group">
            <fieldset>
              <legend>Gender:</legend>
              <label htmlFor="male">
                <input type="radio" name="gender" value="male" id="male" defaultChecked />
                male
              </label>
              <label htmlFor="female">
                <input type="radio" name="gender" value="female" id="female" />
                female
              </label>
              <label htmlFor="other">
                <input type="radio" name="gender" value="other" id="other" />
                other
              </label>
            </fieldset>
          </div>
          <div className="form__group">
            <label htmlFor="photo">Photo:</label>
            <input type="file" name="photo" />
          </div>
          <div className="form__group">
            <input type="checkbox" name="agree" required id="agreeCheckbox" />
            <label htmlFor="agree">I agree with using my personal information</label>
          </div>
          <input type="submit" value="Submit" id="submit" />
        </form>
      </div>
    );

}

export default Form;
