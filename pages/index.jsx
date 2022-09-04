import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Title from '../src/components/UI/Title'

import backgroundPic from '../public/assets/background.jpg'
import backgroundMobilePic from '../public/assets/background_mobile.png'

import styles from './pages.module.scss'
import LineWithArrow from '../src/components/UI/LineWithArrow'
import Popup from '../src/components/Popup'
import ContactUs from '../src/components/ContactUs'
import Button from '../src/components/UI/Button'
import useWindowSize from '../src/hooks'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, Zoom } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

SwiperCore.use([Navigation, Pagination, Scrollbar, Zoom])

const helloAnimation = {
  hidden: {
    opacity: 0,
  },

  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 1 },
  }),
}
const backgroundAnimation = {
  hidden: {
    opacity: 0,
    background: 'rgba(0,0,0,0)',
  },
  visible: (custom) => ({
    opacity: 1,
    background: 'rgba(0, 0, 0, 0.25)',
    transition: { delay: custom * 1 },
  }),
}
const textAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 10,
    opacity: 1,
    transition: { delay: custom * 1 },
  }),
}
const drawAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: custom * 1,
        type: 'spring',
        duration: 1.5,
        bounce: 0,
      },
      opacity: { delay: custom * 1 },
    },
  }),
}
const triangleAnimation = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: custom * 1 + 1.2,
        type: 'spring',
        duration: 0.1,
        bounce: 0,
      },
      opacity: { delay: custom * 1 + 1.2 },
    },
  }),
}
const buttonAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
  },
}

const mobileWidth = 767

const imagesFirstSlide = [
  {
    id: '1',
    src: 'https://picsum.photos/300/200?random=1',
    text: 'Классический флорариум с суккулентами (фото 1,2,3,4,5)',
  },
  {
    id: '2',
    src: 'https://picsum.photos/300/200?random=2',
    text: 'Флорариум Бонсай (фото 6,7)',
  },
  {
    id: '3',
    src: 'https://picsum.photos/300/200?random=3',
    text: 'Флорариум Бонсай (фото 8,9)',
  },
  {
    id: '4',
    src: 'https://picsum.photos/300/200?random=4',
    text: 'Флорариум с водоемом или с водопадом (фото 10)',
  },
  {
    id: '5',
    src: 'https://picsum.photos/300/200?random=5',
    text: 'Орхидариум',
  },
]
const imagesSecondSlide = [
  {
    id: '1',
    src: 'https://picsum.photos/300/200?random=1',
    text: 'Капля резная',
  },
  {
    id: '2',
    src: 'https://picsum.photos/300/200?random=2',
    text: 'Капля классическая (фото 2)',
  },
  {
    id: '3',
    src: 'https://picsum.photos/300/200?random=3',
    text: 'Мега шар (фото 3)',
  },
  {
    id: '4',
    src: 'https://picsum.photos/300/200?random=4',
    text: 'Философский камень (фото 4)',
  },
  {
    id: '5',
    src: 'https://picsum.photos/300/200?random=5',
    text: 'Ваза вертикальная (фото 5)',
  },
  {
    id: '6',
    src: 'https://picsum.photos/300/200?random=6',
    text: 'Чаша (фото 6)',
  },
  {
    id: '7',
    src: 'https://picsum.photos/300/200?random=7',
    text: 'Чаша скошенная (фото 7)',
  },
  {
    id: '8',
    src: 'https://picsum.photos/300/200?random=8',
    text: 'Бокал (фото 8)',
  },
  {
    id: '9',
    src: 'https://picsum.photos/300/200?random=9',
    text: 'Куб (фото 9)',
  },
  {
    id: '10',
    src: 'https://picsum.photos/300/200?random=10',
    text: 'Додекаэдр (фото 10)',
  },
  {
    id: '11',
    src: 'https://picsum.photos/300/200?random=11',
    text: 'Бутыль закрытая (фото 11)',
  },
]
const imagesThirdSlide = [
  {
    id: '1',
    src: 'https://picsum.photos/300/200?random=1',
    text: 'Суккулент соло (фото 1,2,3)',
  },
  {
    id: '2',
    src: 'https://picsum.photos/300/200?random=2',
    text: 'Суккуленты микс (фото 4,5,6,7)',
  },
  {
    id: '3',
    src: 'https://picsum.photos/300/200?random=3',
    text: 'Кактус соло (фото 8,9)',
  },
  {
    id: '4',
    src: 'https://picsum.photos/300/200?random=4',
    text: 'Кактусы микс ( фото 10,11)',
  },
  {
    id: '5',
    src: 'https://picsum.photos/300/200?random=5',
    text: 'Коктейль из суккулентов и кактусов (фото 12,13,14)',
  },
  {
    id: '6',
    src: 'https://picsum.photos/300/200?random=6',
    text: 'Орхидея мини (фото 15)',
  },
  {
    id: '7',
    src: 'https://picsum.photos/300/200?random=7',
    text: 'Тропический микс (фото 16,17,18)',
  },
  {
    id: '8',
    src: 'https://picsum.photos/300/200?random=8',
    text: 'Коктейль из орхидеи и тропических растений (фото 19)',
  },
  {
    id: '9',
    src: 'https://picsum.photos/300/200?random=9',
    text: 'Бонсай (фото 20)',
  },
]
const imagesFourthSlide = [
  {
    id: '1',
    src: 'https://picsum.photos/300/200?random=1',
    text: 'Табличка с надписью (фото 1,2,3,4,5)',
  },
  {
    id: '2',
    src: 'https://picsum.photos/300/200?random=2',
    text: 'Сердце (фото 6)',
  },
]

const linePath = 'M44,21 C129,229 390,0 544,148'
const reverseLinePath = 'M544,75 C371,183 183,15 44,164'
const lastLinePath = 'M544,75 C421,183 303,15 274,164'

const linePathMobile = 'M120,36 C115,195 201,0 165,173'
const reverseLinePathMobile = 'M165,37 C229,198 56,10 122,180'
const lastLinePathMobile = 'M179,31 C287,197 0,30 83,174'

const Homepage = () => {
  const { width } = useWindowSize()
  const [widthResize, setWidthResize] = useState(0)

  const [isOpen, setOpen] = useState(false)

  const onClose = (e) => {
    e.preventDefault()
    setOpen(false)
  }

  useEffect(() => {
    setWidthResize(width)
  }, [width])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 0.5, duration: 1 }}>
        <Image
          src={width <= mobileWidth ? backgroundMobilePic : backgroundPic}
          layout='fill'
          alt='florarium'
        />
      </motion.div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        custom={2}
        viewport={{ once: true }}
        variants={backgroundAnimation}
        className={styles.background_wrapper}>
        <motion.span
          variants={helloAnimation}
          custom={3}
          className={styles.background_text}>
          <Title custom={1}>Дорогой гость!</Title>
        </motion.span>
        <motion.span
          variants={helloAnimation}
          custom={3.5}
          className={styles.background_text}>
          <Title>Мы рады видеть Вас на нашем сайте</Title>
        </motion.span>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.1, once: true }}
        className={styles.index_content_wrapper}>
        <motion.span variants={helloAnimation} custom={0.2}>
          <Title className='text_center'>Процесс созидания</Title>
        </motion.span>
        <motion.div
          variants={textAnimation}
          custom={1}
          className={`${styles.content_text_wrapper}`}>
          <div className={styles.content_image_wrapper}>
            <span className={styles.content_text}>
              <Title>Шаг 1 Стиль</Title>
              Чтобы создать свой микромир радости и вдохновения для начала
              давайте определимся со стилем
            </span>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop
              params={{
                zoom: {
                  enabled: true,
                },
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              {imagesFirstSlide.map((image) => (
                <SwiperSlide zoom key={image.id}>
                  <div className={styles.image_wrapper}>
                    <Image
                      src={image.src}
                      alt='product'
                      width={300}
                      height={200}
                    />
                  </div>

                  <span className={styles.image_text}>{image.text}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        <LineWithArrow
          triangleAnimation={triangleAnimation}
          drawAnimation={drawAnimation}
          id={1}
          linePath={widthResize <= mobileWidth ? linePathMobile : linePath}
          custom={1}
          width={widthResize}
        />
        <motion.div
          variants={textAnimation}
          custom={3}
          className={styles.content_text_wrapper}>
          <div className={`${styles.content_image_wrapper} ${styles.left}`}>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop
              params={{
                zoom: {
                  enabled: true,
                },
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              {imagesSecondSlide.map((image) => (
                <SwiperSlide zoom key={image.id}>
                  <div className={styles.image_wrapper}>
                    <Image
                      src={image.src}
                      alt='product'
                      width={300}
                      height={200}
                    />
                  </div>

                  <span className={styles.image_text}>{image.text}</span>
                </SwiperSlide>
              ))}
            </Swiper>
            <span className={`${styles.content_text} ${styles.right}`}>
              <Title>Шаг 2 Форма</Title>
              Давайте выберем форму для Вашего флорариума. Форма является
              сосудом для микромира и должна быть красивой, чтобы радовать Вас и
              уютной для Ваших растений
            </span>
          </div>
        </motion.div>
        <LineWithArrow
          triangleAnimation={triangleAnimation}
          drawAnimation={drawAnimation}
          id={3}
          linePath={
            widthResize <= mobileWidth ? reverseLinePathMobile : reverseLinePath
          }
          custom={3}
          width={widthResize}
        />
        <motion.div
          variants={textAnimation}
          custom={5}
          className={styles.content_text_wrapper}>
          <div className={styles.content_image_wrapper}>
            <span className={styles.content_text}>
              <Title>Шаг 3 Растения</Title>
              Теперь перейдем к наполнению Вашего флорариума растениями-жителями
            </span>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop
              params={{
                zoom: {
                  enabled: true,
                },
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              {imagesThirdSlide.map((image) => (
                <SwiperSlide zoom key={image.id}>
                  <div className={styles.image_wrapper}>
                    <Image
                      src={image.src}
                      alt='product'
                      width={300}
                      height={200}
                    />
                  </div>

                  <span className={styles.image_text}>{image.text}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
        <LineWithArrow
          triangleAnimation={triangleAnimation}
          drawAnimation={drawAnimation}
          id={5}
          linePath={widthResize <= mobileWidth ? linePathMobile : linePath}
          custom={5}
          width={widthResize}
        />
        <motion.div
          variants={textAnimation}
          custom={7}
          className={styles.content_text_wrapper}>
          <div className={`${styles.content_image_wrapper} ${styles.left}`}>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop
              params={{
                zoom: {
                  enabled: true,
                },
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              {imagesFourthSlide.map((image) => (
                <SwiperSlide zoom key={image.id}>
                  <div className={styles.image_wrapper}>
                    <Image
                      src={image.src}
                      alt='product'
                      width={300}
                      height={200}
                    />
                  </div>
                  <span className={styles.image_text}>{image.text}</span>
                </SwiperSlide>
              ))}
            </Swiper>
            <span className={`${styles.content_text} ${styles.right}`}>
              <Title>Шаг 4 Украшения</Title>
              Если Вы решили подарить флорариум, то можно выбрать
              топперы-пожелания для выражения Ваших чувств
              <br />
              <br /> Теперь Вы готовы к заказу
              <br />
              Свяжитесь с нами и мы с радостью создадим для Вас именно ВАШ
              флорариум вдохновения, жизни и красоты
            </span>
          </div>
        </motion.div>
        <LineWithArrow
          triangleAnimation={triangleAnimation}
          drawAnimation={drawAnimation}
          id={7}
          linePath={
            widthResize <= mobileWidth ? lastLinePathMobile : lastLinePath
          }
          custom={7}
          width={widthResize}
        />

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.1, once: true }}
          variants={buttonAnimation}>
          <Button onSubmit={() => setOpen(true)} className={styles.main_button}>
            Свяжитесь с нами!
          </Button>
        </motion.div>

        <Popup isOpened={isOpen} onClose={onClose} title={'Contact!'}>
          <ContactUs buttonName={'Оформить заявку'} />
        </Popup>
      </motion.div>
    </>
  )
}

export default Homepage
