import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Nihal Jangave</h1>
        <div className={styles.subtitle}>Sr. Data Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a Sr. Data Engineer from Pune, India. I primarily
              work with Python, SQL, and big data technologies.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on building scalable data pipelines with tools like
              Apache Spark, Kafka, and cloud platforms while ensuring data quality and performance.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>IQVIA</span> as
              Sr. Data Engineer, working with a team of engineers to build
              scalable data platforms and analytics solutions for healthcare.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve been leading the development efforts for bringing
              clinical data reviewing and recon to the platform. I also
              maintain our in-house product stack, infra and services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of writing for some amazing
              publications like{' '}
              <span className={styles.highlight}>100ms Blog</span>,{' '}
              <span className={styles.highlight}>LogRocket Blog</span>,{' '}
              <span className={styles.highlight}>DEV.to</span> and more as a
              freelance technical author.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I like to read a good
              dystopian novel, listen to calm piano music or just laze around.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
