<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />

<div>
    <div align="center">
      <a href="https://github.com/rhinejoel/youtube-clone">
        <img src="yt-web-client/public/youtube-logo.svg" alt="Logo" width="80" height="80">
      </a>
    <h3 align = "center"> YouTube Clone </h3>
    <p align = "center"> A barebones YouTube clone project! </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


### Built With
Used NextJS and TypeScript for the frontend and TypeScript for backend. Stored videos on GCS Storage buckets. Created GCS artifacts using Docker Images and ran Docker Container using Cloud Run. Used GCS Pub/Sub for detecting user uploaded video. Used Firebase Auth for user login and stored user and video metadata in Firestore.

* [![Next][Next.js]][Next-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Docker][Docker]][Docker-url]
* [![Firebase][Firebase]][Firebase-url]
* [![GCS][GCS]][GCS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>
    

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/rhinejoel/youtube-clone.svg?style=for-the-badge
[contributors-url]: https://github.com/rhinejoel/youtube-clone/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rhinejoel/youtube-clone.svg?style=for-the-badge
[forks-url]: https://github.com/rhinejoel/youtube-clone/network/members
[stars-shield]: https://img.shields.io/github/stars/rhinejoel/youtube-clone.svg?style=for-the-badge
[stars-url]: https://github.com/rhinejoel/youtube-clone/stargazers
[issues-shield]: https://img.shields.io/github/issues/rhinejoel/youtube-clone.svg?style=for-the-badge
[issues-url]: https://github.com/rhinejoel/youtube-clone/issues
[license-shield]: https://img.shields.io/github/license/rhinejoel/youtube-clone.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/joel-rhine

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[TypeScript]: https://img.shields.io/badge/typescript-35495E?style=for-the-badge&logo=typescript&logoColor=4FC08D
[TypeScript-url]: https://www.typescriptlang.org
[Docker]: https://img.shields.io/badge/docker-20232A?style=for-the-badge&logo=docker&logoColor=61DAFB
[Docker-url]: https://www.docker.com
[Firebase]: https://img.shields.io/badge/firebase-DD0031?style=for-the-badge&logo=firebase&logoColor=white
[Firebase-url]: https://firebase.google.com
[GCS]: https://img.shields.io/badge/GCS-4A4A55?style=for-the-badge&logo=googlecloud&logoColor=FF3E00
[GCS-url]: https://svelte.dev/
