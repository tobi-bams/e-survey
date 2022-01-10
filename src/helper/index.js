export const emailValidatorChecker = (email) => {
  let mailFormatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailFormatter)) {
    return true;
  } else {
    return false;
  }
};

export const emailValidatorError = (email, setForm) => {
  let mailFormatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email === "" || !email.match(mailFormatter)) {
    if (email === "") {
      setForm((prev) => {
        return { ...prev, emailError: "Email is required" };
      });
    } else {
      setForm((prev) => {
        return { ...prev, emailError: "Please Enter a valid Email Address" };
      });
    }
  }
};

export const inputValidatorChecker = (value) => {
  if (value === "") {
    return false;
  } else {
    return true;
  }
};

export const inputValidatorErrorState = (value, setState, field, errMsg) => {
  if (value === "") {
    setState((prev) => {
      return { ...prev, [field]: errMsg };
    });
    return;
  }
};
