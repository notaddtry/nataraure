import React from 'react'
import Image from 'next/image'

import Title from '../src/components/UI/Title'

import styles from './pages.module.scss'
import Link from 'next/link'

const Aboutpage = () => {
  return (
    <div className={styles.about_wrapper}>
      <Title custom={1}>О нас</Title>
      <div className={styles.about_info_wrapper}>
        <span className={`${styles.quote} sec_text`}>
          &quot;<b>Lorem</b> ipsum dolor sit amet consectetur adipisicing elit.
          Et, cupiditate accusantium illum sapiente quas deserunt consequuntur
          hic doloremque culpa, minus vel sequi iure nihil porro recusandae
          minima aut repellendus earum.&quot;
        </span>
        <Image
          src='https://picsum.photos/320/400'
          width={250}
          height={400}
          alt='florarium'
          className={styles.about_image}
        />
      </div>
      <div className={styles.about_content_wrapper}>
        <p className={styles.about_content_text}>
          <span>
            Меня зовут Наталья и я уже несколько лет создаю флорариумы для
            наполнения радостью и счастьем людских сердец!
          </span>
          <span>
            Флорариум-это микромир, в котором живут и развиваются растения
          </span>
          <span>
            Основным преимуществом флорариума перед срезанным букетом является
            его ЖИЗНЬ
          </span>
          <span>
            Вы можете наблюдать и участвовать в жизни растений, ухаживать за
            ними и даже размножать. Этот процесс созидания в нашем бешенном
            ритме жизни дает вдохновение и наполненность, которой, порой, так не
            хватает.
          </span>
          <span>
            Флорариум суккулентами/кактусами малоуходен и не потребует от Вас
            много сил
          </span>
          <span>
            Флорариум с орхидеями, бонсай и тропический микс нуждается в большем
            внимании, при этом отблагодарит Вас своей красотой и цветением
          </span>
          <span>
            Я с большой радостью создам для Вас именно Ваш флорариум и научу за
            ним ухаживать
          </span>
          <span>
            Вы можете сами выбрать все составляющие флорариума на{' '}
            <Link href='/'>
              <a className={styles.about_link}>главной странице</a>
            </Link>{' '}
            или перейти в{' '}
            <Link href='/items'>
              <a className={styles.about_link}>каталог</a>
            </Link>{' '}
            и выбрать уже готовые решения
          </span>
          <span className='text_bold'>
            ДЕРЗАЙТЕ! СОЗИДАЙТЕ! ВДОХНОВЛЯЙТЕСЬ и ТВОРИТЕ!
          </span>
        </p>
      </div>
    </div>
  )
}

export default Aboutpage
