const forceDarkMode = () => {
  console.warn("DarkMode forced.");
  return "dark";
};

const checkInput = (inputType, inputEntry) => {
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const usernameRegex = /^[aA-zZ]+$/;

  console.log("Check de l'input :");
  if (inputType === "password") {
    console.log("Checking password input...");
  }
  if (inputType === "email") {
    console.log("Checking email input...");
    if (regexEmail.test(inputEntry)) {
      return true;
    }
    return false;
  }
  if (inputType === "username") {
    console.log("Checking username input...", inputEntry);
    if (usernameRegex.test(inputEntry)) {
      console.log("Username correct");
      return true;
    }
    return false;
  }
};

export { forceDarkMode, checkInput };
