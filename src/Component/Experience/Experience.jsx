import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


function Experience() {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intemediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React-native</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>ObjectiveC| Xcode</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* end of frontend */}
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Postgresql</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>DynamoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Redis</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Kafka</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>SQS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>ExpressJS | VertX</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>AWS SERVICES</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        </div>
      
      </section>
  )
}

export default Experience