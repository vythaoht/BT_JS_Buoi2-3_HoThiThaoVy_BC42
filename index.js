// Bài 1: Tính tiền lương nhân viên
document.getElementById("total").onclick = function () {
    let salaryOneDay = +document.getElementById('salaryOneDay').value;
    let quantity = +document.getElementById('quantity').value;

    let total = salaryOneDay * quantity;

    document.getElementById('showTotal').innerHTML = total + " USD";
}

// Bài 2: Tính giá trị trung bình
document.getElementById('average').onclick = function () {
    let float1 = +document.getElementById('float1').value;
    let float2 = +document.getElementById('float2').value;
    let float3 = +document.getElementById('float3').value;
    let float4 = +document.getElementById('float4').value;
    let float5 = +document.getElementById('float5').value;

    let average = (float1 + float2 + float3 + float4 + float5) / 5

    document.getElementById('showAverage').innerHTML = average;
}

// Bài tập 3: Quy đổi tiền
document.getElementById('VND').onclick = function () {
    let USD = +document.getElementById('USD').value;

    let VND = USD * 23000;

    document.getElementById('showVND').innerHTML = VND + " VND"
}

// Bài tập 4: Tính diện tích, chu vi hình chữ nhật
document.getElementById('area').onclick = function () {
    let length = +document.getElementById('length').value;
    let height = +document.getElementById('height').value;

    let area = length * height;

    document.getElementById('showArea').innerHTML = area + " meters"
}

document.getElementById('perimeter').onclick = function () {
    let length = +document.getElementById('length').value;
    let height = +document.getElementById('height').value;

    let perimeter = (length + height) * 2;

    document.getElementById('showPerimeter').innerHTML = perimeter + " meters"
}

// Bài tập 5: Tính tổng 2 ký số 24
document.getElementById('sum').onclick = function () {
    let num = +document.getElementById('num').value;

    let sum = 0;
    let number = 0;

    sum += num % 10;
    number = Math.floor(num / 10);
    sum += number;

    document.getElementById('showSum').innerHTML = sum;
}





