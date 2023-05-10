console.log("xin chao!");

// bài 1
//input: là nơi người dùng nhập số ngày làm 
function tinhLuong () {
    // lấy dữ liệu
    var x = document.getElementById("soNgay").value * 1; 
// xử lý: ta lấy số ngày người dùng nhập vào rồi nhân nó cho 100K
    var tongLuong = x * 100000;
//output: cuối cùng là hiện kq cho người dùng
    document.querySelector(".bg-info").innerHTML = tongLuong + " VND";
}


// bài 2
// input: mình tạo ra 5 input để người dùng nhập 5 số họ muốn
function tinhTrungBinh () {
    // lấy dữ liệu người dùng nhập
    var q = document.getElementById("so1").value * 1;
    var w = document.getElementById("so2").value * 1;
    var e = document.getElementById("so3").value * 1;
    var r = document.getElementById("so4").value * 1;
    var t = document.getElementById("so5").value * 1;
// xử lý: lấy tổng 5 số người dùng nhập rồi đem chia cho 5
    var toan = (q + w + e + r + t)/5;
// output: hiện kq cho người dùng 
    document.querySelector(".bg-warning").innerHTML = "Giá trị trung bình của 5 số trên bằng " + toan;
}

// bài 3
// input: số tiền đô người dùng muốn đổi
function quyDoi () {
    //lấy dữ liệu
    var d = document.getElementById("usd").value * 1;
// xử lý: sau khi người dùng đã nhập số tiền đô họ muốn đổi, ta lấy nó nhân cho 23,500
    var total = d * 23500;
// output: hiện kq số tiền người dùng sẽ nhận đc nếu họ muốn chuyển sang vnd 
    document.querySelector(".bg-success").innerHTML = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'vnd'}).format(total);
}

// bài 4
// input: tạo ra 2 input cho người dùng nhập chiều dài và chiều rộng mong muốn
function dienTich () {
    // lấy dữ liệu
    var h = document.getElementById("height").value * 1;

    var w = document.getElementById("width").value * 1;
// xử lý: ta tạo ra 2 function ứng với 2 button cho người dùng. 1 button tính diện tích và 1 button tính chu vi
// 2 function sẽ cùng nhận 2 biến dữ liệu giống nhau
    var ketQuaDienTich = h * w;
//output: hiện kq cho người dùng. Nên để 2 màu kq khác nhau tương ứng với màu nút để người dùng dễ phân biệt
    document.querySelector(".bg-danger").innerHTML = "Diện tích hình chữ nhật bằng " + ketQuaDienTich;
}
// input
function chuVi () {
    // lấy dữ liệu
    var h = document.getElementById("height").value * 1;

    var w = document.getElementById("width").value * 1;
// xử lý
    var ketQuaChuVi = (h + w) * 2;
// output
    document.querySelector(".bg-primary").innerHTML = "Chu vi hình chữ nhật bằng " + ketQuaChuVi;
}

// bài 5
// input: cho người nhập số có 2 chữ số họ mong muốn
function tinhTong2KySo () {
    //nhận dữ liệu
    var c = document.getElementById("kySo").value * 1; 
// xử lý
// với số hàng đơn vị thì ta lấy số % cho 10
// vd: 26 % 10 = 6
    var soHangDv = c % 10;
// với số hàng chục thì ta tận dụng Math.floor để làm tròn xuống, sau đó ta lấy số chia cho 10
// vd: 26 /10 = 2.6 => Math.floor(2.6) = 2
    var soHangChuc = Math.floor(c / 10);
// nếu ko chắc thì ta có thể ktra
    console.log(soHangDv);
    console.log(soHangChuc);
// sau đó ta tính tổng 2 biến ta vừa gán
    var tong = soHangDv + soHangChuc;
// output: hiện kq cho người dùng
    document.querySelector(".bg-secondary").innerHTML = "Tổng 2 ký số bằng " + tong;
}