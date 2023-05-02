import React, { useEffect } from 'react';
import '../../styles/Form.css';
import { FormFields } from '../FormsLayout';
import { useForm } from 'react-hook-form';

interface UserListProps {
  addToUsersList: (form: FormFields) => void;
}

const Form = ({ addToUsersList }: UserListProps) => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      country: '',
      gender: '',
      photo: '',
    },
    mode: 'onChange',
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
  console.log(errors);
  return (
    <div className="form__container">
      <form className="form" data-testid="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__group">
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              id="firstName"
              data-testid="firstName"
              {...register('firstName', { required: true, minLength: 2 })}
            />
            {errors.firstName && (
              <p className="error-message">
                This field is required and must be at least 2 characters long.
              </p>
            )}
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              id="lastName"
              data-testid="lastName"
              {...register('lastName', { required: true, minLength: 2 })}
            />
            {errors.lastName && (
              <p className="error-message">
                This field is required and must be at least 2 characters long.
              </p>
            )}
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="phoneNumber">
            Phone number:
            <input
              type="tel"
              pattern="[0-9]{7,12}"
              id="phoneNumber"
              data-testid="phoneNumber"
              {...register('phoneNumber', { required: true, pattern: /^\d{7,12}$/i })}
            />
            {errors.phoneNumber && (
              <p className="error-message">
                This field is required and should contain from 7 to 12 numbers.
              </p>
            )}
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              data-testid="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <p className="error-message">Please enter correct email.</p>}
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="birthday">
            Birth date:
            <input
              type="date"
              id="birthday"
              data-testid="birthday"
              {...register('birthday', { required: true })}
            />
            {errors.birthday && (
              <p className="error-message">
                This field is required. Please choose your birth date.
              </p>
            )}
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="country">
            Country:
            <select
              className="form__group--country"
              id="country"
              data-testid="country"
              {...register('country', { required: true })}
            >
              <option value="Belgium">Belgium</option>
              <option value="France">France</option>
              <option value="Switzerland">Switzerland</option>
            </select>
            {errors.country && <p className="error-message">Please select your country.</p>}
          </label>
        </div>
        <div className="form__group">
          <fieldset>
            <legend>Gender:</legend>
            <label htmlFor="male">
              <input
                type="radio"
                {...register('gender', { required: true })}
                value="male"
                id="male"
                data-testid="male"
              />
              male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                {...register('gender', { required: true })}
                value="female"
                id="female"
              />
              female
            </label>
            <label htmlFor="other">
              <input
                type="radio"
                {...register('gender', { required: true })}
                value="other"
                id="other"
              />
              other
            </label>
          </fieldset>
          {errors.gender && <p className="error-message">Please select your gender.</p>}
        </div>
        <div className="form__group">
          <label htmlFor="photo">Photo:</label>
          <input type="file" onChange={handleFileChange} required id="photo" data-testid="photo" />
          {errors.photo && (
            <p className="error-message">This field is required. Download your image file.</p>
          )}
        </div>
        <div className="form__group">
          <input type="checkbox" {...register('agree', { required: true })} id="agreeCheckbox" />
          <label htmlFor="agree">I agree with using my personal information</label>
          {errors.agree && <p className="error-message">Please accept our requirements.</p>}
        </div>
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
};

export default Form;
