// HTML//
const generateHTML = (pageName) => {
    return `<div class='c'>
    <div class='_404'>404</div>
    <br>
    <div class='_1'> GET BACK TO WORK</div>
    <div class='_2'> STUDYING > ${pageName}</div>
</div>`;
};


// CSS//
const generateSTYLING = () => {
    return `<style> @import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background: grey;
      color: black;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
    .c {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
    }
    ._404 {
      font-size: 220px;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 250px;
      letter-spacing: 15px;
      color: rgb(195, 35, 35);
    }
    ._1 {
      text-align: center;
      display: block;
      position: relative;
      letter-spacing: 8px;
      font-size: 3em;
      line-height: 80%;
    }
    ._2 {
      text-align: center;
      display: block;
      position: relative;
      font-size: 20px;
      padding:12px;
    }
    .text {
      font-size: 70px;
      text-align: center;
      position: relative;
      display: inline-block;
      margin: 19px 0px 0px 0px;
      /* top: 256.301px; */
      z-index: 3;
      width: 100%;
      line-height: 1.2em;
      display: inline-block;
    }
    
    </style>`
}


// JS//
switch (window.location.hostname) {
    case "www.youtube.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("YOUTUBE");
        break;
    case "www.twitter .com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("TWITTER");
        break;
    case "www.facebook.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("FACEBOOK");
        break;
    case "www.netflix.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("NETFLIX");
        break;

}