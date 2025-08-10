import { useState } from "react";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [showPictures, setShowPictures] = useState(false);

  const handleOpen = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      setIsOpen(true);
    }, 600);
  };

  return (
    <div className="love-container">
      {/* Envelope + Letter */}
      <div
        className={`envelope ${isOpen ? "open" : ""} ${
          isShaking ? "shake" : ""
        } ${showPictures ? "blurred" : ""}`}
      >
        <div className="flap"></div>
        <div className="letter">
          <p className="letter-title">Happy Birthday Baby! </p>
          <p>
            Happy Birthday baby! second time na natin i cecelebrate birthday
            mooo. ang bilis ng panahonn na parang dati lang nagdate tayo sa
            baclaran na sobrang saya me na makasama ka lang, first of all baby,
            super proud ako sayo lalo na sa mga araw na pinagdaanan natin like
            sa mga pagod at hirap pero pinaglaban at kinaya din natin. Always
            the best ka para sakin na kahit awayin mo ko HAHAHAHA as long as
            nandyan ka wala na ako ibang hihilingin pa. Yung mga gifts mas
            dadami pa yan baby kaso ngayon talagaaa wala pa, pero sinasabi ko
            lang haa, always ko iniisip na walang pressure dahil sinabihan mo
            ko. Pero kung meron ako at kayang kaya ko ibigay why not diba, kaya
            cant wait talaga makuha yung mga pangarap natin baby lalo na yung
            araw na makakasama na tayo lagi. tska yung matulungan ka din lagi,
            alam ko iisipin mo na mag focus ako sa sarili at sa family pero baby
            part ka kasi lagi sakin like family and dun pa lang enough na
            happiness ko. always thankful at grateful sa lahat ng binibigay mo
            sakinn hay paka swerte ko talaga. kaya wish ko lang na hindi u mag
            bago and hoping na makuha mo din mga gusto mo sa life. love na love
            kita sobra baby.always here for u no matter what. 21 na pero baby
            koo parin lagiii more birthday to come with you baby.
            <br />
          </p>
          <p className="signature">Yours forever, 💗</p>
        </div>
      </div>

      {/* Floating flowers when open */}
      {isOpen && !showPictures && (
        <div className="flowers">
          <span>🌸</span>
          <span>🌼</span>
          <span>💐</span>
          <span>🌹</span>
          <span>🌷</span>
        </div>
      )}

      {/* Open letter button */}
      {!isOpen && (
        <button onClick={handleOpen} disabled={isOpen}>
          Open Letter 💌
        </button>
      )}

      {/* Show pictures button */}
      {isOpen && !showPictures && (
        <button className="buttonpic" onClick={() => setShowPictures(true)}>
          kissss babyy
        </button>
      )}

      {/* Pictures section */}
      {showPictures && (
        <>
          <div className="pictures">
            <img
              src={`${import.meta.env.BASE_URL}assets/saultine5.jpg`}
              alt="Memory 1"
            />
            <img
              src={`${import.meta.env.BASE_URL}assets/saultine2.jpg`}
              alt="Memory 2"
            />
            <img
              src={`${import.meta.env.BASE_URL}assets/saultine3.jpg`}
              alt="Memory 3"
            />
            <img
              src={`${import.meta.env.BASE_URL}assets/saultine4.jpg`}
              alt="Memory 3"
            />
            <img
              src={`${import.meta.env.BASE_URL}assets/saultine1.jpg`}
              alt="Memory 3"
            />
            <img
              src={`${import.meta.env.BASE_URL}assets/saultine6.jpg`}
              alt="Memory 3"
            />
            <img
              src={`${import.meta.env.BASE_URL}assets/saultine7.jpg`}
              alt="Memory 3"
            />
            <img
              src={`${import.meta.env.BASE_URL}assets/saultine8.jpg`}
              alt="Memory 3"
            />
            <img
              src={`${import.meta.env.BASE_URL}assets/saultine9.jpg`}
              alt="Memory 3"
            />
          </div>

          <button onClick={() => setShowPictures(false)}>
            Close Pictures ❌
          </button>
        </>
      )}
    </div>
  );
}
