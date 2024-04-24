export function normalizeStr(str) {
  if (typeof str == "string") {
    return str
      .toLowerCase()
      .normalize("NFD")
      ?.replace(/[\u0300-\u036f]/g, "");
  }
  return "";
}

export const onlyText = (text) => {
  let validText = [];
  if (text) {
    validText = [...text].filter((carac) =>
      carac.match(/^(ç|Ç|\.|[a-zA-Zà-úÀ-Ú]|\s+)+$/)
    );
  } else {
    validText = [""];
  }

  return validText.join("");
};

export const maskText = (entry) => {
  const text = onlyText(entry);

  const capitalize = (name) => name.slice(0, 1).toUpperCase() + name.slice(1);

  // const abrev = (name) => name.includes('.') ? capitalize(name) : name.toLowerCase()
  const minor = (name) =>
    name.includes(".") || name.charAt(0) !== "d"
      ? capitalize(name)
      : name.toLowerCase();

  const formatedText = text
    .split(" ")
    .map((elem) => (elem.length < 4 ? minor(elem) : capitalize(elem)))
    .join(" ");

  return formatedText;
};

export const onlyNumbers = (text) => {
  if (text) {
    return text.split("").filter((letter) => letter.match(/\d/));
  } else {
    return "";
  }
};

export const maskPhone = (phoneNumber) => {
  if (!phoneNumber) return "";

  // Remove all non-digit characters from the phone number except common separators
  const cleanedPhoneNumber = phoneNumber.replace(/[^\d()+\s-]/g, "");

  // Replace any additional "+" if the user typed it
  const sanitizedPhoneNumber = cleanedPhoneNumber.replace(/^\+/, "");

  return "+" + sanitizedPhoneNumber;
};
