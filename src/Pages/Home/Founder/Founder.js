import React from "react";
import "./Founder.css";
import leftimg from "../../../assets/leftimg.png";
import rightimg from "../../../assets/rightimg.png";

const Founder = () => {
  return (
    <>
      <div className="founder_wrapper">
        <div className="founder_title">
          <h1>
            Learn From
            <span style={{ color: "var(--primaryColor)" }}>The Best</span>
          </h1>
          <p>Explore the concepts with India’s most experienced Teachers!</p>
        </div>

        <div className="founder_box_wrapper">
          <div className="founder_left">
                      
            <img src={leftimg} alt="" />
            <h1>GAURAV KUMAR TRIPATHI</h1>
            <span>(I.P.S) UPSC CSE ALL INDIA RANK 226</span>
            <h2>Founder of UPSC Hindi</h2>
            <p>
              UPSC हिन्दी एक उत्कृष्ट शैक्षणिक संस्थान है जिसका उद्देश्य विशेष
              तौर पर सिविल सेवा की तैयारी में क्रांति लाना है। UPSC हिन्दी अपने
              ध्येय वाक्य “सिद्धिर्भवति कर्मजा” को श्रीमद्भागवतगीता से ग्रहण
              करता है एवं इसके सार को छात्रों के मध्य प्रसारित करता है कि
              “अभ्यास से ही सफलता प्राप्त होती है।” UPSC हिन्दी वर्तमान में संघ
              लोक सेवा आयोग एवं राज्य लोक सेवा आयोग के क्षेत्र में कार्य कर रहा
              है। भविष्य में UPSC हिन्दी अन्य सभी परीक्षाओं के लिए भी
              विद्यार्थियों को वहनीय, गुणवत्तापूर्ण एवं प्रभावी शिक्षण के साथ
              मार्गदर्शन उपलब्ध कराने हेतु प्रयासरत है। #Affordable_Education"
            </p>
          </div>
          <div className="founder_right">
            <h1>
              The Best & Affordable Institute <br />
              For <br /> IAS & PCS
            </h1>
            <img src={rightimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
