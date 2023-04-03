import React, { useEffect } from 'react';
import '../styles/Form.css';
import { FormFields } from '../FormsLayout';
import { useForm } from 'react-hook-form';

interface UserListProps {
  addToUsersList: (form: FormFields) => void;
}

const Form = ({ addToUsersList }: UserListProps) => {
  const { register, reset, handleSubmit, setValue, formState } = useForm<FormFields>({
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      country: 'Switzerland',
      gender: '',
      photo: '',
    },
  });

  const onSubmit = (form: FormFields) => {
    try {
      addToUsersList(form);
    } catch (error) {
      alert(error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const url = file ? URL.createObjectURL(file) : '';
    setValue('photo', url);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__group">
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              {...register('firstName', {
                required: 'this field is required',
              })}
              id="firstName"
            />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              {...register('lastName', {
                required: 'this field is required',
              })}
              id="lastName"
            />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="phoneNumber">
            Phone number:
            <input
              type="tel"
              pattern="[0-9]{7,12}"
              {...register('phoneNumber', {
                required: 'this field is required',
              })}
              id="phoneNumber"
            />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              {...register('email', {
                required: 'this field is required',
              })}
              id="email"
            />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="birthday">
            Birth date:
            <input
              type="date"
              {...register('birthday', {
                required: 'this field is required',
              })}
              id="birthday"
            />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="country">
            Country:
            <select
              className="form__group--country"
              {...register('country', {
                required: 'this field is required',
              })}
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
              <input
                type="radio"
                {...register('gender', {
                  required: 'this field is required',
                })}
                value="male"
                id="male"
                defaultChecked
              />
              male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                {...register('gender', {
                  required: 'this field is required',
                })}
                value="female"
                id="female"
              />
              female
            </label>
            <label htmlFor="other">
              <input
                type="radio"
                {...register('gender', {
                  required: 'this field is required',
                })}
                value="other"
                id="other"
              />
              other
            </label>
          </fieldset>
        </div>
        <div className="form__group">
          <label htmlFor="photo">Photo:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <div className="form__group">
          <input
            type="checkbox"
            {...register('agree', {
              required: 'this field is required',
            })}
            id="agreeCheckbox"
          />
          <label htmlFor="agree">I agree with using my personal information</label>
        </div>
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
};

export default Form;
