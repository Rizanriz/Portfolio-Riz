import React from 'react';
import styles from './style.module.css';

const Icons = () => {
  return (
    <div>
    <h1 className='text-white text-center mb-16 text-3xl font-extrabold font-serif'>Connect / React Me..✨</h1>
    <ul className={styles.wrapper}>
      <li className={`${styles.icon} ${styles.facebook}`}>
        <span className={styles.tooltip}>Facebook</span>
        <a href="">
        <svg
          viewBox="0 0 320 512"
          height="1.2em"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
        </a>
      </li>
      <li className={`${styles.icon} ${styles.twitter}`}>
        <span className={styles.tooltip}>Twitter</span>
        <a href="https://x.com/Rizwan_Rizz_" target='blank'>
        <svg
          height="1.8em"
          fill="currentColor"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
        </svg>
        </a>
      </li>
      <li className={`${styles.icon} ${styles.instagram}`}>
        <span className={styles.tooltip}>Instagram</span>
        <a href="https://www.instagram.com/riz_z_z_/" target='blank'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.2em"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg>
        </a>
      </li>
      <li className={`${styles.icon} ${styles.LinkedIn}`}>
        <span className={styles.tooltip}>LinkedIn</span>
        <a href="https://www.linkedin.com/in/mohammedrizwanka/" target='blank'>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="1.2em"
            fill="currentColor"
            >
            <path
                d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.851 0-2.136 1.445-2.136 2.939v5.667H9.359V9h3.414v1.561h.049c.475-.9 1.637-1.849 3.37-1.849 3.603 0 4.269 2.368 4.269 5.451v6.289zM5.337 7.433c-1.144 0-2.068-.924-2.068-2.068s.924-2.068 2.068-2.068c1.143 0 2.068.924 2.068 2.068 0 1.144-.924 2.068-2.068 2.068zM6.96 20.452H3.715V9h3.245v11.452zM22.225 0H1.771C.79 0 0 .789 0 1.771v20.451C0 23.21.79 24 1.771 24h20.451c.981 0 1.771-.79 1.771-1.771V1.771C24 .79 23.21 0 22.225 0z"
            />
        </svg>
        </a>
      </li>
      <li className={`${styles.icon} ${styles.Github}`}>
        <span className={styles.tooltip}>Github</span>
        <a href="https://github.com/Rizanriz" target='blank'>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="1.2em"
            fill="currentColor"
            >
            <path
                d="M12 2C6.477 2 2 6.48 2 12.005a10.006 10.006 0 006.836 9.488c.5.09.682-.215.682-.479 0-.237-.008-.868-.013-1.703-2.782.605-3.37-1.342-3.37-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.527 2.341 1.086 2.91.831.092-.646.349-1.086.635-1.336-2.22-.253-4.555-1.113-4.555-4.951 0-1.092.39-1.985 1.03-2.683-.104-.254-.447-1.27.098-2.645 0 0 .84-.27 2.75 1.025A9.551 9.551 0 0112 6.844a9.544 9.544 0 012.504.338c1.91-1.295 2.748-1.025 2.748-1.025.546 1.375.203 2.391.1 2.645.64.698 1.029 1.59 1.029 2.683 0 3.848-2.338 4.695-4.565 4.944.358.308.678.92.678 1.854 0 1.338-.012 2.418-.012 2.747 0 .266.18.573.688.475A10.006 10.006 0 0022 12.005C22 6.48 17.523 2 12 2z"
            />
        </svg>
        </a>
      </li>
    </ul>
    </div>
  );
};

export default Icons;