const footer = document.querySelector('footer')
const loc = document.querySelector('#loc')
const navigation = document.querySelector('.navigation')
const fill = () => {
  footer.innerHTML = `<div id="location">
<h3>
  <i class="fa-solid fa-location-dot"></i> trail estate, lekki phase
  one, off admiralty way, GRA, Lagos.
</h3>
</div>
<div class="footer__links">
<div>
  <a href="#">Company</a>
  <a href="#" style="font-size:  1.2rem;">About Us</a>
</div>
<div>
  <a href="#">Contact Us</a>
  <a href="#" style="font-size:  1.2rem;">FAQ</a>
</div>
<div>
  <a href="#">Terms</a>
  <a href="#" style="font-size:  1.2rem;">Privacy Policy</a>
</div>
</div>
<div style="text-align: center; margin-top: 4rem">
<i
  style="margin-right: 8rem"
  class="fa-brands fa-facebook-square"
></i
><i style="margin-right: 8rem" class="fa-brands fa-instagram"></i
><i class="fa-brands fa-twitter"></i>
</div>
<p
style="
  font-size: 1.4rem;
  text-align: center;
  color: #777;
"
>
Trail Hotels&copy;copyright2022
</p>`
}
fill()
const flash = () => {
  const h = footer.firstChild.firstElementChild
  h.style.animation = '2s flash'
  setTimeout(function () {
    h.style.animation = ''
  }, 5000)
}

loc.addEventListener('click', flash)

if (window.innerWidth <= 600) {
  navigation.innerHTML = `
<input type="checkbox" class="navigation__checkbox" id="navi-toggle">

<label for="navi-toggle" class="navigation__button">
  <span class="navigation__icon">&nbsp;</span>
</label>

<nav class="navigation__nav">
  <ul class="navigation__list">
    <li class="navigation__item"><a href="#" class="navigation__link">Rooms</a></li>
    <li class="navigation__item"><a href="Info.html" class="navigation__link">Hotel Info</a></li>
    <li class="navigation__item"><a href="gallery.html" class="navigation__link">Gallery</a></li>
    <li class="navigation__item"><a href="#" class="navigation__link">Sign In</a></li>
  </ul>
</nav>`
}
