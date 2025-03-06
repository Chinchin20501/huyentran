// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn em đã dành thời gian để nhìn những trò trẻ con của anh và anh có những điều muốn gởi gắm đến tương lai của anhh❤️. Là con gái anh biết là đã thiệt rồi hi vọng mọi thứ xung quanh sẽ nhẹ nhàng dịu dàng và Trân trọng hơn với em. Để tạo bất ngờ hôm nay nên a phải phá vỡ sự an toàn của e đối với a bằng chuyện bữa trước. Anh biết một người nhắn với mình có khi tận 1,2h đêm, một người đi chơi cũng không quên anh nhắn tin để anh biết, còn buồn cũng nhắn vui cũng nhắn. Sao anh lại không biết từ đó anh biết mình đã gặp đúng người. Cách tiến đến một người của anh không vội vã giống bao người không ồn ào cũng không theo kịp, nhưng anh sẽ đến với em bằng tốc độ riêng của mình. Chậm rãi tìm hiểu kĩ , từ từ bước đến bên em và kế bên để em nhìn rõ hơn về anh. Chúc em ngày 8/3 luôn vui vẻ luôn tươi cười và luôn hạnh phúc nha❤️❤️❤️."

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})