import "./nav.scss";

function Nav() {
  let elList = document.querySelector(".list");
  console.log(elList);
  return (
    <div className="con">
      <div className="con1">
        <h1 className="con1__heading">Frontend Mentor</h1>
        <h2 className="con1__heading1">Feedback Board</h2>
      </div>
      <div className="con2">
        <button className="con2__btn"type="submit" >ALL</button>
        <button className="con2__btn" type="submit"  >UI</button>
        <button className="con2__btn" type="submit" > UX</button>
        <button className="con2__btn">Enhancement</button>
        <button className="con2__btn">Bug</button>
        <button className="con2__btn">Feature</button>
      </div>
      <div className="con3">
        <div className="con3__con">
          <h3 className="con3__h3">Roadmap</h3>
          <button className="con3__btn">View{onclick}</button>
        </div>
        <ul className="con3__list list">
          <li className="con3__item">
            <span className="con3__span"></span>
            <h3 className="con3__h31">Planned</h3>
            <h3 className="con3__h32">2</h3>
          </li> 
          <li className="con3__item">
            <span className="con3__span1"></span>
            <h3 className="con3__h31">In-Progress</h3>
            <h3 className="con3__h32">3</h3>
          </li>
          <li className="con3__item">
            <span className="con3__span2"></span>
            <h3 className="con3__h31">Live</h3>
            <h3 className="con3__h32">1</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
