function Email() {
    return (  
        <div>
            <div className="signin">
            <div>
                <img src="" alt="logoImage"/>
            </div>
             <div className="row">
                <div className="col-md-3 border">
                    <h6>Sign in or create account</h6>
                    <p>Enter mobile number or email</p>
                    <input type="text"/>
                    <button type="button" className="btn btn-warning mb-2"></button>
                    <p>By continuing you agree to Amazon's <span>Conditions of use</span>and <a>Privacy Notice</a></p>
                </div>
             </div>
             </div>
             <hr/>
             <div className="bottom">
                   <div className="row">
                    <div className="col">
                        <a>Conditions of Use</a>
                    </div>
                    <div className="col">
                       <a>Privacy Notice</a>
                    </div>
                    <div className="col">
                       <a>Help</a>
                    </div>
                   </div>
                   <div className="row">
                    <p>1996-2024 &copy; ShoppingCart.com,inc.com or its affiliates </p>
                   </div>
             </div>
        </div>
    );
}
 
export default Email;