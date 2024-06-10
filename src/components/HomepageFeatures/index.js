import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Out of The Box Simplified',
    Img: require('/static/img/Hashstudiosllc_1.png').default,
    description: (
      <>
        We prioritize simplicity, making our technology intuitive and
        easy to use, so you can get started quickly without a steep learning curve.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Img: require('/static/img/Hashstudiosllc_4.png').default,
    description: (
      <>
        With Hash Studios, you don't need to be a coding expert or Unity developer.
        We handle the complexities, allowing you to focus on your goals.
      </>
    ),
  },
  {
    title: 'Supported by Fellow Communities',
    Img: require('/static/img/Hashstudiosllc_5.png').default,
    description: (
      <>
        We partner with communities and receive support on Patreon.
        In return, we offer free prefabs and resources, fostering
        collaboration among developers.
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
