import React from "react";

const Contect = () => {
  return (
    <>
      <div className="contact" id="Contect">
        <div className="left">
          <img src="/contact.jpeg" alt="" />
        </div>
        <div className="right bg-slate-100">
          <form action="">
            <h1>Service Request!</h1>
            <h1 className="right-h2">Contact Us</h1>
            <div id="logo" class="icon-ic-drafts-24px"></div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              id="name"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              id="email"
              required
            />
            <textarea name="text" placeholder="Message"></textarea>
            {/* <div class="checkbox">
              {" "}
              <lable>
                <input type="checkbox" class="human_veryfication" />
                Yes, I'm Human!
              </lable>
            </div> */}
            <input type="submit" value="Send" id="button-blue" />
          </form>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Contect;
