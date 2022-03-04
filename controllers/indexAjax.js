function getApiSinhVien(){
    var promise = axios ({
        url :'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',//Đường dẫn api do back end quy định
        method:'GET',// Phương thức do back end quy định
    });

    //Xử lý khi gọi API thành công:
    promise.then(function(result){
        console.log('Kết QUả', result.data)
        // Sau khi lấy dữ liệu thành công từ back end về => gọi hàm để từ dữ liệu này tạo ra table sinh viên trên giao diện
        renderTablesSinhVien(result.data);
    })

    //Xử lí khi gọi API thất bại:
    promise.catch(function(error){
        console.log(error)
    })
}
getApiSinhVien();



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
            <td>${sv.soDienThoai}</td>
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


// --------------------------------POST: Thêm dữ liệu về phía server để server lưu trữ-----------------

document.querySelector('#btn-submit').onclick = function(){
    //Tạo ra format data như back end yêu cầu để chứa dữ liệu người dùng nhập vào
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    var promise = axios({
        url:'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',// back end cung cấp
        method:'POST', // back end cung cấp
        data:sv // format đúng yêu cầu back end
    })

    promise.then(function(result){
        console.log('result', result.data);
        //gọi api getSinhVien sau khi thêm thành công
        getApiSinhVien();
    })

    promise.catch(function(error){
        console.log(error);
    })
}


// --------------------------------DELETE: Xóa dữ liệu api-----------------

function xoaSV(maSV){
    var promise = axios({
        url:'http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=' +maSV,
        method:'DELETE',

    });

    promise.then(function(result){
        console.log(result.data);
        //Nếu xóa thành công thì gọi lại api lấy dữ liệu sinh viên từ trên server về lại
        getApiSinhVien();
    });

    promise.catch(function(error){
        console.log(error.data);
    });
}


function chinhSua(maSinhVien){
    var promise = axios({
        url:'http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=' + maSinhVien,
        method:'GET'
    });

    promise.then(function(result){
        //Lấy dữ liệu load trên input 
        console.log(result.data);
        var sinhVien = result.data;
        //Đưa dữ liệu lên form
        document.getElementById("maSinhVien").value = sinhVien.maSinhVien; 
        document.getElementById("tenSinhVien").value = sinhVien.tenSinhVien; 
        document.getElementById("diemRenLuyen").value = sinhVien.diemRenLuyen; 
        document.getElementById("loaiSinhVien").value = sinhVien.loaiSinhVien; 
        document.getElementById("diemToan").value = sinhVien.diemToan; 
        document.getElementById("diemHoa").value = sinhVien.diemHoa; 
        document.getElementById("diemLy").value = sinhVien.diemLy; 
        document.getElementById("soDienThoai").value = sinhVien.soDienThoai; 
        document.getElementById("email").value = sinhVien.email; 
    })

    promise.catch(function(error){
        console.log(error);
    })
}

document.querySelector('#btnCapNhat').onclick = function(){
    //Lấy thông tin từ người dùng gán vào format data back end quy định
    var sv = new SinhVien();
    sv.maSinhVien = document.getElementById("maSinhVien").value;
    sv.tenSinhVien = document.getElementById("tenSinhVien").value;
    sv.diemRenLuyen = document.getElementById("diemRenLuyen").value;
    sv.loaiSinhVien = document.getElementById("loaiSinhVien").value;
    sv.diemToan = document.getElementById("diemToan").value;
    sv.diemHoa = document.getElementById("diemHoa").value;
    sv.diemLy = document.getElementById("diemLy").value;
    sv.soDienThoai = document.getElementById("soDienThoai").value;
    sv.email = document.getElementById("email").value;
  
    var promise = axios({
        url:'http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=' + sv.maSinhVien,// Tham số trên url
        method:'PUT',
        data:sv// Data đúng format backend yêu cầu
    });

    promise.then(function(result){
        console.log('result', result.data);
        //Thành công thì sẽ tạo lại table 
        getApiSinhVien();
    });

    promise.catch(function(error){
        console.log(error);
    });

}