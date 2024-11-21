export class NhanVien {
  constructor(
    _tknv,
    _name,
    _email,
    _password,
    _datepicker,
    _luongCB,
    _chucvu,
    _gioLam
  ) {
    this.tknv = _tknv;
    this.name = _name;
    this.email = _email;
    this.password = _password;
    this.datepicker = _datepicker;
    this.luongCB = _luongCB;
    this.chucvu = _chucvu;
    this.gioLam = _gioLam;
  }
  tongLuong() {
    if ((this.chucvu = "Sếp")) return this.luongCB * 3;
    if ((this.chucvu = "Trưởng phòng")) return this.luongCB * 2;
    return this.luongCB;
  }
  xepLoaiGioLam() {
    if (this.gioLam >= 192) return "xuất sắc";
    if (this.gioLam >= 176) return "Giỏi";
    if (this.gioLam >= 160) return "Khá";
    return "Trung Bình";
  }
}
