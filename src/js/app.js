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
  const compare = localStorage.getItem('compare')
    ? JSON.parse(localStorage.getItem('compare'))
    : [];
  const cart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
  if (compare.length > 0) {
    document.querySelector('.counter-compare>.counter').textContent =
      compare.length;
    document.querySelector('.counter-compare>.counter').classList.add('show');
  }

  if (cart.length > 0) {
    document.querySelector('.counter-backet>.counter').textContent =
      cart.length;
    document.querySelector('.counter-backet>.counter').classList.add('show');
  }
}

setCompareCartCount();

function deleteBackgroundImage() {
  const currentURL = window.location.href;
  if (currentURL !== 'http://example.com/') {
    const banner = document.querySelector('.banner');
    banner.style.backgroundImage = 'none';
  }
}
deleteBackgroundImage();

// Реєстрація
async function handleRegistration() {
  const registrationForm = document.getElementById('registration-form');
  const errorMessage = document.getElementById('error-message');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm_password');
  const agreementCheckbox = document.getElementById('agreement');

  registrationForm &&
    registrationForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!agreementCheckbox.checked) {
        errorMessage.textContent =
          'Погодьтеся з умовами перед відправкою форми.';
        errorMessage.style.display = 'block';
        setTimeout(() => {
          errorMessage.textContent = '';
          errorMessage.style.display = 'none';
        }, 5000);
        return;
      }

      const email = emailInput.value;
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Введіть коректний email.';
        errorMessage.style.display = 'block';
        setTimeout(() => {
          errorMessage.textContent = '';
          errorMessage.style.display = 'none';
        }, 5000);
        return;
      }

      const passwordPattern = /^(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
      if (!passwordPattern.test(password)) {
        errorMessage.textContent =
          'Пароль має містити мінімум 8 символів, принаймні одну велику літеру та принаймні один спец символ';
        errorMessage.style.display = 'block';
        setTimeout(() => {
          errorMessage.textContent = '';
          errorMessage.style.display = 'none';
        }, 5000);
        return;
      }

      if (password !== confirmPassword) {
        errorMessage.textContent = 'Паролі не співпадають.';
        errorMessage.style.display = 'block';
        setTimeout(() => {
          errorMessage.textContent = '';
          errorMessage.style.display = 'none';
        }, 5000);
        return;
      }

      const data = {
        email,
        password,
      };
      console.log(data.email, data.password);
      try {
        const res = await axios.post(
          '/api/registration',
          {
            email: data.email,
            password: data.password,
          },
          {
            baseURL: 'https://jwt-form-server.herokuapp.com',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Access-Control-Allow-Origin': 'http://example.com/',
              SameSite: 'None',
              Secure: true,
            },
          }
        );
        if (res.data.error) {
          errorMessage.textContent = res.data.error;
          errorMessage.style.display = 'block';
          setTimeout(() => {
            errorMessage.style.display = 'none';
          }, 5000);
          return;
        }
        localStorage.setItem('token', res.data.accessToken);
        localStorage.setItem('user', res.data.user.login);
        window.location.href = '/personal-cabinet.php';
      } catch (error) {
        if (error.response) {
          errorMessage.textContent = error.res.data.error;
        } else {
          console.log(error.data, error.message, 'het');
          errorMessage.textContent = `Помилка при відправці запиту на сервер. ${error.message}`;
        }
        errorMessage.style.display = 'block';
        setTimeout(() => {
          errorMessage.style.display = 'none';
        }, 5000);
      }
    });
}
handleRegistration();

//=============SLIDER NEWS===========

const imagesArr = [
  'images/products/1n.png',
  'images/products/2n.png',
  'images/products/3n.png',
  'images/products/4n.png',
  'images/products/5n.png',
  'images/products/6n.png',
  'images/products/7n.png',
  'images/products/8n.png',
  'images/products/9n.png',
  'images/products/10n.png',
  'images/products/11n.png',
  'images/products/12n.png',
  'images/products/13n.png',
  'images/products/14n.png',
  'images/products/15n.png',
];

const cardWrap = document.querySelector('.card-wrap');

if (cardWrap) {
  addSlide(imagesArr.slice(0, 4));
  let start = 0;
  document.getElementById('right-arrow').addEventListener('click', () => {
    start += 4;
    let a = start;
    let b = start + 4;
    let k = 1;

    while (b > imagesArr.length) {
      b--;
      k++;
    }

    let source = imagesArr.slice(a, b);
    Array.from(document.querySelectorAll('.card-wrap>.item')).forEach(
      (item, i) => {
        setTimeout(() => {
          item.style.transform = 'translateX(-100vw)';
        }, i * 50);
      }
    );

    setTimeout(() => {
      Array.from(document.querySelectorAll('.card-wrap>.item')).forEach(
        (item) => item.remove()
      );
      

      if (k !== 1) {
        source = [...source, ...imagesArr.slice(0, k)];
        addSlide(source, true, false);
        start = k - 1 - 4;
      } else {
        addSlide(source, true, false);
      }
    }, 250);
  });

  document.getElementById('left-arrow').addEventListener('click', () => {
    start = start === 0 ? imagesArr.length : start;
    const a = start;
    let b = start - 4;
    let k = 0;
    while (b < 0) {
      b++;
      k++;
    }

    const source = imagesArr.slice(b, a);
    Array.from(document.querySelectorAll('.card-wrap>.item')).forEach(
      (item, i) => {
        setTimeout(() => {
          item.style.transform = 'translateX(100vw)';
        }, 250 / (i + 1));
      }
    );
    setTimeout(() => {
      Array.from(document.querySelectorAll('.card-wrap>.item')).forEach(
        (item) => item.remove()
      );

      if (k !== 0) {
        let source = imagesArr.slice(imagesArr.length - k, imagesArr.length);
        source = [...source, ...imagesArr.slice(b, a)];
        addSlide(source, true);
        start = imagesArr.length - k;
      } else {
        addSlide(source, true);
        start -= 4;
      }
    }, 200);
  });

  function addSlide(source, isAnimate = false, isLeft = true) {
    source.forEach((item, i) => {
      const div = document.createElement('div');
      cardWrap.appendChild(div);
      if (isAnimate) {
        div.style.transform = `${isLeft ? "translateX(-100vw)" : "translateX(100vw)"} `;
        setTimeout(() => {
          addImage(div, item, i);
          div.style.transform = 'translateX(0)';
        }, `${isLeft ? 250 / (i + 1): (i+1)*50}`);
      } else {
        addImage(div, item, i);
      }
    });
  }

  function addImage(div, item, i) {
    const img = document.createElement('img');
    div.appendChild(img);
    img.setAttribute('src', item);
    div.classList.add('item');
    img.setAttribute('alt', `photo-${i + 1}`);
  }
}
