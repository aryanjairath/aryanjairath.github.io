import React from 'react'
import './experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs';
import Paint from '../../assets/PaintProgram.png'
const Experience = () => {
  return (
    <section id ='experience'>
        <h5> What Skills I Have</h5>
        <h2> My Experience</h2>
        <div className='container experience_container'>
            <div className = 'experience front_end'>
                <h3> Frontend Development</h3>
                <div className='experience_content'>
                    <article className = 'experience_details'>
                        <BsFillBookmarkCheckFill/>
                        <div>
                            <h4>React</h4>
                            <small className = 'text-light'>Intermediate</small>
                        </div>
                        <BsFillBookmarkCheckFill/>
                        <div>
                          <h4>HTML</h4>
                          <small className = 'text-light'>Intermediate</small>
                        </div>
                        <BsFillBookmarkCheckFill/>
                        <div>
                          <h4>CSS</h4>
                          <small className = 'text-light'>Intermediate</small>
                        </div>
                        <BsFillBookmarkCheckFill/>
                        <div>
                          <h4>JavaScript</h4>
                          <small className = 'text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className = 'experience back_end'>
            <h3> Backend Development</h3>
                <div className='experience_content'>
                    <article className = 'experience_details'>
                        <BsFillBookmarkCheckFill/>
                        <div>
                          <h4>Java</h4>
                          <small className = 'text-light'>Experienced</small>
                        </div>
                        <BsFillBookmarkCheckFill/>
                        <div>
                          <h4>MySQL</h4>
                          <small className = 'text-light'>Intermediate</small>
                        </div>
                        <BsFillBookmarkCheckFill/>
                        <div>
                          <h4>Python</h4>
                          <small className = 'text-light'>Intermediate</small>
                        </div>
                        <BsFillBookmarkCheckFill/>
                        <div>
                          <h4>C</h4>
                          <small className = 'text-light'>Intermediate</small>
                        </div>
                        <BsFillBookmarkCheckFill/>
                        <div>
                          <h4>XML</h4>
                          <small className = 'text-light'>Intermediate</small>
                        </div>
                    </article>
            </div>

        </div>
        </div>

    </section>
  )
}

export default Experience