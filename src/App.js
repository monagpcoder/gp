import React from 'react';
import './App.css';


function App() {
  return (
    <div className="container mx-auto py-1 md:py-1 px-1 w-2/2 bg-white ">
  <div className="flex items-strech justify-center flex-col md:flex-row  md:space-y-10 md:space-x-1 sm:space-x-2">
    <div className="bann flex flex-col md:flex-row items-strech rounded-xl justify-between bg-gray-50  py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
      <div className="flex flex-col justify-center md:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-semibold text-blue-1800 dark:text-white">vision</h1>
        <p className="text-base lg:text-xl text-gray-1800 dark:text-white mt-2"> <span className="font-bold">For every point of view</span></p>
      </div>
      <div className='w-1/2'>
        <img  src="https://cdn-icons-png.flaticon.com/512/5730/5730752.png" alt="" className="flex items-strech justify-center flex-col md:flex-row space-y-2 md:space-y-1 md:space-x-6 sm:space-x-8" />
      </div>
    </div>
  </div>

    <div>
    
      <header className='navbar'><h1>Get up six services in one subscribe with Apple One</h1> 
      <button className='button'>Learn more</button>
      </header>
      <div className='w-full flex justify-center '>
     <h1 className='text-6xl font-bold text-center   m-2 p-16 bg-white'>The simplecity of apple. <br/>In a credit card</h1>
     </div>
     
     <p className='p'>The MBA Program Structured & Scheduled to Allow a Fulfilling Work,<br/> Life & Study Balance. Enroll for MBA Program from India's <br/>Top Institute with High Corporate Acceptance. Apply. 1lakh+ active students. Latest learning system. 600+ Academic <br/>Faculty. Convenient fee payment. 18 Specialised Schools</p>
     <div className='    m-8   items-center ml-20  flex justify-center'>
     <img src='data:image/png;base64,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' class='icon ' alt='kk'></img> 
     <img src='data:image/png;base64,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' class='icon2 ' alt='kk'></img>
     </div>
     <div className='h-16 opacity-10 py-16 ml-20  '>
      <img src='https://www.shutterstock.com/image-photo/online-video-conference-social-distancing-260nw-1813788023.jpg' className='imgs -mt-20 bg-center ml-20'></img>
     </div>
     
     <div className='w-full bg-black flex items-center justify-between px-10 py-16'>
         <div className='w-1/2'>
              <h1 className='hi text-white text-5xl'> Impact Companies Matters</h1>
         </div>
         <div className=' p w-1/2 text-white text-2xl'>
          <p className='p2'>At Birdie, we believe that our elders deserve to age with confidence in the comfort of their own home We use digital products, home connected devices and machine learning to help the care community deliver better, preventative care. So that our loved ones can live at home longer, healthier and happier.
          </p>
         </div>
     </div>
     <div>
      <h1 className='team'>meet the team</h1>
     </div>
    <div className="container2 mx-auto py-1 md:py-1 px-1 w-2/1 bg-black ">
    <div className="flex items-strech justify-center flex-col md:flex-row  md:space-y-10 md:space-x-1 sm:space-x-2">
      <div className="flex flex-col md:flex-row items-strech rounded-xl justify-between bg-gray-50 dark:bg-white py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
        <div className="flex flex-col justify-center md:w-1/2">
          <h1 className=" door text-3xl lg:text-4xl font-semibold text-blue-1800 dark:text-white  ">Open your door </h1>
          <h1 className="text-3xl lg:text-4xl font-semibold text-blue-1800 dark:text-white"> <span className="hosting">to hosting </span></h1>
          <button className='btns bg-red-700 w-1/2 m-4 p-2'> SEE MORE</button>
        </div>
        <div className='w-1/2'>
        <iframe width="420" height="315"
        src="https://www.youtube.com/embed/Y5orNlPhuos">
        </iframe>
        
        </div>
      </div>
      
    </div>
  <div className='bg-white w-full'>
    
    <div className=" io text-4xl">
    <span className=' ion'>
      <ion-icon name="chevron-back-circle-outline"></ion-icon>
      <ion-icon name="chevron-forward-circle-outline"></ion-icon>
    </span>
    
  </div>
  </div>
  </div>
  
 
  </div>








    
    </div>
    
    
    
   
  );
}

export default App;
