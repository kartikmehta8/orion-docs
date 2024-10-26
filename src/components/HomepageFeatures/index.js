import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Plug-and-Play Architecture',
    Svg: require('@site/static/img/undraw_building_re_xfcm.svg').default,
    description: (
      <>
        Designed with a modular architecture, allowing developers to seamlessly manage everything without altering core files.
      </>
    ),
  },
  {
    title: 'Powerful CLI Tool',
    Svg: require('@site/static/img/undraw_mind_map_re_nlb6.svg').default,
    description: (
      <>
        A CLI that generates routes, controllers, and database configurations, saving time and minimizing manual effort.
      </>
    ),
  },
  {
    title: 'Powered by Express',
    Svg: require('@site/static/img/undraw_open_source_-1-qxw.svg').default,
    description: (
      <>
        Built on <code>Express.js</code> framework, the project leverages Express&apos;s robust routing, middleware*, and performance capabilities.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
