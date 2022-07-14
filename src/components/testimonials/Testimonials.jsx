import React from "react";
import "./Testimonials.scss";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Nana Yaw Owusu Banahene",
      title: "Senior Developer",
      img: "assets/nana-yaw.jpg",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Edward Nana Dwemoh",
      title: "Co-Founder of DELKA",
      img: "assets/Edward.jpg",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Nana Bambara-Abban",
      title: "CEO of ALBI",
      img: "assets/Nana-Abban.jpg",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((data) => (
          <div
            className={data.featured ? "card featured" : "card"}
            key={data.id}
          >
            <div className="top">
              <img className="left" src="assets/right-arrow.png" alt="" />
              <img className="user" src={data.img} alt="" />
              <img className="right" src={data.icon} alt="" />
            </div>
            <div className="center">{data.desc}</div>
            <div className="bottom">
              <h3>{data.name}</h3>
              <h4>{data.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
