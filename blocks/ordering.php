
<section class="order">
      <div class="container">
        <div class="head-order">
          <div><img src="/images/head-mark-left.png" alt=""></div>
          <div><h1>Оформлення заказу</h1></div>
          <div><img src="/images/head-mark-right.png" alt=""></div>
        </div>
        <form action="#">
          <div class="order-forms-wrap">
            <div class="order-forms">
              <div class="your-contact">
                <h3>Ваші контакти</h3>
                <input type="text" name="username" placeholder="Ім'я">
                <input type="text" name="secondname" placeholder="Прізвище">
                <input type="tel" name="tell" placeholder="Телефон" required>
                <input type="email" name="mail" placeholder="E-mail" required>
                <textarea name="coment" placeholder="Коментарій"></textarea>
              </div>
            <hr>
              <div class="delivery">
                <h3>Доставка</h3>
                <input list="allregion" id="region" name="region" placeholder="Область" />
                <datalist id="allregion">
                  <option value="Київська">
                  <option value="Івано-Франківська">
                  <option value="Львівська">
                  <option value="Тернопільська">
                  <option value="Закарпатська">
                </datalist>
                <input list="allcity" id="city" name="city" placeholder="Місто" />
                <datalist id="allcity">
                  <option value="Київ">
                  <option value="Івано-Франківськ">
                  <option value="Львівс">
                  <option value="Тернопіль">
                  <option value="Ужгород">
                </datalist>
                <input list="alldepartment" id="department" name="department" placeholder="Відділення" />
                <datalist id="alldepartment">
                  <option value="Відділення 1, вул. Київська">
                  <option value="Відділення 2, вул. Шевченка">
                  <option value="Відділення 3, вул. Залізнична">
                </datalist>
                <input type="text" name="zip-code" placeholder="Поштовий індекс">
              </div>
            <hr>
              <div class="payments">
                <h3>Оплата</h3>
                <div><input type="radio" name="payment">Готівка</div>
                <div><input type="radio" name="payment">Оплата картою</div>
                <div><input type="radio" name="payment">Оплата картою онлайн</div>
              </div>
            </div>
            <div class="ordered-goods">
              <div class="ordered-goods-wrap">
                <h3>Товари у кошику</h3>
                <div class="result">
                  <div class="goods">
                    <div class="goods-photo"><img src="/images/gerbicide1.png" alt="Гербіцид"></div>
                    <div class="goods-name"><p>Гербіцид Комманд&#174;, ФМС УКРАЇНА</p></div>
                    <div class="cancel"><img src="/images/cancel2.svg" alt="Видалити товар"></div>
                    <div class="info">
                      <div><p class="price">7814,63 грн</p></div>
                      <div><p class="number">x1</p></div>
                    </div>
                  </div>
                  <div class="goods">
                    <div class="goods-photo"><img src="/images/gerbicide1.png" alt="Гербіцид"></div>
                    <div class="goods-name"><p>Гербіцид Комманд&#174;, ФМС УКРАЇНА</p></div>
                    <div class="cancel"><img src="/images/cancel2.svg" alt="Видалити товар"></div>
                    <div class="info">
                      <div><p class="price">7814,63 грн</p></div>
                      <div><p class="number">x1</p></div>
                    </div>
                  </div>
                  <div class="shopping-summary">
                    <div><p>Разом: <span>2 товари</span></p></div>
                    <div><p>На суму: <span>15 629,26</span></p></div>
                  </div>
                  <div class="confirm-the-order">
                    <input type="submit" value="Підтвердити заказ">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>