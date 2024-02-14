import "swiper/css";
import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import moonData from '../moondata.json';

const MoonSlider = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMoonData, setSelectedMoonData] = useState(null);

  useEffect(() => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    const dataForSelectedDate = moonData[formattedDate];
    setSelectedMoonData(dataForSelectedDate);
  }, [selectedDate]);

  const handleDateChange = (event) => {
    const selectedDateString = event.target.value;
    const selectedDateObject = new Date(selectedDateString);
    setSelectedDate(selectedDateObject);
  };
  const activeSlideKey = selectedMoonData ? selectedDate.toISOString().split('T')[0] : null;

  // swiperが動いたときのイベント
  const onSlideChange = (swiper) => {
    console.log("swiped");
    // 新たにactiveになった画像に対応する日付の取得
    const newActiveDate = Object.keys(moonData)[swiper.realIndex];
    console.log(newActiveDate);

    // selectedMoonDataがnullでない場合のみ新しい値を設定
    if (selectedMoonData) {
      setSelectedMoonData({
        ...selectedMoonData,
        moon_rise_time: moonData[newActiveDate].moon_rise_time,
        moon_set_time: moonData[newActiveDate].moon_set_time,
        moon_transit_time: moonData[newActiveDate].moon_transit_time
      });
    }
  };

  // Swiperの設定オプション
  const swiperParams = {
    // 動いたら
    on: {
      slideChange: onSlideChange,
    },
    slidesPerView: 1,
    activeSlideKey: activeSlideKey,
    loop: true,
    // 画面からはみ出しているものは非表示
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    initialSlide: Object.keys(moonData).indexOf(selectedDate.toISOString().split('T')[0]),
    // 他のオプションもここで設定
    /* 手動でのスライドを禁止 */
    allowTouchMove: false,
  };

  return (
    <div>
      {/* 日付を指定するセレクタ */}
      <label htmlFor="dateSelector">Select Date:</label>
      <input
        type="date"
        id="dateSelector"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={handleDateChange}
      />

      {/* 選択した日付または選択したスライドのデータを表示 */}
      <div>
        <p>{selectedMoonData ? selectedDate.toISOString().split('T')[0] : ""}</p>
        <p className="data">Moon Rise Time: {selectedMoonData ? selectedMoonData.moon_rise_time : ""}　　Moon Set Time: {selectedMoonData ? selectedMoonData.moon_set_time : ""}</p>
        <p className="data">Moon Transit Time: {selectedMoonData ? selectedMoonData.moon_transit_time : ""}</p>
      </div>

      {/* Swiperで全データを表示 */}
      <Swiper {...swiperParams}>
        {Object.keys(moonData).map((date) => (
          <div key={date}>
            <img src={moonData[date].image_path} alt={`Moon on ${date}`} />
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default MoonSlider;
