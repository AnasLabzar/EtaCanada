import React from 'react'
import icon from '../../assets/Icons/iconCanada.png'

function PubSection() {
    return (
        <div className='md:container md:mx-auto w-full text-black mb-10 mt-[36em]'>
            <div className="headerTitle flex  flex-col mx-auto mt-14">
                <img className='w-14 h-14 flex mb-4 self-center' src={icon} alt="" />
                <h1 className='text-2xl text-center font-medium mb-12 ml-6 mt-2'>
                    ETA - Electronic Travel Authorization</h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className='col-span-2 bg-red bg-[url("https://i.ibb.co/d69Jq9T/beautiful-view-peace-bridge-river-captured-calgary-canada-1.jpg")] bg-cover w-full h- bg-center'></div>
                <div className="bg-red">
                    <h1 className='text-2xl font-medium mb-6'>General Information :</h1>
                    <p>Once you have filled in your <b>application</b> and validated your payment, you will receive your <b>Electronic Authorization of Travel (ETA)</b> by e-mail.</p><br />
                    <p>Lead times for processing and to obtain the document are generally very short.</p><br />
                    <p>As of reception by e-mail of your <b>ETA</b>, you will be able to go on <b>the Canadian</b> ground for a first duration of 3 or 6 months (unless the Immigration Department fixes another period according to your dossier - a very exceptional measure).</p>
                </div>
            </div>
            <div className="flex grid-cols-2 flex-row gap-4 mt-20">
                <div className="bg-red">
                    <h1 className='text-2xl font-medium mb-6'>Technical provisions prior to any A application :</h1>
                    <p>You will need the following elements when making your online <b>ETA</b> application :</p><br />
                    <p>1 – <b>Valid passport.</b><br />
                        2 – <b>Valid email address</b> Valid email address (your A will be sent to your email address).</p><br />
                    <p>If you make a mistake with your email address when making your declaration, please contact our Customer Services Department to ensure your ETA is sent to a valid email address.</p><br /><br />

                    <h1 className='text-2xl font-medium mb-6'>ETA application for an entire family :</h1>
                    <p>Since an ETA application is individual, you need to make an application for each<br />member of the same family.</p>
                </div>
                <div className='col-span-2 bg-red bg-[url("https://i.ibb.co/v1yQVfV/happy-canada-day-family-mother-with-three-kids-hold-large-canadian-flag-celebration-mountains.jpg")] bg-cover w-full h- bg-center'></div>
            </div>
            <div className="flex grid-cols-3 flex-row gap-4 mt-20">
                <div className='col-span-2 bg-red bg-[url("https://i.ibb.co/qFQm0cZ/close-up-national-flag-canada-vancouver-city-skyscrapers-skyline-background.jpg")] bg-cover w-full h- bg-center'></div>
                <div className="bg-red">
                    <h1 className='text-2xl font-medium mb-6'>Conditions of admissibility on the Canadian ground :</h1>
                    <p>Since August 2015, <b>the Electronic Authorization of Travel (ETA)</b> is obligatory. Its validity is of 5 years or until the expiration date of your passport.</p><br />
                    <p>You must make a new application if you have a new <b>passport</b>.</p><br />
                    <p>Application for an <b>ETA</b> is made online over the Internet. In the event of difficulty, our customer service is at your disposal of the Monday to Saturday of 09.am to 8.pm online to assist you in your declaration.</p><br />
                    <p>The American citizens do not need an <b>ETA</b> to enter on the <b>Canadian</b> ground.</p>
                </div>
                <div className='col-span-2 bg-red bg-[url("https://i.ibb.co/3WgDYT3/plane-gains-altitude-flying-through-dense-layer-clouds-travel-flight.jpg")] bg-cover w-full h- bg-center'></div>
            </div>
            <div className="flex mt-20 grid-cols-2  gap-4 text-center">
                <div className="flex-col text-left">
                    <h1 className='text-2xl font-medium mb-6'>ETA application :</h1>
                    <p>For most <b>ETA</b> applications, an email reply is obtained within the day. <br />

                        Some applications require a longer response time . In this case, e-mail of Citizenship and Immigration Canada (CIC) is sent to you, you explaining the reasons of this delay of treatment.<br /><br />

                        If you change your email address, do not forget to contact our Customer Services Department to update your file.

                        Your <b>ETA</b> travel authorisation is linked to your passport. It is valid for 5 years but you must redo it if you change your passport.

                        You will be asked for it by the cabin crew when boarding the aircraft.</p>
                </div>
                <div className='col-span-2 bg-red bg-[url("https://i.ibb.co/4m9RXQC/visa-application-composition-with-canadian-flag.jpg")] bg-cover w-full h- bg-center'></div>
            </div>
            <div className="flex-col text-center mt-20">
                <h1 className='text-2xl font-medium mb-6'>Useful information - Reminders :</h1>
                <p>Your ETA authorizes you to move you on the <b>Canadian</b> ground (tourism or business) during one duration of 3 or 6 months, , or possibly, until the date scheduled by the immigration department at the time of your arrival on the <b>Canadian</b> ground.</p>
            </div>
            <div className="flex-col text-center mt-20">
                <h1 className='text-2xl font-medium mb-6'>Citizens of the following countries must produce an ETA to enter the Canada :</h1>
                <ul className='columns-5 text-left'>
                    <li>Andorra</li>
                    <li>Antigua and Barbuda</li>
                    <li>Australia</li>
                    <li>Austria</li>
                    <li>Bahamas</li>
                    <li>Barbados</li>
                    <li>Belgium</li>
                    <li>Brunei</li>
                    <li>Chile</li>
                    <li>Croatia</li>
                    <li>Cyprus</li>
                    <li>Czech republic</li>
                    <li>Darussalam</li>
                    <li>Denmark</li>
                    <li>Estonia</li>
                    <li>Finland</li>
                    <li>France</li>
                    <li>Germany</li>
                    <li>Greece</li>
                    <li>Iceland</li>
                    <li>Ireland</li>
                    <li>Italy</li>
                    <li>Japan</li>
                    <li>Latvia</li>
                    <li>Liechtenstein</li>
                    <li>Luxembourg</li>
                    <li>Malta</li>
                    <li>Monaco</li>
                    <li>Netherlands</li>
                    <li>New Guinea</li>
                    <li>New Zealand</li>
                    <li>Norway</li>
                    <li>Papua</li>
                    <li>Poland</li>
                    <li>Portugal</li>
                    <li>Republic of Korea</li>
                    <li>Samoa</li>
                    <li>San Marino</li>
                    <li>Singapore</li>
                    <li>Slovakia</li>
                    <li>Slovenia</li>
                    <li>Solomon Islands</li>
                    <li>Spain</li>
                    <li>Sweden</li>
                    <li>Swiss</li>
                    <li>United Kingdom</li>
                </ul>
                <p className='mt-8'>
                    Caution: Your <b>ETA</b> will facilitate the entry to you on the <b>Canadian</b> ground, but you will have nevertheless to answer the questions of the agents of immigration at the time of your passage at the border (goal of your visit, family professional situations and, destinations etc).
                </p>
            </div>
        </div>
    )
}

export default PubSection