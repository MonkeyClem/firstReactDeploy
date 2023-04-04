import React from 'react'; 

const Login = () => {
    return (
        <form>
           <div className='group'>
            <label htmlFor='login'>Identifiant</label> 
            <input type ='text'name ='login'></input>
            </div> 
           <div className='group'></div> 
           <div className='group'>
                <button>Connexion</button>
            </div> 
        </form>
    )
}