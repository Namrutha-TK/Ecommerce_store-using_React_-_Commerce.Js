const Password = () => {
  return (
    <div>
      <div className="signin">
        <div>
          <img src="" alt="logoImage" />
        </div>
        <div className="row">
          <div className="col-md-3 border">
            <h6>Sign in</h6>
            <p>
              {" "}
              email <a>Change</a>
            </p>
            <p>Password</p>
            <input type="password" />
            <button type="button" className="btn btn-warning mb-2">
              Sign in
            </button>
            <div class="form-check d-inline p-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Keep me signed in.
              </label>
            </div>
           <p className="text-primary">Details <i class="bi bi-caret-down-fill"></i></p>
          </div>
        </div>
      </div>
      <hr />
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
};

export default Password;
