    import { NhanVien } from "./employee.js";
    import { employeeServices } from "./employee-services.js";
    import { Validation } from "./validation.js";
    const employeeservice = new employeeServices();
    const validation = new Validation();
    console.log("employeeservice: ", employeeservice);
    const layThongTinNV = () => {
    const allElements = document.querySelectorAll("#formNV input,#formNV select");

    let nhanVien = {};

    allElements.forEach((thuoctinh) => {
        const { id, value } = thuoctinh;
        nhanVien[id] = value;
    });
    console.log("danh sách NhanVien", nhanVien);
    return new NhanVien(
        nhanVien.tknv,
        nhanVien.name,
        nhanVien.email,
        nhanVien.password,
        nhanVien.datepicker,
        nhanVien.luongCB,
        nhanVien.chucvu,
        nhanVien.gioLam
    );
    };

    const renderEmployees = (arrayEmployees = employeeservice.arrayEmployees) => {
    let contentHtml = "";
    arrayEmployees.forEach((nhanvien) => {
        contentHtml += `
        <tr>
        <td>${nhanvien.tknv}</td>
        <td>${nhanvien.name}</td>
        <td>${nhanvien.email}</td>
        <td>${nhanvien.datepicker}</td>
        <td>${nhanvien.chucvu}</td>
        <td>${nhanvien.tongLuong()}</td>
        <td>${nhanvien.xepLoaiGioLam()}</td>
        <td>
        <button class="btn btn-success" data-toggle="modal" 
        data-target="#myModal" onclick="editEmployee('${
            nhanvien.tknv
        }')" >Edit</button>
        <button class="btn btn-danger"onclick="deleteEmployee('${
            nhanvien.tknv
        }')">Delete</button>
        </td>
        `;
    });
    document.getElementById("tableDanhSach").innerHTML = contentHtml;
    };
    const SetlocalStorage = () => {
    localStorage.setItem(
        "arrayEmployees",
        JSON.stringify(employeeservice.arrayEmployees)
    );
    };
    const renderLocalsStorage = () => {
    let arrayEmployees = localStorage.getItem("arrayEmployees");
    if (!arrayEmployees) return;
    arrayEmployees = JSON.parse(arrayEmployees);
    const newEmployees = arrayEmployees.map((nhanVien) => {
        return new NhanVien(
        nhanVien.tknv,
        nhanVien.name,
        nhanVien.email,
        nhanVien.password,
        nhanVien.datepicker,
        nhanVien.luongCB,
        nhanVien.chucvu,
        nhanVien.gioLam
        );
    });
    employeeservice.arrayEmployees = newEmployees;
    renderEmployees(newEmployees);
    };
    renderLocalsStorage();
    document.getElementById("btnThem").onclick = () => {
    const form = document.getElementById("formNV");
    form.reset();
    document.getElementById("btnCapNhatNV").style.display = "none";
    document.getElementById("btnThemNV").style.display = "inline-block";
    document.getElementById("tknv").disabled = false;
    };
    document.getElementById("formNV").onsubmit = (ev) => {
    ev.preventDefault();
    const Alleles = document.getElementById("formNV");
    const action = Alleles.getAttribute("data-action");
    const nhanvien = layThongTinNV();
    let isValid = true;
    isValid &= validation.required(nhanvien.tknv, "invalidtknv");
    isValid &= validation.checkName(nhanvien.name, "invalidname");
    isValid &= validation.checkEmail(nhanvien.email, "invalidemail");
    isValid &= validation.checkNgay(nhanvien.datepicker, "invalidngay");
    isValid &= validation.checkPassword(nhanvien.password, "invalidpassword");
    isValid &= validation.checkLuong(nhanvien.luongCB, "invalidluong");
    isValid &= validation.checkChucVu(nhanvien.chucvu, "invalidchucvu");
    isValid &= validation.checkWorkingHours(nhanvien.gioLam, "invalidgiolam");
    if (!isValid) return;
    if (action !== "edit") {
        employeeservice.addEmployee(nhanvien);
    }

    Alleles.removeAttribute("data-action");
    Alleles.reset();
    document.getElementById("btnDong").click();
    SetlocalStorage();
    renderEmployees();
    };

    window.deleteEmployee = (tknv) => {
    console.log("tknv: ", tknv);

    employeeservice.deleteEmployee(tknv);

    console.log(employeeservice.arrayEmployees);

    renderEmployees();
    SetlocalStorage();
    };

window.editEmployee = (tknv) => {
  const employeeEdit = employeeservice.arrayEmployees.find(
    (item) => item.tknv === tknv
  );

  document.getElementById("formNV").setAttribute("data-action", "edit");

  document.getElementById("tknv").disabled = true;
  document.getElementById("btnCapNhatNV").style.display = "inline-block";
  document.getElementById("btnThemNV").style.display = "none";

  const elements = document.querySelectorAll("#formNV input,#formNV select");
  elements.forEach((element) => {
    if (employeeEdit[id] !== undefined) {
    }
  });
  const nhanvien = layThongTinNV();
  let isValid = true;

  isValid &= validation.checkName(nhanvien.name, "invalidname");

  isValid &= validation.checkEmail(nhanvien.email, "invalidemail");

  isValid &= validation.checkNgay(nhanvien.datepicker, "invalidngay");

  isValid &= validation.checkPassword(nhanvien.password, "invalidpassword");

  isValid &= validation.checkLuong(nhanvien.luongCB, "invalidluong");

  isValid &= validation.checkChucVu(nhanvien.chucvu, "invalidchucvu");
  isValid &= validation.checkWorkingHours(nhanvien.gioLam, "invalidgiolam");

  if (!isValid) return;
};

function timKiemXL() {
  let valueSearchInput = document.getElementById("searchName").value;
  let xeploaiSearch = employeeservice.arrayEmployees.filter((nhanvien) => {
    return nhanvien
      .xepLoaiGioLam()
      .toUpperCase()
      .includes(valueSearchInput.toUpperCase());
  });
  console.log("Kết quả tìm kiếm theo xếp loại: ", xeploaiSearch);
  renderEmployees(xeploaiSearch);
}
document.getElementById("searchName").oninput = timKiemXL;
