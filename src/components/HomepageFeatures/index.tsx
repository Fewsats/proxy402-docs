import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Secure by Design',
    image: '/img/secure-by-design.svg',
    description: (
      <>
        Proxy402 is built with security as the core principle, leveraging the X402 protocol,
        blockchain-based payments, and secure authentication.
      </>
    ),
  },
  {
    title: 'Instant Monetization',
    image: '/img/instant-monetization.svg',
    description: (
      <>
        Turn any URL into a monetized endpoint in seconds. No code changes required
        to your existing API or content. Just add a URL and set a price.
      </>
    ),
  },
  {
    title: 'Privacy-Preserving Payments',
    image: '/img/privacy-payments.svg',
    description: (
      <>
        Leverage blockchain payments for secure, private transactions. Users can pay
        without creating accounts or sharing personal information.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
