
var mangSinhVien = [];
var kiemTra = new Validation();

//Xây dựng chức năng cho nút xác nhận => Khi bấm xác nhận tạo đối tượng lưu trữ thông tin người dùng nhập vào
document.getElementById("btn-submit").onclick = function () {
  var sv = new SinhVien();
  sv.maSinhVien = document.getElementById("maSinhVien").value;
  sv.tenSinhVien = document.getElementById("tenSinhVien").value;
  sv.diemRenLuyen = document.getElementById("diemRenLuyen").value;
  sv.loaiSinhVien = document.getElementById("loaiSinhVien").value;
  sv.diemToan = document.getElementById("diemToan").value;
  sv.diemHoa = document.getElementById("diemHoa").value;
  sv.diemLy = document.getElementById("diemLy").value;
  sv.phone = document.getElementById("soDienThoai").value;
  sv.email = document.getElementById("email").value;
  console.log(sv);


  //Kiểm tra dữ liệu người dùng nhập có hợp lệ hay không 
    var valid = true;
    //Check mã SV
    valid = valid && kiemTra.kiemTraRong(sv.maSinhVien,'#error_required_maSinhVien', 'Mã Sinh Viên Không Được Bỏ Trống') && kiemTra.kiemTraDoDaiKiTu(sv.maSinhVien,'#error_required_maSinhVien',4,10) && kiemTra.kiemTraTrungMaSV(sv.maSinhVien,'#error_required_maSinhVien', mangSinhVien);
    //Check tên SV
    valid &= kiemTra.kiemTraRong(sv.tenSinhVien,'#error_required_tenSinhVien','Tên Sinh Viên Không Được Bỏ Trống')&& kiemTra.kiemTraDoDaiKiTu(sv.tenSinhVien,'#error_required_tenSinhVien',6,15) && kiemTra.kiemTraChuoiKiTu(sv.tenSinhVien, '#error_required_tenSinhVien');
    // Check Điểm Rèn Luyện
    valid &= kiemTra.kiemTraRong(sv.diemRenLuyen,'#error_required_diemRenLuyen','Điểm Rèn Luyện Không Được Bỏ Trống')&& kiemTra.kiemTraSo(sv.diemRenLuyen,'#error_required_diemRenLuyen') && kiemTra.kiemTraDiem(sv.diemRenLuyen,'#error_required_diemRenLuyen');
    // Check Email
    valid &= kiemTra.kiemTraRong(sv.email,'#error_required_email','Email Không Được Bỏ Trống')&& kiemTra.kiemTraEmail(sv.email,'#error_required_email');
    // Check Số Điện Thoại
    valid &= kiemTra.kiemTraRong(sv.phone,'#error_required_soDienThoai','Số Điện Thoại Không Được Bỏ Trống')&& kiemTra.kiemTraSo(sv.phone,'#error_required_soDienThoai');
    // Check Điểm Toán
    valid &= kiemTra.kiemTraRong(sv.diemToan,'#error_required_diemToan','Điểm Toán Không Được Bỏ Trống')&& kiemTra.kiemTraSo(sv.diemToan,'#error_required_diemToan') && kiemTra.kiemTraDiem(sv.diemToan,'#error_required_diemToan');
    //Check Điểm Lý
    valid &= kiemTra.kiemTraRong(sv.diemLy,'#error_required_diemLy','Điểm Lý Không Được Bỏ Trống')&& kiemTra.kiemTraSo(sv.diemLy,'#error_required_diemLy') && kiemTra.kiemTraDiem(sv.diemLy,'#error_required_diemLy');
    // Check Điểm Hóa 
    valid &= kiemTra.kiemTraRong(sv.diemHoa,'#error_required_diemHoa','Điểm Hóa Không Được Bỏ Trống')&& kiemTra.kiemTraSo(sv.diemHoa,'#error_required_diemHoa') && kiemTra.kiemTraDiem(sv.diemHoa,'#error_required_diemHoa');



//   if(sv.maSinhVien.trim() === ''){
//     document.querySelector('#error_required_maSinhVien').innerHTML = 'Mã sinh viên không được bỏ trống !';
//     valid = false;
//   }else{
//     document.querySelector('#error_required_maSinhVien').innerHTML = '';

//   }
//   if(sv.tenSinhVien.trim() === ''){
//     document.querySelector('#error_required_tenSinhVien').innerHTML = 'Tên sinh viên không được bỏ trống !';
//     valid = false;
//   }else{
//     document.querySelector('#error_required_tenSinhVien').innerHTML = '';
//   }
  if(!valid){
      return;//Dừng không chạy tiếp
  }

//Cách 1:

//   //Tạo ra giao diện:
//   //B1: Tạo ra thẻ tr
//   //document.createElement('tên-thẻ'): Cú pháp tạo ra 1 thẻ html = js
//   var trSinhVien = document.createElement("tr");

//   //B2: Tạo ra lần lượt các thẻ td => chứa nội dung thông tin sinh viên

//   var tdMaSinhVien = document.createElement("td");
//   var tdTenSinhVien = document.createElement("td");
//   var tdEmail = document.createElement("td");
//   var tdPhone = document.createElement("td");
//   var tdLoaiSinhVien = document.createElement("td");
//   //td Chức Năng
//   var tdChucNang = document.createElement("td");
//   var btnXoa = document.createElement("button");
//   btnXoa.className = "btn btn-outline-danger";
//   btnXoa.innerHTML = "Xóa";
//   btnXoa.onclick = function () {
//     //remove là phương thức xóa đi 1 thẻ
//     //btnXoa.remove();

//     // var td = btnXoa.parentElement;
//     // var tr = td.parentElement;
//     // tr.remove();

//     // btnXoa.parentElement.parentElement.remove();
//     btnXoa.closest("tr").remove();
//   };
//   tdChucNang.appendChild(btnXoa);

//   //<td> nội dung innerHTML </td>

//   tdMaSinhVien.innerHTML = sv.maSinhVien;
//   tdTenSinhVien.innerHTML = sv.tenSinhVien;
//   tdEmail.innerHTML = sv.email;
//   tdPhone.innerHTML = sv.phone;
//   tdLoaiSinhVien.innerHTML = sv.loaiSinhVien;

//   //B3: Đưa thẻ td vào trong tr:

//   trSinhVien.appendChild(tdMaSinhVien);
//   trSinhVien.appendChild(tdTenSinhVien);
//   trSinhVien.appendChild(tdEmail);
//   trSinhVien.appendChild(tdPhone);
//   trSinhVien.appendChild(tdLoaiSinhVien);
//   trSinhVien.appendChild(tdChucNang);

//   //B4 : Đưa thẻ tr vào thẻ có sẵn trên giao diện (tbody)

//   document.querySelector("tbody").appendChild(trSinhVien);





//Cách 2:
    //Đưa thông tin sinh viên vào mảng (mangSinhVien)
    mangSinhVien.push(sv);
    console.log(mangSinhVien);
    renderTablesSinhVien(mangSinhVien);
    resetForm();
    luuLocalStorage();

   
   
};


function renderTablesSinhVien (arrSV){//input
    var stringHTML = '';
    for(var i = 0; i < arrSV.length; i++){
        //Mỗi lần duyệt lấy ra 1 sinh viên từ trong mangSinhVien
        var sv = arrSV[i];
        // Duyệt qua 1 đối tượng sinh viên thì tạo ra 1 thẻ tr tương ứng + dồn vào stringHTML
        stringHTML +=  `
        <tr>
            <td>${sv.maSinhVien}</td>
            <td>${sv.tenSinhVien}</td>
            <td>${sv.email}</td>
            <td>${sv.phone}</td>
            <td>${sv.loaiSinhVien}</td>
            <td>
                <button class="btn btn-outline-danger" onclick="xoaSV('${sv.maSinhVien}')">Xóa</button>
                <button class="btn btn-outline-primary" onclick="chinhSua('${sv.maSinhVien}')">Chỉnh Sửa</button>

            </td>
        </tr>
        `
    }
    //Dom đến thẻ tbody viết lại phần innerHTML của thẻ 
    document.querySelector('tbody').innerHTML = stringHTML;
}

function xoaSV(maSVClick){

    //Từ mã sinh viên tìm ra vị trí sinh viên ở trong mảng => xử lý xóa

    for(var index = mangSinhVien.length-1; index >=0 ; index--){
        //Mỗi lần duyệt lấy ra 1 object sinh viên
        var sv = mangSinhVien[index];
        if(sv.maSinhVien === maSVClick){
            //So sánh mã sinh viên trong từng object cuả mảng có trùng với mã sinh viên click ở giao diện hay không 
            mangSinhVien.splice(index,1);
        }
    }
    //Sau khi xóa xong gọi hàm tạo lại mảng table sinh viên
    renderTablesSinhVien(mangSinhVien);

}

function chinhSua(maSVClick){
    console.log('maSVClick', maSVClick);
    //Từ mã sinh viên Click tìm ra đối tượng sinh viên trong mảng 
    for (var index = 0; index < mangSinhVien.length; index++){
        var sinhVien = mangSinhVien[index];
        if(mangSinhVien[index].maSinhVien === maSVClick){
            //Nếu bằng mã sinh viên click thì load dữ liệu lên các thẻ input phía trên
            document.getElementById("maSinhVien").value = sinhVien.maSinhVien; 
            document.getElementById("tenSinhVien").value = sinhVien.tenSinhVien; 
            document.getElementById("diemRenLuyen").value = sinhVien.diemRenLuyen; 
            document.getElementById("loaiSinhVien").value = sinhVien.loaiSinhVien; 
            document.getElementById("diemToan").value = sinhVien.diemToan; 
            document.getElementById("diemHoa").value = sinhVien.diemHoa; 
            document.getElementById("diemLy").value = sinhVien.diemLy; 
            document.getElementById("soDienThoai").value = sinhVien.soDienThoai; 
            document.getElementById("email").value = sinhVien.email; 

        }
    }
    document.querySelector('#maSinhVien').disabled = true;
}

function resetForm(){
    var arrInput = document.querySelectorAll ('#formSinhVien input');
    console.log(arrInput);
    for(var index = 0; index < arrInput.length; index++){
        var input = arrInput[index];
        input.value = '';
    }
}

document.querySelector('#btnCapNhat').onclick = function(){
    //Lấy thông tin trên giao diện sau khi người dùng chỉnh sửa
    var sinhVienSua = new SinhVien();
    sinhVienSua.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVienSua.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVienSua.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVienSua.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sinhVienSua.diemToan = document.querySelector('#diemToan').value;
    sinhVienSua.diemHoa = document.querySelector('#diemHoa').value;
    sinhVienSua.diemLy = document.querySelector('#diemLy').value;
    sinhVienSua.soDienThoai = document.querySelector('#soDienThoai').value;
    sinhVienSua.email = document.querySelector('#email').value;
    console.log(sinhVienSua);
    for(index = 0; index < mangSinhVien.length; index++){
        var svTrongMang = mangSinhVien[index];
        if(svTrongMang.maSinhVien === sinhVienSua.maSinhVien){//Tìm sinh viên trong mảng có mã trùng với sinh viên sau khi người dùng cập nhật dữ liệu 
            svTrongMang.maSinhVien = sinhVienSua.maSinhVien;
            svTrongMang.tenSinhVien = sinhVienSua.tenSinhVien;
            svTrongMang.loaiSinhVien = sinhVienSua.loaiSinhVien;
            svTrongMang.diemRenLuyen = sinhVienSua.diemRenLuyen;
            svTrongMang.diemToan = sinhVienSua.diemToan;
            svTrongMang.diemHoa = sinhVienSua.diemHoa;
            svTrongMang.diemLy = sinhVienSua.diemLy;
            svTrongMang.soDienThoai = sinhVienSua.soDienThoai;
            svTrongMang.email = sinhVienSua.email;
        }
    }
    //Mở khóa mã sinh viên 
    document.querySelector('#maSinhVien').disabled = false;
    //Tạo lại table với nội dung mới 
    renderTablesSinhVien(mangSinhVien);
    //Reset Form
    resetForm();
}



function luuLocalStorage(){
    //Lưu mảng sinh viên (mangSinhVien)
    var sMangSinhVien = JSON.stringify(mangSinhVien);//Biến đổi mảng object sinh viên thành chuỗi

    //Lưu chuỗi đó vào storage
    localStorage.setItem('mangSinhVien', sMangSinhVien);
}

function layDuLieuStorage(){
    //Kiểm tra dữ liệu trong localstorage
    if(localStorage.getItem('mangSinhVien')){
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        //Chuyển chuỗi được lưu từ localstorage => mảng
        mangSinhVien = JSON.parse(sMangSinhVien);
        //Gọi hàm tạo bảng
        renderTablesSinhVien(mangSinhVien);
    }
}

layDuLieuStorage();


document.querySelector('#btnTimKiem').onclick = function(){
    //Lấy ra từ khóa người dùng nhập 
    //.to LowerCase(): Hàm biến đổi tất cả chữ về chữ thường 
    //.trim(): Loại bỏ khoảng trống đầu và cuối của chuỗi
    //input: tuKhoa, mangSinhVien
    var tuKhoa = document.querySelector('#txtTuKhoa').value.toLowerCase().trim();
    //output:
    var mangSinhVienTimKiem =[];
    console.log('tuKhoa', tuKhoa);
    //Duyệt qua mảng sinh viên lấy ra tên từng sinh viên kiểm tra với từ khóa xem có chứa từ khóa này hay không 
    for(var index = 0; index < mangSinhVien.length; index++){
        //Mỗi lần duyệt lấy ra 1 sinh viên trong mảng 
        var sinhVien = mangSinhVien[index];
        if(sinhVien.tenSinhVien.toLowerCase().trim().search(tuKhoa) !== -1){
            mangSinhVienTimKiem.push(sinhVien);
        }
    }
    // Gọi hàm tạo lại table
    renderTablesSinhVien(mangSinhVienTimKiem);
}



document.getElementById('txtTuKhoa').addEventListener('keyup', function(){
      //Lấy ra từ khóa người dùng nhập 
    //.to LowerCase(): Hàm biến đổi tất cả chữ về chữ thường 
    //.trim(): Loại bỏ khoảng trống đầu và cuối của chuỗi
    //input: tuKhoa, mangSinhVien
    var tuKhoa = document.querySelector('#txtTuKhoa').value.toLowerCase().trim();
    //output:
    var mangSinhVienTimKiem =[];
    console.log('tuKhoa', tuKhoa);
    //Duyệt qua mảng sinh viên lấy ra tên từng sinh viên kiểm tra với từ khóa xem có chứa từ khóa này hay không 
    for(var index = 0; index < mangSinhVien.length; index++){
        //Mỗi lần duyệt lấy ra 1 sinh viên trong mảng 
        var sinhVien = mangSinhVien[index];
        if(sinhVien.tenSinhVien.toLowerCase().trim().search(tuKhoa) !== -1){
            mangSinhVienTimKiem.push(sinhVien);
        }
    }
    // Gọi hàm tạo lại table
    renderTablesSinhVien(mangSinhVienTimKiem);
  
})