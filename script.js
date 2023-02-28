document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    let NameValue = document.getElementById("name").value;
    if(NameValue.length == 0){
      alert("Nama tidak boleh kosong");
      return false;
    }
    else if (NameValue.length < 3) {
      alert("Nama tidak boleh kurang dari 3 karakter");
      return false;
    }
  
    let EmailValue = document.getElementById("email").value;
    if(EmailValue.length == 0){
      alert("Email tidak boleh kosong");
      return false;
    }
    else if (!EmailValue.includes("@") || !EmailValue.includes(".com")) {
      alert("Email harus mengandung \"@\" dan \".com\"");
      return false;
    }
  
    let MessageValue = document.getElementById("message").value;
    if (MessageValue.split(" ").length < 3) {
      alert("Pesan harus memiliki minimal 3 kata");
      return false;
    }
  
    document.getElementById("contact-form").submit();
  });