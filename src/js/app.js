/* Функція яка відкриває підменю по кліку на стрілку біля основного
 * пункту меню
 */
document.getElementById('openSubMenu').addEventListener('click', function (e) {
  const data = this.getAttribute('data-attr');
  const subMenuArray = document.getElementsByClassName('dropdown-menu');

  Array.from(subMenuArray).forEach((element) => {
    const checkData = element.getAttribute('data-attr');
    if (data === checkData) {
      changeImageSrc(element, this);
      element.classList.toggle('show');
      element.parentElement.classList.toggle('show');
    } else {
      element.classList.add('hidden');
    }
  });
});
/**
 * Відкриваємо/закриваємо мобільне меню
 */
document
  .getElementById('openMobileMenu')
  .addEventListener('click', function () {
    const menu = document.getElementById('headerNavMenu');
    changeImageSrc(menu, this, 'images/menu.svg', 'images/close.svg');
    menu.classList.toggle('show');
    document.getElementById('header').classList.toggle('open');
    document.getElementById('headerSecondLine').classList.toggle('openMobile');
    if (document.getElementById('header').classList.contains('open')) {
      changeImageSrc(
        document.getElementById('logo'),
        document.querySelector('.logo>img'),
        'images/logo_desktop.png',
        'images/logo_mobile.png'
      );
    } else {
      changeImageSrc(
        document.getElementById('logo'),
        document.querySelector('.logo>img'),
        'images/logo_mobile.png',
        'images/logo_desktop.png'
      );
    }
  });

/**
 * Допоміжна функція змінює картинку, якщо в батька/обгортку додається класс "show"
 * el1 - елемент-обгортка де знаходиться наша картинка, в якої дадається/прибирається класс "show"
 * el2 - сама картинка
 * src1, src2 - шляхи до картинок, по замовчуванню - стрілка
 */
function changeImageSrc(
  el1,
  el2,
  src1 = 'images/arrow-down.svg',
  src2 = 'images/arrow-up.svg'
) {
  if (el1.classList.contains('show')) {
    el2.setAttribute('src', src1);
  } else {
    el2.setAttribute('src', src2);
  }
}
/**
 * Відкриваємо додаткові телефони
 */
document.getElementById('phonesShow').addEventListener('click', function (e) {
  const phoneWrap = document.getElementById('phoneWrap');
  changeImageSrc(phoneWrap, this);
  phoneWrap.classList.toggle('show');
});

// document.getElementById("seed").addEventListener("mouseover", function (e) {
//   const seedWrap = document.getElementById("seedWrap");
//   changeImageSrc(seedWrap, this, "images/seeds.svg", "images/seeds2.svg");
//   seedWrap.classList.toggle("show");
// });

/**
 * відкриваємо модальне вікно
 */

document.getElementById('backet').addEventListener('click', () => {
  document.getElementById('modal').classList.add('show');
  document.querySelector('body').classList.add('add-modal');
});

document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('show');
  document.querySelector('body').classList.remove('add-modal');
});

document.getElementById('modal').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('show');
  document.querySelector('body').classList.remove('add-modal');
});

document.getElementById('modalInner').addEventListener('click', (e) => {
  e.stopPropagation();
});

// Виділення активного посилання
function setActiveLink() {
  const href = window.location.pathname;
  const links = document.querySelectorAll('#headerNavMenu>li>a');
  Array.from(links).forEach((item) => {
    if (item.getAttribute('href') === href) {
      item.classList.add('active');
      item.parentElement.classList.add('active');
    } else {
      item.classList.remove('active');
      item.parentElement.classList.remove('active');
    }
  });

  const dropDounlinks = document.querySelectorAll('#headerNavMenu>li>div>a');
  Array.from(dropDounlinks).forEach((item) => {
    if (item.getAttribute('href') === href) {
      item.classList.add('active');
      item.parentElement.parentElement.classList.add('active');
    } else {
      item.classList.remove('active');
      item.parentElement.parentElement.classList.remove('active');
    }
  });

}
setActiveLink();

//Встановлюємо/прибираємо позначку з кількістю
function setCompareCartCount() {
  const compare = localStorage.getItem("compare") ? JSON.parse(localStorage.getItem("compare")) : []
  const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
  if (compare.length > 0) {
    document.querySelector(".counter-compare>.counter").textContent = compare.length;
    document.querySelector(".counter-compare>.counter").classList.add('show')
  }

  if (cart.length > 0) {
    document.querySelector(".counter-backet>.counter").textContent = cart.length;  
    document.querySelector(".counter-backet>.counter").classList.add('show')    
  }
}

setCompareCartCount()