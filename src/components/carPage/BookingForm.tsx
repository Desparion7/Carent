import { Formik, Form, Field, FormikHelpers } from 'formik';
import { UserBookingInfo } from '../../interface/message-interface';
import styles from './BookingForm.module.scss';
import { useBookCarMutation } from '../../app/slices/carsApiSlice';

interface BookingPropsType {
  carId: string;
  dateIsSelectedError: boolean;
  pickupDate: string;
  returnDate: string;
  setNoDateError: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookingForm = ({
  dateIsSelectedError,
  carId,
  pickupDate,
  returnDate,
  setNoDateError,
}: BookingPropsType) => {
  const [bookCar, { isLoading, isError, isSuccess }] = useBookCarMutation();

  // Function to validate form
  const validateForm = (values: UserBookingInfo) => {
    const errors: Partial<UserBookingInfo> = {};

    if (!values.name) {
      errors.name = 'field require';
    }
    if (!values.surname) {
      errors.surname = 'field require';
    }
    if (!values.phone) {
      errors.phone = 'field require';
    }
    return errors;
  };

  const handleBookCar = async (
    values: UserBookingInfo,
    actions: FormikHelpers<UserBookingInfo>
  ) => {
    if (!pickupDate || !returnDate) {
      setNoDateError(true);
      return;
    }
    await bookCar({
      carId,
      pickupDate,
      returnDate,
      name: values.name,
      surname: values.surname,
      phone: values.phone,
    });
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <div className={styles.bookingForm}>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          phone: '',
        }}
        validate={validateForm}
        onSubmit={handleBookCar}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.userData}>
              <label htmlFor="name">Name:</label>
              <Field
                type="text"
                id="name"
                name="name"
                className={errors.name && touched.name && styles.errorInput}
                placeholder={errors.name && touched.name ? errors.name : ''}
              />
            </div>
            <div className={styles.userData}>
              <label htmlFor="surname">Surname:</label>
              <Field
                type="text"
                id="surname"
                name="surname"
                className={
                  errors.surname && touched.surname && styles.errorInput
                }
                placeholder={
                  errors.surname && touched.surname ? errors.surname : ''
                }
              />
            </div>
            <div className={styles.userData}>
              <label htmlFor="phone">Phone:</label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                className={errors.phone && touched.phone && styles.errorInput}
                placeholder={errors.phone && touched.phone ? errors.phone : ''}
              />
            </div>
            {isSuccess && <p>Car booked.</p>}
            {isError && (
              <p>
                Something goes wrong! Please try again or book car through
                phone.
              </p>
            )}
            <button
              className="button"
              type="submit"
              disabled={dateIsSelectedError || Object.keys(errors).length > 0}
            >
              Book Car
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
