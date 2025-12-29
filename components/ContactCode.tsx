import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'nihaljangave.com',
    href: 'https://nihaljangave.com',
  },
  {
    social: 'email',
    link: 'nihaljangave@gmail.com',
    href: 'mailto:nihaljangave@gmail.com',
  },
  {
    social: 'github',
    link: 'nihaljangave-hash',
    href: 'https://github.com/nihaljangave-hash',
  },
  {
    social: 'linkedin',
    link: 'nihal-jangave-ab23793a2',
    href: 'https://www.linkedin.com/in/nihal-jangave-ab23793a2/',
  },
  {
    social: 'twitter',
    link: 'x.com/nihaljangave',
    href: 'https://x.com/nihaljangave',
  },
  {
    social: 'telegram',
    link: 't.me/nihaljangave',
    href: 'https://t.me/nihaljangave',
  },
  {
    social: 'peerlist',
    link: 'peerlist.io/nihaljangave',
    href: 'https://peerlist.io/nihaljangave',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
