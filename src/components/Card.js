import React from 'react';

const Card = () => {
  return (
    <article className="br2 ba bg-near-black b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-3">
      <img src="https://source.unsplash.com/random/600x300/?cat" className="db w-100 br2 br--top" alt="mew mew" />
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1 className="tl f5 f4-ns mv0 pa0">lil kitty</h1>
          </div>
          <div className="dtc tr">
            <h2 className="tr f5 mv0 pa0">mew-mew</h2>
          </div>
        </div>
        <p className="tj ma0 mt2 f7 lh-copy measure light-gray">
          If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
          and touch water with paw then recoil in horror.
        </p>
      </div>
    </article>

  );
}

export default Card;