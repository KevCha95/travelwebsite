import React from 'react'
import './ContentStyle.css'

import { useEffect, useState} from 'react'
import { useForm } from "react-hook-form";

import swal from 'sweetalert';


function Content({details,faq,contact}) {

    //Get data from API to create the cards on "What can you do"
    const [cards, setCards] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://624a2215fd7e30c51c0a9892.mockapi.io/api/cards')
            const Data = await response.json()
            setCards(Data)
        }
        fetchData()
    }, [])

    //Show and hide the answers on FAQ section
    const [showText, setShowText] = useState([false,false,false,false]);
    const showTextClick = (num) => {
        const newList = [...showText];
        if (newList[num] === false) {
            newList[num] = true;
        }else {
            newList[num] = false;
        }
        setShowText(newList);
    }

    //Data and validation of Contact section
    //Validation part of the forms using "react hook form"
    const { register, handleSubmit,reset, formState: { errors, isSubmitSuccessful } } = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        swal({
            title: "Good job!",
            text: "Your email has been sent successfully",
            icon: "success",
        });
    };

    useEffect(() => {
      reset({ 
          firstName : '',
          lastName : '',
          email : '',
          description : ''
       })
    }, [isSubmitSuccessful])


  return (
    <section>
        <div className="services--Container" ref={details}>
            <h1>What can <span>you do</span></h1>
            <div className="cards--Container">
                {
                    cards.map((curElem) => {
                        return (
                            <div className="card--Body">
                                <div className="card--Image">
                                    <img src={curElem.imgURL} alt="" />
                                </div>
                                <div className="card--Text">
                                    <p>{curElem.description}</p>
                                </div>
                             </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="experience--Container">
            <h1>Customer <span>Experience</span></h1>
            <div className="squares--Container">
                <div className="squares--Row">
                    <div className='square1'>
                        <h2>Abigail Ramirez</h2>
                    </div>
                    <div className='square2'>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra."</p>
                    </div>
                </div>
                <div className="squares--Row">
                    <div className='square3'>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra."</p>
                    </div>
                    <div className='square4'>
                        <h2>Eduardo Jimenez</h2>
                    </div>
                </div>
                <div className="squares--Row">
                    <div className='square5'>
                        <h2>Gabriela Palai</h2>
                    </div>
                    <div className='square6'>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra."</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="faq--Container" ref={faq}>
            <h1>Frequently As<span>ked Questions</span></h1>
            <div className="questions--Container">
                <div className="question--Holder" onClick={() => showTextClick(0)}>
                    <div className="question-icon--Container">
                        <h2>How much for the extra services?</h2>
                        <span className={showText[0] ? 'material-icons-outlined rotate' : 'material-icons-outlined'}>arrow_forward_ios</span>
                    </div>
                    <div className={showText[0] ? 'show-question' : 'show-question unactive'}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis, omnis explicabo soluta impedit exercitationem voluptatibus cum pariatur alias rerum, necessitatibus laboriosam magnam eius repellendus autem beatae, asperiores quam ea?</p>
                    </div>
                </div>
                <div className="question--Holder" onClick={() => showTextClick(1)}>
                    <div className="question-icon--Container">
                        <h2>What's the duration of the boat's trip?</h2>
                        <span className={showText[1] ? 'material-icons-outlined rotate' : 'material-icons-outlined'}>arrow_forward_ios</span>
                    </div>
                    <div className={showText[1] ? 'show-question' : 'show-question unactive'}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis, omnis explicabo soluta impedit exercitationem voluptatibus cum pariatur alias rerum, necessitatibus laboriosam magnam eius repellendus autem beatae, asperiores quam ea?</p>
                    </div>
                </div>
                <div className="question--Holder" onClick={() => showTextClick(2)}>
                    <div className="question-icon--Container">
                        <h2>How many hours is the quadbike ride?</h2>
                        <span className={showText[2] ? 'material-icons-outlined rotate' : 'material-icons-outlined'}>arrow_forward_ios</span>
                    </div>
                    <div className={showText[2] ? 'show-question' : 'show-question unactive'}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis, omnis explicabo soluta impedit exercitationem voluptatibus cum pariatur alias rerum, necessitatibus laboriosam magnam eius repellendus autem beatae, asperiores quam ea?</p>
                    </div>
                </div>
                <div className="question--Holder" onClick={() => showTextClick(3)}>
                    <div className="question-icon--Container">
                        <h2>Do you have any animal trip?</h2>
                        <span className={showText[3] ? 'material-icons-outlined rotate' : 'material-icons-outlined'}>arrow_forward_ios</span>
                    </div>
                    <div className={showText[3] ? 'show-question' : 'show-question unactive'}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis, omnis explicabo soluta impedit exercitationem voluptatibus cum pariatur alias rerum, necessitatibus laboriosam magnam eius repellendus autem beatae, asperiores quam ea?</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="contact--Container" ref={contact}>
            <h1>Contact <span>Us</span></h1>
            <form action="" className="form--Body" onSubmit={handleSubmit(onSubmit)}>
                <div className="input--Holder">
                    <label>
                        <h1 htmlFor="">First Name</h1>
                        <input type="text" placeholder="Enter your name.." {...register("firstName", {
                            required: "First name is a required",
                            maxLength: {value: 20, message: "Max length is 20"}
                        })} className={errors.firstName ? 'input--Error' : ''}/>
                    </label>
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div className="input--Holder">
                    <label>
                        <h1 htmlFor=""><span>Last Name</span></h1>
                        <input type="text" placeholder="Enter your last name.." {...register("lastName", {
                            required: "Last name is a required",
                            maxLength: {value: 20, message: "Max length is 20"}
                        })} className={errors.lastName ? 'input--Error' : ''}/>
                    </label>
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <div className="input--Holder">
                    <label>
                        <h1 htmlFor="">Email</h1>
                        <input type="text" placeholder="Enter your email contact.." {...register("email", {
                            required: "The email is a required",
                            pattern: {
                              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                              message: "Invalid email address"
                            }
                        })} className={errors.email ? 'input--Error' : ''}/>
                        <span></span>
                    </label>
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="input--Holder">
                    <label>
                        <h1 htmlFor=""><span>Description</span></h1>
                        <textarea id="" cols="30" rows="10" placeholder="Enter the description.." {...register("description", {
                            required: "Discription is a required",
                            minLength: {value: 2, message: "Min length is 2"}
                        })} className={errors.description ? 'input--Error' : ''}></textarea>
                    </label>
                    {errors.description && <p>{errors.description.message}</p>}
                </div>
                <button type="submit"><span></span>Send Email</button>
            </form>
        </div>
    </section>
  )
}

export default Content