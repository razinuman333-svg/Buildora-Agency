import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import Servicecard from './Servicecard'

function Services() {
    const servicesData=[
        {title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon:assets.ads_icon

        },
         {title: 'Content marketing',
            description: 'We help you execute your plan and deliver results. ',
            icon:assets.marketing_icon

        },
         {title: 'Content writing',
            description: 'we help you create a marketing strategy',
            icon:assets.content_icon

        },
         {title: 'Social media',
            description: 'We help you build a strong social media presence and engage with your audience ',
            icon:assets.social_icon

        }
    ]
  return (
    <div id='services' className=' relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} className='absolute
        -top-50 -left-70 -z-1 dark:hidden'/>

        <Title title='How can We Help?' desc='Where strategy meets storytelling. We help brands find their voice in a noisy world through clean
         design, targeted social media, and high-impact digital campaigns.'/>
         <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service,index)=>(
                <Servicecard key={index} service={service}/>
            ))}

         </div>
      
    </div>
  )
}

export default Services
