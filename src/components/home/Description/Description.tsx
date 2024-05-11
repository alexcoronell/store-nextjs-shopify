"use client"
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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';

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const cx = classNames.bind(styles);

  const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder,
  });


  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder='blur'
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}