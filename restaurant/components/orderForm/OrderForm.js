import styles from "./OrderForm.module.scss";
import React from "react";
import { useRef, useState } from "react";
import OrderMessage from "./OrderMessage";
import { useRouter } from "next/router";

function OrderForm() {
  const nameRef = useRef();
  const surnameRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const postalCodeRef = useRef();
  const adresRef = useRef();

  const [nameValid, setNameValid] = useState(true);
  const [surnameValid, setSurnameValid] = useState(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [postalCodeValid, setPostalCodeValid] = useState(true);
  const [adresValid, setAdresValid] = useState(true);
  const [formValid, setFormValid] = useState(false);

  const router = useRouter();

  function formSubmit(e) {
    e.preventDefault();

    if (nameRef.current.value.trim() !== "") {
      setNameValid(true);
    } else {
      setNameValid(false);
    }

    if (surnameRef.current.value.trim() !== "") {
      setSurnameValid(true);
    } else {
      setSurnameValid(false);
    }

    if (phoneNumberRef.current.value.length === 9) {
      setPhoneNumberValid(true);
    } else {
      setPhoneNumberValid(false);
    }

    if (emailRef.current.value.includes("@")) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
      console.log("elo");
    }

    if (postalCodeRef.current.value.length === 6) {
      setPostalCodeValid(true);
    } else {
      setPostalCodeValid(false);
    }

    if (adresRef.current.value.trim() !== "") {
      setAdresValid(true);
    } else {
      setAdresValid(false);
    }
    if (
      nameValid &&
      surnameValid &&
      phoneNumberValid &&
      emailValid &&
      adresValid &&
      postalCodeValid
    ) {
      setFormValid(true);
      setTimeout(() => {
        router.push("/menu");
      }, 2000);
    }
  }

  return (
    <form onSubmit={formSubmit} className={styles.form}>
      <div className={styles.data}>
        <h2>My data</h2>
        <span>
          <label>Name </label>
          {!nameValid ? <p>Enter a valid name</p> : ""}
          <input
            className={!nameValid ? styles.error : ""}
            ref={nameRef}
            type="text"
          />
        </span>

        <span>
          <label>Surname</label>
          {!nameValid ? <p>Enter a valid surname</p> : ""}
          <input
            className={!surnameValid ? styles.error : ""}
            ref={surnameRef}
            type="text"
          />
        </span>
        <span>
          <label>Phone Number</label>
          {!nameValid ? <p>Enter a valid phone number</p> : ""}
          <input
            className={!phoneNumberValid ? styles.error : ""}
            ref={phoneNumberRef}
            type="text"
          />
        </span>
        <span>
          <label>Email</label>
          {!nameValid ? <p>Enter a valid email</p> : ""}
          <input
            className={!emailValid ? styles.error : ""}
            ref={emailRef}
            type="text"
          />
        </span>
      </div>

      <div className={styles.delivery}>
        <h2>Delivery adres</h2>
        <span>
          <label>Adres</label>
          {!adresValid ? <p>Enter a valid adres</p> : ""}
          <input
            className={!adresValid ? styles.error : ""}
            ref={adresRef}
            type="text"
          />
        </span>

        <span>
          <label>Postal code</label>
          {!postalCodeValid ? (
            <p>Postal code must contain 5 digits ex. 42-231</p>
          ) : (
            ""
          )}
          <input
            className={!postalCodeValid ? styles.error : ""}
            ref={postalCodeRef}
            type="text"
          />
        </span>
      </div>
      {formValid && <OrderMessage />}
      <button>Order and pay</button>
    </form>
  );
}

export default OrderForm;
