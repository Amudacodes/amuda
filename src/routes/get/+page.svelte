<head>
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    
  <section id="contact">
  
    <h1 class="section-header">Get In Touch</h1>
    
    <div class="contact-wrapper">
    
    <!-- Right contact page --> 
<!--     
      
      <form id="contact-form" class="form-horizontal" role="form">
         
        <div class="form-group">
          <div class="col-sm-12">
            <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required>
          </div>
        </div>
  
        <div class="form-group">
          <div class="col-sm-12">
            <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required>
          </div>
        </div>
  
        <textarea class="form-control" placeholder="MESSAGE" name="message" required></textarea>
        
        <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
          <div class="alt-send-button">
            <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
          </div>
        
        </button>
        
      </form> -->
      <!-- <form id="contact-form" class="w-full m-w-[400px] max-w-lg mx-auto">
        <div class="mb-4">
          <input type="text" class="form-input px-4 py-3 rounded-md shadow-sm w-full" id="name" name="name" placeholder="NAME" required>
        </div>
        <div class="mb-4">
          <input type="email" class="form-input px-4 py-3 rounded-md shadow-sm w-full" id="email" name="email" placeholder="EMAIL" required>
        </div>
        <div class="mb-4">
          <textarea class="form-textarea px-4 pl py-3 pb-[8rem] rounded-md shadow-sm " id="message" name="message" placeholder="MESSAGE" required></textarea>
        </div>
        <div class="mb-4">
          <button class="bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300" type="submit">Send</button>
        </div>
      </form> -->
      <div class=" flex flex-col gap-[1rem] bg-none md:w-[40%] lg:w-[50%] pt-[2rem]">
        <div class=" flex-col lg:flex-row flex gap-[1rem]">
            <input type="text" placeholder="NAME" required class=" outline-none py-[.5rem] px-[1rem] border-none bg-[#23286b] rounded-md transition-all duration-300 delay-300 text-white hover:shadow-2xl w-full" >
            
        </div>
        <input type="email" placeholder="Your Email" required class=" outline-none py-[.5rem] px-[1rem] border-none bg-[#23286b]  text-white rounded-md transition-all duration-300 delay-300  hover:shadow-2xl" >
        <textarea cols="20" rows="8" placeholder=" Your questions" required class=" outline-none py-[.5rem] px-[1rem] border-none bg-[#23286b]  text-white rounded-md transition-all duration-300 delay-300  hover:shadow-2xl" ></textarea>
        <button type="submit" class=" outline-none border-[.1rem] border-[#23286b] py-[.3rem] mx-[4rem] lg:mx-[10rem] mt-[1rem] text-xl hover:bg-[#23286b] rounded-md transition-all delay-300 duration-300 hover:text-white">Send</button>
    </div>


      
    <!-- Left contact page --> 
      
        <div class="direct-contact-container">
  
          <ul class="contact-list">
            <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">City, State</span></i></li>
            
            <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
            
            <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
            
          </ul>
  
          <hr>
          <ul class="social-media-list">
            <li><a href="#" target="_blank" class="contact-icon">
              <i class="fa fa-github" aria-hidden="true"></i></a>
            </li>
            <li><a href="#" target="_blank" class="contact-icon">
              <i class="fa fa-codepen" aria-hidden="true"></i></a>
            </li>
            <li><a href="#" target="_blank" class="contact-icon">
              <i class="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
            <li><a href="#" target="_blank" class="contact-icon">
              <i class="fa fa-instagram" aria-hidden="true"></i></a>
            </li>       
          </ul>
          <hr>
  
          <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
  
        </div>
      
    </div>
    
  </section>  
    
    
    
  









  <section id="contact" class="py-10 bg-gray-100">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-center mb-10">Get In Touch</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form id="contact-form" class="bg-white rounded-lg shadow-md p-6" role="form">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" class="form-input rounded-md shadow-sm w-full" id="name" placeholder="Enter your name" name="name" value="" required>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" class="form-input rounded-md shadow-sm w-full" id="email" placeholder="Enter your email" name="email" value="" required>
          </div>
          <div class="mb-4">
            <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
            <textarea class="form-textarea rounded-md shadow-sm w-full" rows="5" placeholder="Enter your message" name="message" required></textarea>
          </div>
          <button class="btn btn-primary w-full" id="submit" type="submit" value="SEND">Send</button>
        </form>
        <div class="bg-white rounded-lg shadow-md p-6">
          <ul class="list-none">
            <li class="mb-4">
              <div class="flex items-center">
                <i class="fas fa-map-marker-alt text-gray-400 mr-4"></i>
                <span class="text-gray-700">City, State</span>
              </div>
            </li>
            <li class="mb-4">
              <div class="flex items-center">
                <i class="fas fa-phone-alt text-gray-400 mr-4"></i>
                <a href="tel:1-212-555-5555" class="text-gray-700">+234 903-1617-656</a>
              </div>
            </li>
            <li class="mb-4">
              <div class="flex items-center">
                <i class="fas fa-envelope text-gray-400 mr-4"></i>
                <a href="mailto:#" class="text-gray-700">hitmeup@gmail.com</a>
              </div>
            </li>
          </ul>
          <hr class="my-6 border-gray-300">
          <ul class="flex list-none">
            <li class="mr-6">
              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li class="mr-6">
              <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500">
                <i class="fab fa-codepen"></i>
              </a>
            </li>
           </div>
  </section>















  
</body>  

















  <style>
    body {
  margin: 0;
  padding: 0;
  background-color: #f80808;
  padding-bottom: 100px;
}

#contact {
  width: 100%;
  height: 100%;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 300 30px 'Oswald', sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 6px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
}
/* 
.form-horizontal {
 
  max-width: 400px;
  font-family: 'Lato';
  font-weight: 400;
}

.form-control, 
textarea {
  max-width: 400px;
  background-color: #000000;
  color: #fff;
  letter-spacing: 1px;
} */

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 400px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.alt-send-button {
  width: 400px;
  height: 34px;
  transition: all .2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 700 12px 'Lato', sans-serif;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: #aaa;
}

.contact-text {
  font: 300 18px 'Lato', sans-serif;
  letter-spacing: 1.9px;
  color: #bbb;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: #bbb;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #fff;
  text-decoration: none;
}


/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative; 
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27,27,27);
  cursor: pointer; 
  transition: all .2s ease-in-out;
}

.social-media-list li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all .2s ease-in-out;
}

.social-media-list li:hover {
  background-color: #fff; 
}

.social-media-list li:hover:after {
  opacity: 1;  
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
}

.social-media-list li:hover a {
  color: #000;
}

.copyright {
  font: 200 14px 'Oswald', sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255,255,255,.6);
}

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container, .form-horizontal {
    margin: 0 auto;
  }  
  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }    
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {

  .direct-contact-container, .form-wrapper {
    float: none;
    margin: 0 auto;
  }  
  .form-control, textarea {
    
    margin: 0 auto;
  }
 
  
  .name, .email, textarea {
    width: 280px;
  } 
  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }  
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
  
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
  </style>
















<section id="contact" class="py-10 bg-[#000000]">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="section-header">Get In Touch</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <form id="contact-form" class="bg-[#0e0d0d] rounded-lg shadow-md p-6" role="form">
        <div class="mb-4">
          <!-- <label for="name" class="block text-gray-700 font-bold mb-2">Name</label> -->
          <input type="text" class="form-input p-[.4rem] border-white bg-transparent text-white border-[.1rem] hover:border-[#27AE60] rounded-md shadow-sm w-full" id="name" placeholder="NAME" name="name" value="" required>
        </div>
        <div class="mb-4">
          <!-- <label for="email" class="block text-gray-700 font-bold mb-2">Email</label> -->
          <input type="email" class="form-input p-[.4rem] border-white bg-transparent text-white border-[.1rem] hover:border-[#27AE60] rounded-md shadow-sm w-full" id="email" placeholder="EMAIL" name="email" value="" required>
        </div>
        <div class="mb-4">
          <!-- <label for="message" class="block text-gray-700 font-bold mb-2">Message</label> -->
          <textarea class="form-textarea rounded-md p-[.4rem] border-white bg-transparent text-white border-[.1rem] hover:border-[#27AE60] shadow-sm w-full" rows="7" cols="30" placeholder="MESSAGE" name="message" required></textarea>
        </div>
        <button class="btn btn-primary p-[.6rem] rounded-md shadow-sm bg-green-500 hover:bg-green-600" id="submit" type="submit" value="SEND">
          <div class="">
            <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
          </div>
        </button>
        
      </form>


      <!-- <i class='bx bx-name='send'></i> -->
      <!-- <box-icon name='send' animation='fade-right' ></box-icon> -->
      <div class="direct-contact-container">
  
        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Abuja, Nigeria</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(234) 903-1617-656</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">amdacodes@gmail.com</a></span></i></li>
          
        </ul>

        <hr>
        <ul class="social-media-list">
          <li>
            <a href="#" target="_blank" class="contact-icon">
            <i class='bx bxl-github' aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class='bx bxl-twitter' aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class='bx bxl-linkedin-square' aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class='bx bxl-youtube' aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr>
        <i class='bx bxl-github'></i>
        <box-icon type='logo' name='linkedin-square'></box-icon>
        <box-icon type='logo' name='github'></box-icon>
        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  
      </div>
    
</section>




