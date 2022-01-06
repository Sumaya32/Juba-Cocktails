import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
     <div className={styles.smallContainer}>
       <div className={styles.footerminiContainer}>

         <ul className={styles.socialList}>
          <li className={styles.followus}> Follow us</li>
           <li><a href="https://www.facebook.com/" target="_blank"><img className={styles.facebook} src="/facebook_icon.png" /></a></li>
           <li><a href="https://www.twitter.com/" target="_blank"><img className={styles.twitter} src="/twitter-icon.png" /></a></li>
           <li><a href="https://www.instagram.com/" target="_blank" ><img className={styles.Instagram} src="/Instagram-icon.png" /></a></li>
           <li><a href="https://www.instagram.com/" target="_blank" ><img className={styles.Instagram} src="/pinterest.png" /></a></li>
           <li><a className={styles.activeLink}></a></li>
         </ul>
         
        <div>
        <div className={styles.copyright}>© Copyright 2021-2022</div>
        </div>
       </div>
       </div>
    </div>
  );
}

export default Footer;