import data from "./imagedata";
import "./Slider.css";

export default function Slider(props) {
  const slide = data.map((e, i) => {
    return (
      <div
        id={i}
        className={i === props.slideIndex ? "myslides smooth"  : "myslidesnone"}>
        <a href={e.href}><img src={e.src} alt={e.alt} /></a>
      </div>
    );
  });
  return slide;
}