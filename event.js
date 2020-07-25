// 결제내역 확인 함수
function checkBox() {
    let name = $("#csName").val();
    if (document.getElementById("prodCheck").checked == true) {

        if (name.replace(/\sl /gi, "").length == 0) {
            alert("주문자 성함을 입력해주세요");
            $("#csName").focus();
        }
        else {

            alert("주문완료")
        }
    }
    else {
        alert("주문내역을 확인해주세요.");
    }
}