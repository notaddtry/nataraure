import Image from 'next/image'
import React from 'react'
import Title from '../src/components/Title'

import styles from './pages.module.scss'

const Aboutpage = () => {
  return (
    <div className={styles.about_wrapper}>
      <Title custom={1}>О нас</Title>
      <div className={styles.about_info_wrapper}>
        <span className={styles.quote}>
          <b>Lorem</b> ipsum dolor sit amet consectetur adipisicing elit. Et,
          cupiditate accusantium illum sapiente quas deserunt consequuntur hic
          doloremque culpa, minus vel sequi iure nihil porro recusandae minima
          aut repellendus earum.
        </span>
        <Image src='/assets/phone.png' width={250} height={400} />
      </div>
      <div className={styles.about_content_wrapper}>
        <span>
          <b>Lorem</b> ipsum dolor sit amet, consectetur adipisicing elit. Sint,
          accusamus provident debitis in eos optio! Nobis distinctio itaque
          voluptas quod repudiandae, eaque aperiam earum excepturi facere
          facilis illum eligendi deleniti fugit sit, sed numquam. Distinctio
          unde laboriosam optio ullam voluptas qui exercitationem sequi quaerat
          voluptate. Expedita quidem aliquid libero error corrupti tenetur
          exercitationem enim facere! Veritatis soluta at ipsa, cum ab autem
          iste officiis quam laboriosam doloremque iusto aperiam consequuntur ut
          consectetur facere odit repudiandae libero esse quidem eligendi aut
          eius? Sunt, laboriosam incidunt a vel dolore omnis officia debitis
          iure, nam rem at quidem ut fugiat maxime ipsum amet dolores atque
          assumenda corrupti? Nostrum, molestiae. Dolorum deserunt itaque, dolor
          aspernatur commodi eius unde corporis debitis nobis, officiis numquam
          tempore magni. Sed minus libero assumenda quasi possimus, deserunt
          consequatur sequi amet, dolor consectetur, fugit delectus tempora eos
          fuga impedit. Itaque, saepe esse nemo porro est quam cumque doloremque
          iure rerum? Impedit in corporis quisquam eum dolorum incidunt magni,
          ex praesentium? Odio molestias possimus cum numquam magni eum facere
          id voluptate unde quod cumque, ducimus suscipit sit accusamus esse
          dolorum tempora. Recusandae sequi temporibus libero perspiciatis
          maxime minus nihil asperiores consectetur, porro officia ullam, animi
          perferendis cumque quae sed. Aliquam, magnam?
        </span>
      </div>
    </div>
  )
}

export default Aboutpage
