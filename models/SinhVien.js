//Tạo ra kiểu dữ liệu (prototype class) để lưu trữ thông tin từ giao diện 

function SinhVien(){
    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.loaiSinhVien = '';
    this.diemRenLuyen = 0;
    this.email = '';
    this.phone = '';
    this.diemToan = 0;
    this.diemLy = 0;
    this.diemHoa = 0;
    this.tinhDiemTrungBinh= function (){
        var dtb = (Number(this.diemHoa) + Number(this.diemLy) + Number(this.diemToan) + Number(this.diemRenLuyen));
        return dtb;
    }
}