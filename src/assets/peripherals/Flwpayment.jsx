import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export const Flwpayment = () => {
  const config = {
    public_key: "FLWPUBK_TEST-d93dc2b19d00e72e91c46f32b9320c9f-X",
    tx_ref: "titanic-48981487343MDI0NzMx",
    amount: 24600,
    currency: "NGN",
    payment_options: "card, mobilemoneyghana, ussd",
    redirect_url: "https://r-blog-jeyl.vercel.app/",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "rose@unsinkableship.com",
      phone_number: "08102909304",
      name: "Rose DeWitt Bukater",
    },
    customizations: {
      title: "The Titanic Store",
      description: "Payment for an awesome cruise",
      logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">

      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }} className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
        rounded-md text-black md:w-auto w-full"
      >
        Buy me some tea
      </button>
    </div>
  );
}