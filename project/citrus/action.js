// Main page top parallax mouse
document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll('.leaf').forEach(function move(leaf) {
        const speed = leaf.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        leaf.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
}

// Main page top parallax touch
document.addEventListener("touchmove", parallaxtouch);
function parallaxtouch(e){
    document.querySelectorAll('.leaf').forEach(function move(leaf) {
        const speed = leaf.getAttribute('data-speed')

        const x = (window.innerWidth - e.touches[0].clientX*speed)/100
        const y = (window.innerHeight - e.touches[0].clientY*speed)/100

        leaf.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
}
