import React from 'react';
import './Main.css'
import bgImage from '../../Assets/images/1649178191345.jpg'
import {Link} from "react-router-dom"
import image1 from '../../Assets/images/600x0_kdhhkcjqylbppsbh_jpg_663f.jpg'
import image2 from '../../Assets/images/bdc5ed09dd7e827d17ea69a1f533598a.png'
import image3 from '../../Assets/images/photo_2022-05-20_00-48-16.jpg'

const Main = () => {
  return (
    <div>
      <div className="hero" style={{backgroundImage: `url(${bgImage})`}}>
        <div className="hero-overlay "/>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Ragga Суши</h1>
            <p className="mb-5">Готовим не только красиво, но и вкусно 😋
              Доставляем в кратчайшие сроки 🚙.</p>
            <Link to="/menu"><span className="btn btn-active btn-primary">Посмотреть меню</span></Link>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="container">
          <div className="grid grid-cols-12 gap-2 ">
            <div className="xl:col-span-5 col-span-12 location">
              <p>Наше заведение: Турлыханова проспект, 30</p>
              <p>Рекомендуем посмотреть, где находится наше заведение</p>
              <p>Заказывайте еду домой, и наслаждайтесь вкусной едой</p>
            </div>
            <div className="xl:col-span-7 col-span-12 flex justify-center xl:justify-end">
              <iframe className=""
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2617.5352608554313!2d80.22004719455414!3d50.40348106856616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1652984945692!5m2!1sru!2skz"
                width="80%" height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
            </div>
          </div>
        </div>
      </div>
      <div className=" sub-hero bg-base-200">
        <div className="container">
          <div className="grid grid-cols-12 gap-2 mb-20">
            <div className="xl:col-span-4 col-span-12 flex justify-start">
              <img src={image1} className="rounded-xl shadow-2xl  xl:mt-0 mt-80" alt=""/>
            </div>
            <div className="xl:col-span-7 col-span-12 facts">
              <p>
                <b>Факт.1</b><br/>

                Первые роллы были в виде консервов. Употреблять роллы нужно сразу после приготовления. Если они постоят
                даже несколько часов в холодильнике, то их вкус будет совсем не такой, как изначально.

                С первых дней существования блюда, приготовление роллов было способом хранения морепродуктов. Ломтики
                филе рыбы солили и заворачивали в рис. затем клали под пресс. В таком виде блюдо лежало 2-3 недели, и
                только лотом оно могло храниться примерно год.

                <br/>
                <br/>
                  <b>Факт. 2</b><br/>
                В Японии пользуется огромной популярностью «живая» пицца. Тончайшие ломтики рыбы шевелятся от горячего пара, создавая ощущение блюда с живой начинкой.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" sub-hero bg-base-200">
        <div className="container">
          <div className="grid grid-cols-12 gap-2 ">

            <div className="xl:col-span-7 col-span-12 facts">
              <p>
                <b>Забавный факт.</b><br/>
                Женщинам не разрешалось быть поварами суши, так как считалось, что теплота женских рук может испортить вкус и качество рыбы.
                <br/>
                <br/>
                <b>Факт.4</b><br/>

                Самый оригинальный ролл -фугу. Для приготовления такого блюда понадобиться несколько лет обучения и специальная лицензия, ведь в его состав входят ядовитые иглобрюхие.
                Полакомиться ними сможет любой желающий, кроме императора Японии, котором употребление такого блюдя строго запрещено.
              </p>
            </div>
            <div className="xl:col-span-4 col-span-12 flex justify-end">
              <img src={image2} className="rounded-xl shadow-2xl" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
