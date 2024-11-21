export class employeeServices {
  arrayEmployees = [];
  constructor() {}
  addEmployee(nhanvien) {
    this.arrayEmployees.push(nhanvien);
  }
  deleteEmployee(tknv) {
    const index = this.arrayEmployees.findIndex((item) => item.tknv === tknv);
    console.log("index: ", index);

    if (index !== -1) {
      this.arrayEmployees.splice(index, 1);
    }
  }
  updateEmployee(nhanvien) {
    const index = this.arrayEmployees.findIndex(
      (item) => item.tknv === nhanvien.tknv
    );
    if (index !== -1) {
      this.arrayEmployees[index] = nhanvien;
    }
  }
}
