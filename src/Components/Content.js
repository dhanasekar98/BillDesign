import React from "react";

export const Content = () => {
    const [state, setState] = React.useState(false);

  return (
    <div className="according">
      <div className={state ?'contentBx active':'contentBx'} onClick={()=>{setState(state? false:true)}}>
        <div className="label">List One</div>
        <div className="content">
          <p>
            klndcwnodbinknd cwjkj skjbdi kj iub wib dkb ijdh h ie jbwc lqnui
            ibcic
          </p>
        </div>
          </div>
          <div className="contentBx">
              <div className="label">List One</div>
              <div className="content">
                  <p>
                      klndcwnodbinknd cwjkj skjbdi kj iub wib dkb ijdh h ie jbwc lqnui
                      ibcic
          </p>
              </div>
          </div>
    </div>
  );
};
