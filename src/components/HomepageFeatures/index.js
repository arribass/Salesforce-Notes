import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
{
  title: 'Notas Claras y Prácticas',
  Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  description: (
    <>
      Apuntes estructurados sobre Apex, LWC, SOQL, Integraciones y Arquitectura.
      Explicaciones directas al grano, con ejemplos reales listos para usar en proyectos.
    </>
  ),
},
{
  title: 'Preparación para Certificaciones',
  Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  description: (
    <>
      Resúmenes organizados por certificación: Administrator, Platform Developer,
      Integration Architecture y más. Ideal para repasar rápido y consolidar conceptos clave.
    </>
  ),
},
{
  title: 'Quizzes Interactivos',
  Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  description: (
    <>
      Pon a prueba tus conocimientos con quizzes dinámicos directamente en la web.
      Practica preguntas tipo examen y valida lo que has aprendido en cada módulo.
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
