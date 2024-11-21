export class Validation {
  required(value, errorId, isUpdateMode = false) {
    const element = document.getElementById(errorId);
    
    if (value.trim() === "") {
      element.innerHTML = "Vui lòng nhập Tài Khoản,không để trống!";
      element.style.display = "block";
      return false;
    }
    if (value.length < 4 || value.length > 6) {
      element.innerHTML = "Độ dài phải từ 4 đến 6 ký tự.";
      element.style.display = "block";
      return false;
    }

    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    if (!hasLetter || !hasNumber) {
      element.innerHTML = "Phải chứa cả chữ và số.";
      element.style.display = "block";
      return false;
    }
    element.innerHTML = "";
    element.style.display = "none";
    return true;
  }

  checkName(value, errorId) {
    const element = document.getElementById(errorId);
    if (value.trim() === "") {
      element.innerHTML = "Vui lòng nhập Họ và Tên, không để trống!";
      element.style.display = "block";
      return false;
    }
    if (value.length < 8 || value.length > 20) {
      element.innerHTML = "Độ dài phải từ 8 đến 20 ký tự.";
      element.style.display = "block";
      return false;
    }
    const regex = /^[a-zA-ZÀ-ỹ\s]+$/u;
    if (!regex.test(value)) {
      element.innerHTML = "Họ và tên chỉ được chứa chữ cái và khoảng trắng!";
      element.style.display = "block";
      return false;
    }
    element.innerHTML = "";
    element.style.display = "none";
    return true;
  }
  checkEmail(value, errorId) {
    const element = document.getElementById(errorId);

    if (value.trim() === "") {
      element.innerHTML = "Vui lòng nhập Email, không để trống!";
      element.style.display = "block";
      return false;
    }

    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      element.innerHTML = "Email không hợp lệ! Ví dụ:example@domain.com";
      element.style.display = "block";
      return false;
    }

    element.innerHTML = "";
    element.style.display = "none";
    return true;
  }
  checkNgay(value, errorId) {
    const element = document.getElementById(errorId);
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (value.trim() === "") {
      element.innerHTML = "Vui lòng nhập Ngày,Tháng,Năm, không để trống!";
      element.style.display = "block";
      return false;
    }

    if (!regex.test(value)) {
      element.innerHTML =
        " Ngày không hợp lệ!. Định dạng đúng là mm//dd//yyyy.";
      element.style.display = "block";
      return false;
    }

    element.innerHTML = "";
    element.style.display = "none";
    return true;
  }

  checkPassword(value, errorId) {
    const element = document.getElementById(errorId);
    if (value.trim() === "") {
      element.innerHTML = "Vui lòng nhập Mật Khẩu, không để trống!";
      element.style.display = "inline-block";
      return false;
    }
    const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,10}$/;
    if (!regex.test(value)) {
      element.innerHTML =
        "Mật khẩu không hợp lệ. phải từ 6-10 ký tự, chứa ít nhất 1 số, 1 chữ in hoa, và 1 ký tự đặc biệt.";
      element.style.display = "block";
      return false;
    }
    element.innerHTML = "";
    element.style.display = "none";
    return true;
  }
  checkLuong(value, errorId) {
    const element = document.getElementById(errorId);
    const salary = parseFloat(value);

    if (value.trim() === "") {
      element.innerHTML = " Vui lòng nhập lương! không được để trống.";
      element.style.display = "block";
      return false;
    }

    if (isNaN(salary) || salary < 1000000 || salary > 20000000) {
      element.innerHTML =
        "Lương phải nằm trong khoảng từ 1,000,000 đến 20,000,000.";
      element.style.display = "block";
      return false;
    }

    element.innerHTML = "";
    element.style.display = "none";
    return true;
  }

  checkChucVu(value, errorId) {
    const element = document.getElementById(errorId);

    if (value.trim() === "" || value === "Chọn chức vụ") {
      element.innerHTML = "Vui lòng chọn xếp loại hợp lệ.";
      element.style.display = "block";
      return false;
    }

    element.innerHTML = "";
    element.style.display = "none";
    return true;
  }

  checkWorkingHours(value, errorId) {
    const element = document.getElementById(errorId);
    const hours = parseFloat(value);

    if (value.trim() === "") {
      element.innerHTML = "Số giờ làm không được để trống.";
      element.style.display = "block";
      return false;
    }

    if (isNaN(hours) || hours < 80 || hours > 200) {
      element.innerHTML = "Số giờ làm phải nằm trong khoảng từ 80 đến 200 giờ.";
      element.style.display = "block";
      return false;
    }

    element.innerHTML = "";
    element.style.display = "none";
    return true;
  }
}
