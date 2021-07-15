import React, { useState } from 'react';
import das from '../../assets/das.png'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ADMISSION_FORM_SCHEMA } from '../../helpers/Admission';
import { useHistory } from 'react-router-dom';
import './Admission.scss';

function Admission() {
    
    const history = useHistory();

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        parent_name : "",
        parent_email : "",
        parent_relation: "",
        password : "",
    })

    const { register, handleSubmit, formState : {errors} } = useForm({
        resolver : yupResolver(ADMISSION_FORM_SCHEMA)
    })

    const handleAdmissionOfStudent = () => {
        console.log(formData)
        // postNewStudent(dispatch, formData, toast, history)
    }

    return (
        <section className="admission__wrapper">
            <form onSubmit={handleSubmit(handleAdmissionOfStudent)} className="admission__form">
                <div className="admission__logo__img">
                    <img src={das} alt="digital Aided School" />
                </div>
                <span className="admission__text">*Admission Open <br /> For <br /> <b>All Courses</b></span>
                <div className="admission__input__field">
                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" {...register("name")} placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}/>
                    <p className="login__error">{errors.name?.message}</p>
                </div>
                <div className="admission__input__field">
                    <label htmlFor="email">Email : </label>
                    <input type="email" name='email'  {...register("email")} placeholder="Enter your Email id" value={formData.email} onChange={(e)=>setFormData(prev => ({ ...prev, email: e.target.value }))}/>
                    <p className="login__error">{errors.email?.message}</p>
                </div>
                <div className="admission__input__field">
                    <label htmlFor="parent_name">Parent's name : </label>
                    <input type="text" name="parent_name" {...register("parent_name")} placeholder="Enter parent's name" value={formData.parentName} onChange={(e)=>setFormData(prev => ({ ...prev, parent_name: e.target.value }))}/>
                    <p className="login__error">{errors.parent_name?.message}</p>
                </div>
                <div className="admission__input__field">
                    <label htmlFor="parent_email">Parent's email : </label>
                    <input type="email" name="parent_email" {...register("parent_email")} placeholder="Enter parent's Email id" value={formData.parentEmail} onChange={(e)=>setFormData(prev => ({ ...prev, parent_email: e.target.value }))}/>
                    <p className="login__error">{errors.parent_email?.message}</p>
                </div>
                <div className="admission__input__field">
                    <label htmlFor="parent_relation">Parent's relation : </label>
                    <input type="text" name="parent_relation" {...register("parent_relation")} placeholder="Enter parent's relation" value={formData.parentRelation} onChange={(e)=>setFormData(prev => ({ ...prev, parent_relation: e.target.value }))}/>
                    <p className="login__error">{errors.parent_relation?.message}</p>
                </div>
                <div className="admission__input__field">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" {...register("password")} placeholder="Enter a new password" value={formData.password} onChange={(e)=>setFormData(prev => ({ ...prev, password: e.target.value }))}/>
                    <p className="login__error">{errors.password?.message}</p>
                </div>
                <button type="submit">Join Now</button>
                <p className="admission__privacy__policy">
                    By registering here, I agree to Digital Aided School <br/>
                        Terms & Conditions and Privacy Policy
                </p>
            </form>
        </section>
    )
}

export default Admission
