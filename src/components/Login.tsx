import React from 'react';

interface IloginProps{

}
interface ILoginState {
    userName: string;
    password: string;
    
}
class ILogin extends React.Component<IloginProps, ILoginState> {
    constructor(props: any){
        super(props);
        this.state ={
            userName: "John",
            password: "Doe123"
        }
    }
    //handleLoginStatus = (event:any)=>{
        //let name= event.target.name;
       // let value =event.target.value;
       // event.preventDefault();

        
    //}
    updateLoginStatus = (event:any):void=>{
        

        let userNameString: string,
             passwordString: string;
    const userName: HTMLInputElement  | null = document.querySelector('[name="user-name"]');
    const password: HTMLInputElement  | null = document.querySelector('[password="Password"]');

    if (userName===null)
       userNameString= '';
    else
       userNameString = userName.value;

    if (password===null)
       passwordString='';
    else
       passwordString=password.value;
    }
    handleLoginStatus =(event:any)=>{
        this.setState( {
            userName: this.state.userName,
            password: this.state.password
        });
    }
    

    
    render() {
      return (
        <form>
          <h1>Update sign-in status</h1>
          <label htmlFor="user-name"></label>
          <input type="text" name="user-name" value={this.state.userName} onClick={this.updateLoginStatus} placeholder="User Name" />
          <label htmlFor="Passworrd"></label>
          <input type="password"  value= {this.state.userName} onClick={this.updateLoginStatus} placeholder="password" />
          <button onClick ={this.updateLoginStatus}>Sign-in</button>
        </form>
      );
    }
  }


export default ILogin ; 