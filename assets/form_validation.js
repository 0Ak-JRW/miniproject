function formValidation() {
  const form = document.forms.registration;

  const get = (name) => form?.elements?.[name] || null;
  const labelOf = (el, fallback) =>
    (el && el.labels && el.labels[0] && el.labels[0].innerText) ||
    fallback ||
    el?.name ||
    "This field";

  const ufname = get("firstname") || get("fname");
  const ulname = get("lastname") || get("lname");
  const uemail = get("email");
  const uadd = get("address");
  const ucountry = get("country");
  const uzip = get("zip");
  const uphone = get("pnum") || get("phone");
  const ueducation = get("edlev") || get("education");

  // ตรวจทีละเงื่อนไข เฉพาะฟิลด์ที่มีจริง
  if (ufname && !/^[A-Za-z]+$/.test(ufname.value.trim())) {
    alert(
      labelOf(ufname, "First name") + " must have alphabet characters only"
    );
    ufname.focus();
    return false;
  }
  if (ulname && !/^[A-Za-z]+$/.test(ulname.value.trim())) {
    alert(labelOf(ulname, "Last name") + " must have alphabet characters only");
    ulname.focus();
    return false;
  }
  if (
    uemail &&
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(uemail.value.trim())
  ) {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
  if (uphone && !/^\d{10}$/.test(uphone.value.trim())) {
    alert("Phone number must be exactly 10 digits");
    uphone.focus();
    return false;
  }
  if (uadd && !/^[0-9a-zA-Z\s]+$/.test(uadd.value.trim())) {
    alert("Address must have alphanumeric characters only");
    uadd.focus();
    return false;
  }
  if (ueducation && !ueducation.value) {
    alert("Select your education level from the list");
    ueducation.focus();
    return false;
  }
  if (ucountry && !ucountry.value) {
    alert("Select your country from the list");
    ucountry.focus();
    return false;
  }
  if (uzip && !/^[0-9]+$/.test(uzip.value.trim())) {
    alert(labelOf(uzip, "ZIP Code") + " must have numeric characters only");
    uzip.focus();
    return false;
  }


  alert("Form Successfully Validated");
  window.location.href = "/index.html";
  return false;
}
