import { closePaymentModal, useFlutterwave } from 'flutterwave-react-v3';
import { useEffect, useState } from 'react';

const PaymentForm: React.FC<{ isClosed: boolean }> = ({ isClosed }) => {
  const [error, setError] = useState('');
  const [empty, setEmpty] = useState(false);
  const [isPaymentMade, setIsPaymentMade] = useState(false);

  const [values, setValues] = useState({
    amount: 0,
    name: '',
    phone_number: '',
    email: '',
  });

  const config = {
    public_key: '',
    tx_ref: Date.now().toString(),
    amount: values.amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      name: values.name,
      phone_number: values.phone_number,
      email: values.email,
    },
    customizations: {
      title: 'John & Wife',
      description: 'Send cash gift to John & Wife',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleFlutterPayment = useFlutterwave(config);

  const isFormInvalid =
    Number(values.amount) === 0 ||
    values.email === '' ||
    values.name === '' ||
    values.phone_number === '';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPaymentMade(false);

    if (isFormInvalid) {
      setEmpty(true);
      setError('Please fill all fields');
    } else {
      setEmpty(false);
      setError('');
      handleFlutterPayment({
        callback: response => {
          if (response.status === 'completed') {
            setIsPaymentMade(true);
            setValues({
              ...values,
              name: '',
              email: '',
              phone_number: '',
              amount: 0,
            });
          }
          closePaymentModal();
        },
        onClose: () => {
          console.log('close');
        },
      });
    }
  };

  useEffect(() => {
    if (isClosed) {
      setEmpty(false);
      setError('');
      setIsPaymentMade(false);
      setValues({
        name: '',
        email: '',
        phone_number: '',
        amount: 0,
      });
    }
  }, [isClosed]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          autoComplete="name"
          className="form-control"
          id="name"
          minLength={3}
          name="name"
          onChange={handleChange}
          placeholder="e.g John Doe"
          required
          type="text"
          value={values.name}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          autoComplete="email"
          className="form-control"
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="e.g john@mail.com"
          required
          type="email"
          value={values.email}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="phone_number">
          Phone Number
        </label>
        <input
          className="form-control"
          id="phone_number"
          name="phone_number"
          onChange={handleChange}
          placeholder="e.g 08012345678"
          required
          type="number"
          value={values.phone_number}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="amount">
          Amount
        </label>
        <input
          className="form-control"
          id="amount"
          name="amount"
          onChange={handleChange}
          placeholder=""
          required
          type="number"
          value={values.amount}
        />
      </div>

      {isPaymentMade && (
        <div className="form-text text-white bg-success p-3 d-inline-block mb-3">
          Thank you for the cash gift, {values.name}!
        </div>
      )}
      <br />
      {empty && <p className="error">{error}</p>}

      <button className="btn bgPrimary" disabled={isFormInvalid} type="submit">
        Pay with Flutterwave
      </button>
    </form>
  );
};

export default PaymentForm;
