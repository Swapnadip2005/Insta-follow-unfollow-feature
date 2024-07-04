// Refreshing Browser
function autoRefresh() {
  window.location = window.location.href;
}

let follow = document.querySelector("#follow")
let msg = document.querySelector("#msg")
let following_option = document.querySelector(".following_option")
let check = 0

follow.addEventListener("click",function(){
  if(check == 0) {
    follow.innerHTML = "Following"
    msg.style.display = "block"
    check = 1
  } else {
    follow.innerHTML = "Following"
    following_option.style.height = "230px"
    following_option.style.visibility = "visible"
    following_option.style.transition = "height 0.5s"
    document.querySelector(".card").style.opacity = "0.5"
  }
})

let btn_unfollow = document.querySelector("#btn_unfollow")
let unfollow_container = document.querySelector(".unfollow_container")
let unfollow = document.querySelector("#unfollow")

btn_unfollow.addEventListener("click", function(){
  unfollow_container.style.visibility = "visible"
  document.querySelector(".following_option").style.opacity = "0.5"
})
unfollow.addEventListener("click", function(){
  unfollow_container.style.visibility = "hidden"
  following_option.style.visibility = "hidden"
  msg.style.display = "none"
  setInterval('autoRefresh()', 50);
})

let cancel = document.querySelector("#cancel")

cancel.addEventListener("click", function(){
  unfollow_container.style.visibility = "hidden"
  following_option.style.visibility = "visible"
  following_option.style.height = "0"
  following_option.style.transition = "height 0.09s"
  document.querySelector(".card").style.opacity = "1"
  document.querySelector(".following_option").style.opacity = "1"
})