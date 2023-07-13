import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';
import styles from './ContactForm.module.scss';
import {
  MessageFormValues,
  MessageFormValuesError,
} from '../../interface/message-interface';
import useSendMessageMutation from '../../app/slices/messageApiSlice';
import LoadingSpinner from '../ui/LoadingSpinner';

const ContactForm = () => {
  const [sendMessage, { isLoading, isSuccess, isError }] =
    useSendMessageMutation();

  // Function to validate form
  const validateForm = (values: MessageFormValues) => {
    const errors: Partial<MessageFormValuesError> = {};

    if (!values.name) {
      errors.name = 'field require';
    }
    if (!values.surname) {
      errors.surname = 'field require';
    }
    if (!values.email) {
      errors.email = 'field require';
    }
    if (!values.message) {
      errors.message = 'field require';
    }
    if (!values.consent) {
      errors.consent = 'For send message is required to accept statute.';
    }
    return errors;
  };
  const sendMessageHandler = async (
    values: MessageFormValues,
    actions: FormikHelpers<MessageFormValues>
  ) => {
    await sendMessage({ ...values });
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <div className={styles.contactForm}>
      <h3>Have a question? Write to us or just call.</h3>
      <h3>TEL: 796 390 226</h3>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          phone: '',
          message: '',
          consent: false,
        }}
        validate={validateForm}
        onSubmit={sendMessageHandler}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name">Name and</label>{' '}
              <label htmlFor="surname">
                surname <span>*</span>
              </label>
            </div>
            <div className={styles.contactForm__name}>
              <div>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={errors.name && touched.name && styles.errorInput}
                  placeholder={
                    errors.name && touched.name ? errors.name : 'Name'
                  }
                />
              </div>
              <div>
                <Field
                  type="text"
                  id="surname"
                  name="surname"
                  className={
                    errors.surname && touched.surname && styles.errorInput
                  }
                  placeholder={
                    errors.surname && touched.surname
                      ? errors.surname
                      : 'Surname'
                  }
                />
              </div>
            </div>
            <label htmlFor="email">
              Email:<span>*</span>
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className={errors.email && touched.email && styles.errorInput}
              placeholder={errors.email && touched.email ? errors.email : ''}
            />

            <label htmlFor="phone">Phone:</label>
            <Field type="tel" id="phone" name="phone" />
            <label htmlFor="message">
              Your message:<span>*</span>
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              className={errors.message && touched.message && styles.errorInput}
              placeholder={
                errors.message && touched.message ? errors.message : ''
              }
            />
            <p>
              <Field type="checkbox" id="consent" name="consent" />{' '}
              <span>*</span>I consent to the processing of my personal data for
              the purpose respond to my inquiry in accordance with the policy
              privacy.
            </p>
            <ErrorMessage
              name="consent"
              component="div"
              className={styles.errorText}
            />
            <div>
              <button type="submit" className="button">
                {isLoading ? <LoadingSpinner /> : 'Send'}
              </button>
            </div>
            {isSuccess && (
              <div className={styles.successSendMessage}>
                Message send correctly. We will answer as soon as possbile.
              </div>
            )}
            {isError && (
              <div className={styles.errorSendMessage}>
                Failed to send message. Please try again or send a message
                directly by e-mail:: <span>carent@yourcar.com</span>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
