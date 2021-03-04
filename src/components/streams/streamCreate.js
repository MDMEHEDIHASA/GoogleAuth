import React from 'react';
import {Field,reduxForm} from 'redux-form';

class streamCreate extends React.Component{
    renderError({touched,error}){
        if(touched&&error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    renderInput=({input,meta,label})=>{
        //console.log(formprops);
        const className = `field ${meta.touched && meta.error ?'error':'' }`;
        return (<div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off"/>
            {/* <div>{meta.error}</div> */}
            {this.renderError(meta)}
        </div>);
    }
    onSubmitClick(formValue){
        console.log(formValue)
    }
    render(){
        console.log(this.props);
        return(
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmitClick)}>
                <Field name="title" component={this.renderInput} label="Eneter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
    
}

const validate = (formValue)=>{
    const errors = {}
  if (!formValue.title) {
    errors.title = 'Enter a title'
  }
  if (!formValue.description) {
    errors.description = 'Enter a description'
  }
  return errors
}


export default reduxForm({
    form:'StreamCreate',
    validate
})(streamCreate);